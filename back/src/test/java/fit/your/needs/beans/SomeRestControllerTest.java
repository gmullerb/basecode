package fit.your.needs.beans;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class SomeRestControllerTest {
  @Test
  public void shouldReturnHi() {
    assertAll(() -> assertEquals("Hi!", new SomeRestController().get()));
  }
}
