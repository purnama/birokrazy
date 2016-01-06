package id.hackathonmerdeka.hackmdk3.repository;

import id.hackathonmerdeka.hackmdk3.model.CivilService;
import id.hackathonmerdeka.hackmdk3.model.Department;
import id.hackathonmerdeka.hackmdk3.model.Review;
import id.hackathonmerdeka.hackmdk3.model.UserData;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Repository
public interface ReviewRepository extends CrudRepository<Review, Long>{

    List<Review> findByCivilService(CivilService civilService );

    List<Review> findByDepartment(Department department);

    List<Review> findByUser(UserData user);
}
