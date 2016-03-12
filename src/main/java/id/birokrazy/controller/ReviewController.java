package id.birokrazy.controller;

import id.birokrazy.model.Review;
import id.birokrazy.service.CivilServiceService;
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

    @RequestMapping(path = "/review/{service}/{department}", method = RequestMethod.PUT, consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    @PreAuthorize("hasAnyAuthority('USER', 'ADMINISTRATOR')")
    public Review saveOrUpdateReview(@PathVariable("service") String service, @PathVariable("department") String department,  @RequestBody Review review, Principal principal) {
        return civilServiceService.saveReview(service, department, review, principal);
    }

}
