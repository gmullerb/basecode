package fit.your.needs.beans;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class SomeBeanTest {
  @Test
  public void shouldFitYourNeeds() {
    final SomeBean someBean = new SomeBean();

    assertEquals("data", someBean.fitYourNeeds("data"));
  }

  @Test
  public void shouldWorkWithNullOrEmpty() {
    final SomeBean someBean = new SomeBean();

    assertAll("null or empty",
      () -> assertEquals("null", someBean.fitYourNeeds(null)),
      () -> assertEquals("null", someBean.fitYourNeeds("")));
  }
}
