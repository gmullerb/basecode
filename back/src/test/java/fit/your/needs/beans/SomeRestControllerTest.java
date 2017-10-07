package fit.your.needs.beans;

import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertAll;

public class SomeRestControllerTest {
  @Test
  public void shouldReturnHi() {
    assertAll(() -> assertEquals("Hi!", new SomeRestController().get()));
  }
}
