package id.hackathonmerdeka.hackmdk3.controller;

import id.hackathonmerdeka.hackmdk3.model.CivilService;
import id.hackathonmerdeka.hackmdk3.model.CivilServiceReview;
import id.hackathonmerdeka.hackmdk3.model.Highlight;
import id.hackathonmerdeka.hackmdk3.repository.CivilServiceRepository;
import id.hackathonmerdeka.hackmdk3.repository.CivilServiceReviewRepository;
import id.hackathonmerdeka.hackmdk3.service.CivilServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@RestController
public class CivilServiceProtectedController extends ProtectedController {

    @Autowired
    private CivilServiceService civilServiceService;

    @RequestMapping(path = "/civil-service/{id}/review", method = RequestMethod.PUT, consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    @PreAuthorize("hasAuthority('USER')")
    public CivilServiceReview saveOrUpdateReview(@PathVariable("id") Long id, @RequestBody CivilServiceReview civilServiceReview, Principal principal) {
        return civilServiceService.saveReview(id, civilServiceReview, principal);
    }

}
