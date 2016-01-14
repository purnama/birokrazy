package id.birokrazy.controller;

import id.birokrazy.repository.UserRepository;
import id.birokrazy.model.UserData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Arrays;
import java.util.HashSet;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@RestController
public class AuthController extends ProtectedController {

    @Autowired
    private UserRepository repository;

    @RequestMapping(path = "/login", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public UserData findByUsername(Principal user) {
        UserData result = repository.findByUsername(user.getName());
        if(result.getOauthClientDetails().getAuthorities() != null){
            result.setRoles(new HashSet<String>(Arrays.asList(result.getOauthClientDetails().getAuthorities().split(","))));
        }
        return result;
    }

}
