package id.hackathonmerdeka.hackmdk3.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@RestController
@RequestMapping(path = "api/v1/protected")
abstract public class ProtectedController {
}
