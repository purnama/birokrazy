package id.birokrazy.repository;

import id.birokrazy.model.oauth2.OauthClientDetails;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Repository
public interface OauthClientDetailsRepository extends CrudRepository<OauthClientDetails, Long>{
    OauthClientDetails findByClientId(String clientId);
}
