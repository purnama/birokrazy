package id.hackathonmerdeka.hackmdk3.service;

import id.hackathonmerdeka.hackmdk3.model.CivilServiceReview;
import id.hackathonmerdeka.hackmdk3.repository.CivilServiceRepository;
import id.hackathonmerdeka.hackmdk3.repository.CivilServiceReviewRepository;
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
    private CivilServiceReviewRepository civilServiceReviewRepository;

    @Autowired
    private UserRepository userRepository;

    public Iterable<CivilServiceReview> findAllReview(Long id) {
        return civilServiceReviewRepository.findByCivilService(civilServiceRepository.findOne(id));
    }

    public CivilServiceReview saveReview(Long id, CivilServiceReview civilServiceReview, Principal principal) {
        civilServiceReview.setUser(userRepository.findByUsername(principal.getName()));
        civilServiceReview.setCivilService(civilServiceRepository.findOne(id));
        return civilServiceReviewRepository.save(civilServiceReview);
    }
}
