package id.hackathonmerdeka.hackmdk3.model.oauth2;

import org.hibernate.type.BinaryType;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Entity
public class OauthClientToken {

    @Id
    private String authenticationId;

    @Column
    private String tokenId;

    @Column
    private BinaryType token;

    @Column
    private String userName;

    @Column
    private String clientId;

    public String getTokenId() {
        return tokenId;
    }

    public void setTokenId(String tokenId) {
        this.tokenId = tokenId;
    }

    public BinaryType getToken() {
        return token;
    }

    public void setToken(BinaryType token) {
        this.token = token;
    }

    public String getAuthenticationId() {
        return authenticationId;
    }

    public void setAuthenticationId(String authenticationId) {
        this.authenticationId = authenticationId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }
}
