package id.birokrazy.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import id.birokrazy.model.oauth2.OauthClientDetails;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Entity
public class UserData implements Serializable {

    @Id
    @GeneratedValue()
    private Long id;

    @Version
    @Column(columnDefinition = "bigint default 0")
    private Long version;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Review> reviewList;

    @OneToOne
    private OauthClientDetails oauthClientDetails;

    @Transient
    private Set<String> roles;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = version;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Review> getReviewList() {
        return reviewList;
    }

    public void setReviewList(List<Review> reviewList) {
        this.reviewList = reviewList;
    }

    public OauthClientDetails getOauthClientDetails() {
        return oauthClientDetails;
    }

    public void setOauthClientDetails(OauthClientDetails oauthClientDetails) {
        this.oauthClientDetails = oauthClientDetails;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }
}
