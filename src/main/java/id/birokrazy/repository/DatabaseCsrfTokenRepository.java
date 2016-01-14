package id.birokrazy.repository;

import id.birokrazy.model.CsrfAccessToken;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Repository
public interface DatabaseCsrfTokenRepository extends CrudRepository<CsrfAccessToken, String> {
}
