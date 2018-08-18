package fit.your.needs.beans;

import org.springframework.stereotype.Component;

/**
 * Some Bean.
 */
@Component
public class SomeBean {
  /**
   * Some method.
   * @param data Some data.
   * @return Some value.
   */
  public String fitYourNeeds(final String data) {
    return data == null || data.isEmpty()
      ? "null"
      : data;
  }
}
