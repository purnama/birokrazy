package id.hackathonmerdeka.hackmdk3.repository;

import id.hackathonmerdeka.hackmdk3.model.CivilService;
import id.hackathonmerdeka.hackmdk3.model.CivilServiceReview;
import id.hackathonmerdeka.hackmdk3.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Repository
public interface CivilServiceReviewRepository extends CrudRepository<CivilServiceReview, Long>{

    List<CivilServiceReview> findByCivilService(CivilService civilService );

    List<CivilServiceReview> findByUser(User user);
}
