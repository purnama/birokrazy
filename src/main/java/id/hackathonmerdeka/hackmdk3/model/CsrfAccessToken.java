package id.hackathonmerdeka.hackmdk3.model;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Entity
public class CsrfAccessToken {

    @Id
    private String token;

    public CsrfAccessToken(){
    }

    public CsrfAccessToken(String token){
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
