package fit.your.needs.beans;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class SomeBeanTest {
  @Test
  public void shouldFitYourNeeds() {
    assertAll(() -> assertEquals("data", new SomeBean().fitYourNeeds("data")));
  }
}
