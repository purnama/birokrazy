package id.hackathonmerdeka.hackmdk3.service;

import id.hackathonmerdeka.hackmdk3.model.Review;
import id.hackathonmerdeka.hackmdk3.repository.CivilServiceRepository;
import id.hackathonmerdeka.hackmdk3.repository.ReviewRepository;
import id.hackathonmerdeka.hackmdk3.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.Principal;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Service
@Transactional
public class CivilServiceService {

    @Autowired
    private CivilServiceRepository civilServiceRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private UserRepository userRepository;

    public Iterable<Review> findAllReview(Long id) {
        return reviewRepository.findByCivilService(civilServiceRepository.findOne(id));
    }

    public Review saveReview(Long id, Review civilServiceReview, Principal principal) {
        civilServiceReview.setUser(userRepository.findByUsername(principal.getName()));
        civilServiceReview.setCivilService(civilServiceRepository.findOne(id));
        return reviewRepository.save(civilServiceReview);
    }
}
