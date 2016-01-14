package id.birokrazy.service;

import id.birokrazy.model.oauth2.OauthClientDetails;
import id.birokrazy.repository.OauthClientDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Service
@Transactional
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    OauthClientDetailsRepository repository;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        OauthClientDetails user = repository.findByClientId(username);
        List<GrantedAuthority> authorities = buildUserAuthority(user.getAuthorities().split(","));

        return buildUserForAuthentication(user, authorities);
    }

    private org.springframework.security.core.userdetails.User
    buildUserForAuthentication(OauthClientDetails user,
                               List<GrantedAuthority> authorities) {
        return new org.springframework.security.core.userdetails.User(
                user.getClientId(), user.getClientSecret(), authorities);
    }

    private List<GrantedAuthority> buildUserAuthority(String[] userRoles) {

        Set<GrantedAuthority> setAuths = new HashSet<GrantedAuthority>();

        // Build user's authorities
        for (String userRole : userRoles) {
            setAuths.add(new SimpleGrantedAuthority(userRole));
        }

        return new ArrayList<GrantedAuthority>(setAuths);
    }
}
