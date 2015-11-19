package id.hackathonmerdeka.hackmdk3.controller;

import id.hackathonmerdeka.hackmdk3.model.Highlight;
import id.hackathonmerdeka.hackmdk3.repository.HighlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@RestController
public class HighlightController {

	@Autowired
	private HighlightRepository repository;

	@RequestMapping(path = "/highlight", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public Iterable<Highlight> highlight(){
		return repository.findAll();
	}

}
