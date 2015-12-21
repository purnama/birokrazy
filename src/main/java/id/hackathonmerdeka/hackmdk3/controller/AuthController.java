package id.hackathonmerdeka.hackmdk3.controller;

import id.hackathonmerdeka.hackmdk3.model.User;
import id.hackathonmerdeka.hackmdk3.model.oauth2.OauthClientDetails;
import id.hackathonmerdeka.hackmdk3.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@RestController
public class AuthController extends ProtectedController {

    @Autowired
    private UserRepository repository;

    @RequestMapping(path = "/login", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public User findByUsername(Principal user) {
        return repository.findByUsername(user.getName());
    }

}
