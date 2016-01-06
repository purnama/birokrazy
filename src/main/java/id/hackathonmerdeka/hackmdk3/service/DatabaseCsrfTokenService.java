package id.hackathonmerdeka.hackmdk3.service;

import id.hackathonmerdeka.hackmdk3.model.CsrfAccessToken;
import id.hackathonmerdeka.hackmdk3.repository.DatabaseCsrfTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.csrf.DefaultCsrfToken;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Service
@Transactional
public class DatabaseCsrfTokenService implements CsrfTokenRepository {

    private static final String DEFAULT_CSRF_PARAMETER_NAME = "_csrf";

    private static final String DEFAULT_CSRF_HEADER_NAME = "X-XSRF-TOKEN";

    private String parameterName = DEFAULT_CSRF_PARAMETER_NAME;

    private String headerName = DEFAULT_CSRF_HEADER_NAME;

    @Autowired
    DatabaseCsrfTokenRepository databaseCsrfTokenRepository;

    @Override
    public CsrfToken generateToken(HttpServletRequest request) {
        return new DefaultCsrfToken(headerName, parameterName, createNewToken());
    }

    @Override
    public void saveToken(CsrfToken token, HttpServletRequest request, HttpServletResponse response) {
        if (token == null) {
            if (request.getHeader(headerName) != null) {
                CsrfAccessToken csrfAccessToken = databaseCsrfTokenRepository.findOne(request.getHeader(headerName));
                if (csrfAccessToken != null) {
                    databaseCsrfTokenRepository.delete(csrfAccessToken);
                }
            }
        } else {
            CsrfAccessToken csrfAccessToken = databaseCsrfTokenRepository.findOne(token.getToken());
            if (csrfAccessToken == null) {
                databaseCsrfTokenRepository.save(new CsrfAccessToken(token.getToken()));
            }
        }
    }

    @Override
    public CsrfToken loadToken(HttpServletRequest request) {
        if (request.getHeader(headerName) == null) {
            return null;
        }
        CsrfAccessToken csrfAccessToken = databaseCsrfTokenRepository.findOne(request.getHeader(headerName));
        if (csrfAccessToken == null) {
            return null;
        }
        return new DefaultCsrfToken(headerName, parameterName, csrfAccessToken.getToken());
    }

    private String createNewToken() {
        return UUID.randomUUID().toString();
    }

    public String getParameterName() {
        return parameterName;
    }

    public void setParameterName(String parameterName) {
        this.parameterName = parameterName;
    }

    public String getHeaderName() {
        return headerName;
    }

    public void setHeaderName(String headerName) {
        this.headerName = headerName;
    }

    public DatabaseCsrfTokenRepository getCsrfTokenRepository() {
        return databaseCsrfTokenRepository;
    }

    public void setCsrfTokenRepository(DatabaseCsrfTokenRepository databaseCsrfTokenRepository) {
        this.databaseCsrfTokenRepository = databaseCsrfTokenRepository;
    }
}
