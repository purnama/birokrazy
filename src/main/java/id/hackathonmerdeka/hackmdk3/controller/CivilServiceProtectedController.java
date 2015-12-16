package id.hackathonmerdeka.hackmdk3.controller;

import id.hackathonmerdeka.hackmdk3.model.CivilService;
import id.hackathonmerdeka.hackmdk3.repository.CivilServiceRepository;
import id.hackathonmerdeka.hackmdk3.service.CivilServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.Principal;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@RestController
public class CivilServiceProtectedController extends ProtectedController {

    @Autowired
    private CivilServiceRepository civilServiceRepository;

    @Autowired
    private CivilServiceService civilServiceService;

    @RequestMapping(path = "/service", method = RequestMethod.PUT, consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    @PreAuthorize("hasAnyAuthority('ADMINISTRATOR')")
    public CivilService create(@RequestBody CivilService civilService, Principal principal) {
        return civilServiceService.create(civilService);
    }

    @RequestMapping(path = "/service/{id}", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    @PreAuthorize("hasAnyAuthority('ADMINISTRATOR')")
    public CivilService update(@PathVariable("id") String id, @RequestBody CivilService civilService, Principal principal) {
        return civilServiceService.update(id, civilService);
    }

    @RequestMapping(path = "/service/{id}", method = RequestMethod.DELETE,
            produces = {MediaType.APPLICATION_JSON_VALUE})
    @PreAuthorize("hasAnyAuthority('ADMINISTRATOR')")
    public CivilService delete(@PathVariable("id") String id, Principal principal) {
        return civilServiceService.delete(id);
    }

}
