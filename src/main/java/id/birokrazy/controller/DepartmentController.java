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
public class DepartmentController extends ProtectedController {

    @Autowired
    private CivilServiceService civilServiceService;

    @RequestMapping(path = "/department/{id}/review", method = RequestMethod.PUT, consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    @PreAuthorize("hasAnyAuthority('USER', 'ADMINISTRATOR')")
    public Review saveOrUpdateReview(@PathVariable("id") Long id, @RequestBody Review civilServiceReview, Principal principal) {
        return null;
        //return civilServiceService.saveReview(id, civilServiceReview, principal);
    }

}
