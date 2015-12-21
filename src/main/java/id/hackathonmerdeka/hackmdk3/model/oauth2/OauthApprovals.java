package id.hackathonmerdeka.hackmdk3.model.oauth2;

import org.hibernate.type.CalendarType;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Entity
public class OauthApprovals {

    @Id
    private String userid;

    @Column
    private String clientid;

    @Column
    private String scope;

    @Column
    private String status;

    @Column
    private CalendarType expiresat;

    @Column
    private CalendarType lastmodifiedat;

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getClientid() {
        return clientid;
    }

    public void setClientid(String clientid) {
        this.clientid = clientid;
    }

    public String getScope() {
        return scope;
    }

    public void setScope(String scope) {
        this.scope = scope;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public CalendarType getExpiresat() {
        return expiresat;
    }

    public void setExpiresat(CalendarType expiresat) {
        this.expiresat = expiresat;
    }

    public CalendarType getLastmodifiedat() {
        return lastmodifiedat;
    }

    public void setLastmodifiedat(CalendarType lastmodifiedat) {
        this.lastmodifiedat = lastmodifiedat;
    }
}
