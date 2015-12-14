package id.hackathonmerdeka.hackmdk3.controller;

import id.hackathonmerdeka.hackmdk3.model.Review;
import id.hackathonmerdeka.hackmdk3.model.User;
import id.hackathonmerdeka.hackmdk3.repository.ReviewRepository;
import id.hackathonmerdeka.hackmdk3.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@RestController
public class UserController extends ProtectedController {

	@Autowired
	private UserRepository repository;

	@Autowired
	private ReviewRepository reviewRepository;


	@PreAuthorize("hasAuthority('ADMINISTRATOR')")
	@RequestMapping(path="/user", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public Iterable<User> findAll(){
		return repository.findAll();
	}

	@RequestMapping(path="/user/{id}/review", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public Iterable<Review> findReviewById(@PathVariable("id") Long id){
		return reviewRepository.findByUser(repository.findOne(id));
	}

}
