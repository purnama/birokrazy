package id.birokrazy.controller;

import id.birokrazy.model.Review;
import id.birokrazy.model.oauth2.OauthClientDetails;
import id.birokrazy.repository.ReviewRepository;
import id.birokrazy.repository.OauthClientDetailsRepository;
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
	private OauthClientDetailsRepository repository;

	@Autowired
	private ReviewRepository reviewRepository;


	@PreAuthorize("hasAuthority('ADMINISTRATOR')")
	@RequestMapping(path="/user", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public Iterable<OauthClientDetails> findAll(){
		return repository.findAll();
	}

	@RequestMapping(path="/user/{id}/review", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public Iterable<Review> findReviewById(@PathVariable("id") Long id){
		return reviewRepository.findAll();
	}

}
