package id.birokrazy.repository;

import id.birokrazy.model.Review;
import id.birokrazy.model.CivilService;
import id.birokrazy.model.Department;
import id.birokrazy.model.UserData;
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
