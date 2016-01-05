package id.hackathonmerdeka.hackmdk3;

import id.hackathonmerdeka.hackmdk3.service.CsrfHeaderFilter;
import id.hackathonmerdeka.hackmdk3.service.CustomUserDetailsService;
import id.hackathonmerdeka.hackmdk3.service.DatabaseCsrfTokenService;
import org.apache.catalina.Context;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerFactory;
import org.springframework.boot.context.embedded.ErrorPage;
import org.springframework.boot.context.embedded.tomcat.TomcatContextCustomizer;
import org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.code.AuthorizationCodeServices;
import org.springframework.security.oauth2.provider.code.JdbcAuthorizationCodeServices;
import org.springframework.security.oauth2.provider.error.OAuth2AccessDeniedHandler;
import org.springframework.security.oauth2.provider.error.OAuth2AuthenticationEntryPoint;
import org.springframework.security.oauth2.provider.token.store.JdbcTokenStore;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.KeyStoreKeyFactory;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.sql.DataSource;
import java.security.KeyPair;
import java.util.Arrays;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public EmbeddedServletContainerCustomizer containerCustomizer() {

        return (container -> {
            ErrorPage error401Page = new ErrorPage(HttpStatus.UNAUTHORIZED, "/error/401.html");
            ErrorPage error404Page = new ErrorPage(HttpStatus.NOT_FOUND, "/error/404.html");
            ErrorPage error500Page = new ErrorPage(HttpStatus.INTERNAL_SERVER_ERROR, "/error/500.html");

            container.addErrorPages(error401Page, error404Page, error500Page);
        });
    }

    @Bean
    public EmbeddedServletContainerFactory servletContainer() {
        TomcatEmbeddedServletContainerFactory factory = new TomcatEmbeddedServletContainerFactory();
        factory.setTomcatContextCustomizers(Arrays.asList(new CustomTomcatContextCustomizer()));
        return factory;
    }

    @Bean
    public CsrfHeaderFilter createCsrfHeaderFilter() {
        return new CsrfHeaderFilter();
    }

    @Bean
    public UserDetailsService customUserDetailsService() {
        return new CustomUserDetailsService();
    }

    @Bean
    public CsrfTokenRepository customDatabaseCsrfTokenService() {
        return new DatabaseCsrfTokenService();
    }

    static class CustomTomcatContextCustomizer implements TomcatContextCustomizer {
        @Override
        public void customize(Context context) {
            context.setUseHttpOnly(false);
            context.setCookies(false);
        }
    }

    @Configuration
    @EnableResourceServer
    protected static class ResourceServerConfiguration extends
            ResourceServerConfigurerAdapter {

        @Autowired
        protected CsrfTokenRepository databaseCsrfTokenService;

        @Autowired
        protected CsrfHeaderFilter csrfHeaderFilter;

        @Override
        public void configure(ResourceServerSecurityConfigurer resources) {
            resources.resourceId("birokrazy");
        }

        @Override
        public void configure(HttpSecurity http) throws Exception {
            http.csrf().csrfTokenRepository(csrfTokenRepository()).and().
                    authorizeRequests().
                    antMatchers("/api/v1/protected/**").authenticated().
                    and().addFilterAfter(csrfHeaderFilter, CsrfFilter.class).httpBasic().disable().
                    sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        }

        private CsrfTokenRepository csrfTokenRepository() {
            //HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
            //csrfTokenRepository.setHeaderName("X-XSRF-TOKEN");
            return databaseCsrfTokenService;
        }
    }

    @Configuration
    protected static class ApiWebSecurityConfig extends WebSecurityConfigurerAdapter {
        @Autowired
        private AuthenticationManager auth;

        @Autowired
        UserDetailsService customUserDetailsService;

        @Autowired
        protected CsrfTokenRepository databaseCsrfTokenService;

        @Autowired
        protected CsrfHeaderFilter csrfHeaderFilter;

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.csrf().csrfTokenRepository(csrfTokenRepository()).requireCsrfProtectionMatcher(new AntPathRequestMatcher("/oauth/token")).disable()
                    .exceptionHandling().accessDeniedHandler(accessDeniedHandler()).and().
                    httpBasic().authenticationEntryPoint(authenticationEntryPoint()).and().
                    authorizeRequests().antMatchers("/api/v1/protected/**").authenticated().
                    and().
                    addFilterAfter(csrfHeaderFilter, CsrfFilter.class).sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        }

        @Override
        protected void configure(AuthenticationManagerBuilder auth) throws Exception {
            auth.parentAuthenticationManager(this.auth);
            auth.userDetailsService(customUserDetailsService);
        }

        private CsrfTokenRepository csrfTokenRepository() {
            //HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
            //csrfTokenRepository.setHeaderName("X-XSRF-TOKEN");
            return databaseCsrfTokenService;
        }

        @Bean
        protected AccessDeniedHandler accessDeniedHandler() {
            return new OAuth2AccessDeniedHandler();
        }

        @Bean
        protected AuthenticationEntryPoint authenticationEntryPoint() {
            OAuth2AuthenticationEntryPoint entryPoint = new OAuth2AuthenticationEntryPoint();
            entryPoint.setTypeName("Basic");
            entryPoint.setRealmName("oauth2/client");
            return entryPoint;
        }
    }

    @Configuration
    @EnableAuthorizationServer
    protected static class OAuth2Config extends AuthorizationServerConfigurerAdapter {
        @Autowired
        private AuthenticationManager auth;

        @Autowired
        private DataSource dataSource;

        private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        @Bean
        public JdbcTokenStore tokenStore() {
            return new JdbcTokenStore(dataSource);
        }

        @Bean
        protected AuthorizationCodeServices authorizationCodeServices() {
            return new JdbcAuthorizationCodeServices(dataSource);
        }


        @Bean
        public JwtAccessTokenConverter jwtAccessTokenConverter() {
            JwtAccessTokenConverter converter = new JwtAccessTokenConverter();
            KeyPair keyPair = new KeyStoreKeyFactory(
                    new ClassPathResource("keystore.jks"), "foobar".toCharArray())
                    .getKeyPair("test");
            converter.setKeyPair(keyPair);
            return converter;
        }

        @Override
        public void configure(AuthorizationServerSecurityConfigurer security)
                throws Exception {
            security.tokenKeyAccess("permitAll()").checkTokenAccess(
                    "isAuthenticated()");
            /*security.passwordEncoder(passwordEncoder);*/
        }

        @Override
        public void configure(AuthorizationServerEndpointsConfigurer endpoints)
                throws Exception {
            endpoints.authorizationCodeServices(authorizationCodeServices())
                    .authenticationManager(auth).tokenStore(tokenStore())
                    .approvalStoreDisabled().accessTokenConverter(jwtAccessTokenConverter());
        }

        @Override
        public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
            // @formatter:off
            clients.jdbc(dataSource)
                    /*.passwordEncoder(passwordEncoder)*/
                    ;
            // @formatter:on
        }
    }
}
