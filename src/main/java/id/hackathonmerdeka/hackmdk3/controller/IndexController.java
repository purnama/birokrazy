package id.hackathonmerdeka.hackmdk3.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@Controller
public class IndexController {

    @RequestMapping(path = {"/about", "/login", "/user"})
    public String forward(){
        return "forward:/";
    }
}
