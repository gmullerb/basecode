package fit.your.needs.beans;

import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertAll;

public class SomeBeanTest {
  @Test
  public void shouldFitYourNeeds() {
    assertAll(() -> assertEquals("data", new SomeBean().fitYourNeeds("data")));
  }
}
