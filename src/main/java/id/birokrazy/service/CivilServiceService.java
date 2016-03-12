package id.birokrazy.service;

import id.birokrazy.model.Review;
import id.birokrazy.repository.CivilServiceRepository;
import id.birokrazy.repository.OauthClientDetailsRepository;
import id.birokrazy.repository.ReviewRepository;
import id.birokrazy.model.CivilService;
import id.birokrazy.repository.UserRepository;
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

    public Iterable<Review> findAllReviewByUniqueName(String id) {
        return reviewRepository.findByCivilService(civilServiceRepository.findByUniqueName(id));
    }

    public CivilService create(CivilService civilService) {
        CivilService newCivilService = new CivilService();
        newCivilService.setContent(civilService.getContent());
        newCivilService.setName(civilService.getName());
        newCivilService.setPrice(civilService.getPrice());
        newCivilService.setUniqueName(civilService.getUniqueName());
        newCivilService.setDescription(civilService.getDescription());
        return civilServiceRepository.save(newCivilService);
    }

    public CivilService update(String id, CivilService civilService) {
        CivilService oldCivilService;
        try {
            oldCivilService = civilServiceRepository.findOne(Long.parseLong(id));
        }catch(NumberFormatException e){
            oldCivilService = civilServiceRepository.findByUniqueName(id);
        }
        oldCivilService.setContent(civilService.getContent());
        oldCivilService.setName(civilService.getName());
        oldCivilService.setUniqueName(civilService.getUniqueName());
        oldCivilService.setDescription(civilService.getDescription());
        oldCivilService.setPrice(civilService.getPrice());
        return civilServiceRepository.save(oldCivilService);
    }

    public CivilService delete(String id){
        CivilService oldCivilService;
        try {
            oldCivilService = civilServiceRepository.findOne(Long.parseLong(id));
        }catch(NumberFormatException e){
            oldCivilService = civilServiceRepository.findByUniqueName(id);
        }
        civilServiceRepository.delete(oldCivilService);
        return oldCivilService;
    }

    public Review saveReview(String service, String department, Review civilServiceReview, Principal principal) {
        civilServiceReview.setUser(userRepository.findByUsername(principal.getName()));
        civilServiceReview.setCivilService(civilServiceRepository.findByUniqueName(service));
        civilServiceReview.setDepartment();
        return reviewRepository.save(civilServiceReview);
    }
}
