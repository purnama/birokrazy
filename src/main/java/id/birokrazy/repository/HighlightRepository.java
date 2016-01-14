package id.birokrazy.repository;

import id.birokrazy.model.Highlight;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Repository
public interface HighlightRepository extends CrudRepository<Highlight, Long>{

}
