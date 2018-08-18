package fit.your.needs.beans;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class SomeRestControllerTest {
  @Test
  public void shouldReturnHi() {
    final SomeRestController controller = new SomeRestController();

    assertEquals("Hi!", controller.get());
  }
}
