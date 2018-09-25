package fit.your.needs.beans;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SomeRestController {
  private final SomeBean bean;

  public SomeRestController(final SomeBean bean) {
    this.bean = bean;
  }

  @RequestMapping("/values")
  public String get() {
    return bean.fitYourNeeds("Hi!");
  }
}
