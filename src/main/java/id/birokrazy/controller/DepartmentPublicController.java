package id.birokrazy.controller;

import id.birokrazy.model.Department;
import id.birokrazy.model.Review;
import id.birokrazy.service.DepartmentService;
import id.birokrazy.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@RestController
public class DepartmentPublicController extends PublicController {

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private DepartmentService departmentService;

    @RequestMapping(path = "/department", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public Iterable<Department> findAll() {
        return departmentRepository.findAll();
    }

    @RequestMapping(path = "/department/{id}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public Department findById(@PathVariable("id") String id) {
        try {
            return departmentRepository.findOne(Long.parseLong(id));
        } catch (NumberFormatException ex) {
            return departmentRepository.findByUniqueName(id);
        }
    }

    @RequestMapping(path = "/department/{id}/review", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public Iterable<Review> findAllReview(@PathVariable("id") String id) {
        try {
            return departmentService.findAllReview(Long.parseLong(id));
        } catch (NumberFormatException ex) {
            return departmentService.findAllReviewByUniqueName(id);
        }
    }

}
