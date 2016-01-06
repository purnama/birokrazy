package id.hackathonmerdeka.hackmdk3.model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Entity
public class Highlight implements Serializable {

    @Id
    @GeneratedValue()
    private Long id;

    @Version
    @Column(columnDefinition = "bigint default 0")
    private Long version;

    @Column(nullable = false)
    private String image;

    @Column(nullable = false)
    private String description;

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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
