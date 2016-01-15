package id.birokrazy.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Type;
import org.hibernate.search.annotations.DocumentId;
import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Indexed;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Entity
@Indexed
public class CivilService {

    @Id
    @GeneratedValue
    @DocumentId
    private Long id;

    @Version
    @Column(columnDefinition = "bigint default 0")
    private Long version;

    @Column(nullable = false, unique = true)
    private String uniqueName;

    @Column(nullable = false)
    @Field
    private String name;

    @Column
    private String description;

    @Column(nullable = false)
    private BigDecimal price = BigDecimal.ZERO;

    @Column
    @Type(type = "text")
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

    @OneToMany(mappedBy = "civilService")
    @OrderBy("id desc")
    private List<Infographic> infographicList;

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

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public List<Infographic> getInfographicList() {
        return infographicList;
    }

    public void setInfographicList(List<Infographic> infographicList) {
        this.infographicList = infographicList;
    }
}
