package id.hackathonmerdeka.hackmdk3.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Entity
public class Department {

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
    private Double rating;

    @Column(nullable = false)
    private Long reviews;

    @Column(nullable = false)
    private String address;

    @Column
    private String addressAdd;

    @Column(nullable = false)
    private String zipCode;

    @Column(nullable = false)
    private String state;

    @Column
    private String telephone;

    @Column
    private String email;

    @Column
    private String openingHour;

    @Column
    private String longitude;

    @Column
    private String latitude;

    @OneToMany(mappedBy = "department")
    @OrderBy("id desc")
    @JsonIgnore
    private List<Review> reviewList;

    @ManyToMany(mappedBy = "departmentList")
    @OrderBy("id desc")
    @JsonIgnore
    private List<CivilService> civilServiceList;

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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAddressAdd() {
        return addressAdd;
    }

    public void setAddressAdd(String addressAdd) {
        this.addressAdd = addressAdd;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public List<CivilService> getCivilServiceList() {
        return civilServiceList;
    }

    public void setCivilServiceList(List<CivilService> civilServiceList) {
        this.civilServiceList = civilServiceList;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getOpeningHour() {
        return openingHour;
    }

    public void setOpeningHour(String openingHour) {
        this.openingHour = openingHour;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getUniqueName() {
        return uniqueName;
    }

    public void setUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
    }
}
