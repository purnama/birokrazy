package id.birokrazy.repository;

import id.birokrazy.model.CivilService;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Repository
public interface CivilServiceRepository extends CrudRepository<CivilService, Long>{

    CivilService findByUniqueName(String uniqueName);
}
