package id.hackathonmerdeka.hackmdk3.repository;

import id.hackathonmerdeka.hackmdk3.model.CivilService;
import id.hackathonmerdeka.hackmdk3.model.Review;
import id.hackathonmerdeka.hackmdk3.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Repository
public interface ReviewRepository extends CrudRepository<Review, Long>{

    List<Review> findByCivilService(CivilService civilService );

    List<Review> findByUser(User user);
}
