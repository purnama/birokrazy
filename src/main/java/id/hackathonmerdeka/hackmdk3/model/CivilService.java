package id.hackathonmerdeka.hackmdk3.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Entity
public class CivilService {

    @Id
    @GeneratedValue
    private Long id;

    @Version
    @Column(columnDefinition = "bigint default 0")
    private Long version;

    @Column(nullable = false, unique = true)
    private String uniqueName;

    @Column(nullable = false)
    private String name;

    @Column
    private String description;

    @Column(columnDefinition = "longvarchar")
    private String content;

    @Column(nullable = false)
    private Double rating = 0d;

    @Column(nullable = false)
    private Long reviews = 0l;

    @OneToMany(mappedBy = "civilService")
    @OrderBy("id desc")
    @JsonIgnore
    private List<Review> reviewList;

    @ManyToMany
    @OrderBy("id desc")
    @JsonIgnore
    private List<Department> departmentList;

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public Long getReviews() {
        return reviews;
    }

    public void setReviews(Long reviews) {
        this.reviews = reviews;
    }

    public List<Review> getReviewList() {
        return reviewList;
    }

    public void setReviewList(List<Review> reviewList) {
        this.reviewList = reviewList;
    }

    public List<Department> getDepartmentList() {
        return departmentList;
    }

    public void setDepartmentList(List<Department> departmentList) {
        this.departmentList = departmentList;
    }

    public String getUniqueName() {
        return uniqueName;
    }

    public void setUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
