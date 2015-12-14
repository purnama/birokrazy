package id.hackathonmerdeka.hackmdk3.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Controller
public class IndexController {

    @RequestMapping(value = "/{path:^(?!api)(?!index)(?!bower)(?!css)(?!error)(?!images)(?!js)(?!templates).*$}/**")
    public String forward(@PathVariable(value = "path") String path) {
        return "forward:/";
    }
}
