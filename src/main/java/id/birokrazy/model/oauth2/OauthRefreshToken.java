package id.birokrazy.model.oauth2;

import org.hibernate.type.BinaryType;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Blob;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Entity
public class OauthRefreshToken {

    @Id
    private String tokenId;

    @Column
    private Blob token;

    @Column
    private Blob authentication;

    public String getTokenId() {
        return tokenId;
    }

    public void setTokenId(String tokenId) {
        this.tokenId = tokenId;
    }

    public Blob getToken() {
        return token;
    }

    public void setToken(Blob token) {
        this.token = token;
    }

    public Blob getAuthentication() {
        return authentication;
    }

    public void setAuthentication(Blob authentication) {
        this.authentication = authentication;
    }
}
