package id.birokrazy.repository;

import id.birokrazy.model.UserData;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Repository
public interface UserRepository extends CrudRepository<UserData, Long> {
    UserData findByUsername(String username);
}