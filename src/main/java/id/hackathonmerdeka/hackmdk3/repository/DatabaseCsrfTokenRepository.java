package id.hackathonmerdeka.hackmdk3.repository;

import id.hackathonmerdeka.hackmdk3.model.CsrfAccessToken;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Repository
public interface DatabaseCsrfTokenRepository extends CrudRepository<CsrfAccessToken, String> {
}
