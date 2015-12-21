package id.hackathonmerdeka.hackmdk3.model.oauth2;

import org.hibernate.type.BinaryType;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Blob;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Entity
public class OauthCode {

    @Id
    private String code;

    @Column
    private Blob authentication;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Blob getAuthentication() {
        return authentication;
    }

    public void setAuthentication(Blob authentication) {
        this.authentication = authentication;
    }
}
