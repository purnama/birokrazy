package id.birokrazy.controller;

import id.birokrazy.model.Review;
import id.birokrazy.repository.CivilServiceRepository;
import id.birokrazy.model.CivilService;
import id.birokrazy.service.CivilServiceService;
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
public class CivilServicePublicController extends PublicController {

    @Autowired
    private CivilServiceRepository civilServiceRepository;

    @Autowired
    private CivilServiceService civilServiceService;

    @RequestMapping(path = "/service", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public Iterable<CivilService> findAll() {
        return civilServiceRepository.findAll();
    }

    @RequestMapping(path = "/service/{id}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public CivilService findById(@PathVariable("id") String id) {
        try {
            return civilServiceRepository.findOne(Long.parseLong(id));
        } catch (NumberFormatException ex) {
            return civilServiceRepository.findByUniqueName(id);
        }
    }

    @RequestMapping(path = "/service/{id}/review", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public Iterable<Review> findAllReview(@PathVariable("id") String id) {
        try {
            return civilServiceService.findAllReview(Long.parseLong(id));
        } catch (NumberFormatException ex) {
            return civilServiceService.findAllReviewByUniqueName(id);
        }
    }

}
