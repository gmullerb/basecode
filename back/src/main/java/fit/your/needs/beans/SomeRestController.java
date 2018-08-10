package fit.your.needs.beans;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SomeRestController {
  @RequestMapping("/values")
  public String get() {
    return "Hi!";
  }
}
