package id.hackathonmerdeka.hackmdk3.controller;

import id.hackathonmerdeka.hackmdk3.model.CivilService;
import id.hackathonmerdeka.hackmdk3.model.CivilServiceReview;
import id.hackathonmerdeka.hackmdk3.repository.CivilServiceRepository;
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
public class CivilServicePublicController extends PublicController {

    @Autowired
    private CivilServiceRepository civilServiceRepository;

    @Autowired
    private CivilServiceService civilServiceService;

    @RequestMapping(path = "/civil-service", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public Iterable<CivilService> findAll() {
        return civilServiceRepository.findAll();
    }

    @RequestMapping(path = "/civil-service/{id}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public CivilService findById(@PathVariable("id") Long id) {
        return civilServiceRepository.findOne(id);
    }

    @RequestMapping(path = "/civil-service/{id}/review", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public Iterable<CivilServiceReview> findAllReview(@PathVariable("id") Long id) {
        return civilServiceService.findAllReview(id);
    }

}
