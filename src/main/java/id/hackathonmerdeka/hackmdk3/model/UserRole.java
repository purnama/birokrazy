package id.hackathonmerdeka.hackmdk3.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Entity
public class UserRole implements Serializable {

    @Id
    @GeneratedValue()
    private Long id;

    @Version
    private Long version;

    @Column(nullable = false)
    private String role;

    @ManyToOne
    @JsonIgnore
    private User user;

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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
