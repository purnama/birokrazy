package id.birokrazy.repository;

import id.birokrazy.model.Department;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Repository
public interface DepartmentRepository extends CrudRepository<Department, Long>{

    Department findByUniqueName(String uniqueName);
}
