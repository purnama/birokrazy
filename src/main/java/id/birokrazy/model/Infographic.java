package id.birokrazy.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Entity
public class Infographic {

    @Id
    @GeneratedValue
    private Long Id;

    @Version
    @Column(columnDefinition = "bigint default 0")
    private Long  version;

    @ManyToOne
    @JsonIgnore
    private CivilService civilService;

    @Column
    private String description;

    @Column
    private String resource;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public Long getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = version;
    }

    public CivilService getCivilService() {
        return civilService;
    }

    public void setCivilService(CivilService civilService) {
        this.civilService = civilService;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getResource() {
        return resource;
    }

    public void setResource(String resource) {
        this.resource = resource;
    }
}