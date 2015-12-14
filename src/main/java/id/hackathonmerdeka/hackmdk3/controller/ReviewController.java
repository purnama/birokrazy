package id.hackathonmerdeka.hackmdk3.controller;

import id.hackathonmerdeka.hackmdk3.model.Review;
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
public class ReviewController extends ProtectedController {

    @Autowired
    private CivilServiceService civilServiceService;

    @RequestMapping(path = "/review", method = RequestMethod.PUT, consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    @PreAuthorize("hasAnyAuthority('USER', 'ADMINISTRATOR')")
    public Review saveOrUpdateReview(@PathVariable("id") Long id, @RequestBody Review review, Principal principal) {
        return civilServiceService.saveReview(id, review, principal);
    }

}
