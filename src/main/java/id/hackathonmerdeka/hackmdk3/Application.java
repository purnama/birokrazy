package id.hackathonmerdeka.hackmdk3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@SpringBootApplication
@EnableAutoConfiguration(exclude = {
        SecurityAutoConfiguration.class
})
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
