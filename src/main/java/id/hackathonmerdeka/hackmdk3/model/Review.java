package id.hackathonmerdeka.hackmdk3.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Entity
public class Review {

    @Id
    @GeneratedValue
    private Long id;

    @Version
    private Long version;

    @Column(nullable = false)
    private String subject;

    @Column(nullable = false)
    private String content;

    @Column
    private String media;

    @Column(nullable = false)
    private Date createDate = new Date();

    @Column(nullable = false, name = "revlike")
    private Long like = 0l;

    @Column(nullable = false)
    private Long dislike = 0l;

    @Column(nullable = false)
    private Double rating = 0d;

    @Column
    private BigDecimal cost;

    @Column
    private Long waitingTime;

    @ManyToOne
    private Department department;

    @ManyToOne
    private CivilService civilService;

    @ManyToOne
    private User user;

    @OneToOne(mappedBy = "review")
    ReviewStatement reviewStatement;

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

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getMedia() {
        return media;
    }

    public void setMedia(String media) {
        this.media = media;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Long getLike() {
        return like;
    }

    public void setLike(Long like) {
        this.like = like;
    }

    public Long getDislike() {
        return dislike;
    }

    public void setDislike(Long dislike) {
        this.dislike = dislike;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public CivilService getCivilService() {
        return civilService;
    }

    public void setCivilService(CivilService civilService) {
        this.civilService = civilService;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public ReviewStatement getReviewStatement() {
        return reviewStatement;
    }

    public void setReviewStatement(ReviewStatement reviewStatement) {
        this.reviewStatement = reviewStatement;
    }

    public BigDecimal getCost() {
        return cost;
    }

    public void setCost(BigDecimal cost) {
        this.cost = cost;
    }

    public Long getWaitingTime() {
        return waitingTime;
    }

    public void setWaitingTime(Long waitingTime) {
        this.waitingTime = waitingTime;
    }
}
