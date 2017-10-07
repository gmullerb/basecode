package fit.your.needs.beans;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class SomeRestController {
  @RequestMapping("/values")
  public String get() {
    return "Hi!";
  }
}
