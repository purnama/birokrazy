package id.hackathonmerdeka.hackmdk3.controller;

import id.hackathonmerdeka.hackmdk3.model.Department;
import id.hackathonmerdeka.hackmdk3.repository.DepartmentRepository;
import id.hackathonmerdeka.hackmdk3.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@RestController
public class DepartmentProtectedController extends ProtectedController {

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private DepartmentService departmentService;

    @RequestMapping(path = "/department", method = RequestMethod.PUT, consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    @PreAuthorize("hasAnyAuthority('ADMINISTRATOR')")
    public Department create(@RequestBody Department department, Principal principal) {
        return departmentService.create(department);
    }

    @RequestMapping(path = "/department/{id}", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    @PreAuthorize("hasAnyAuthority('ADMINISTRATOR')")
    public Department update(@PathVariable("id") String id, @RequestBody Department department, Principal principal) {
        return departmentService.update(id, department);
    }

    @RequestMapping(path = "/department/{id}", method = RequestMethod.DELETE,
            produces = {MediaType.APPLICATION_JSON_VALUE})
    @PreAuthorize("hasAnyAuthority('ADMINISTRATOR')")
    public Department delete(@PathVariable("id") String id, Principal principal) {
        return departmentService.delete(id);
    }

}
