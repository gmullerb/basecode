package fit.your.needs.beans;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.mock;

public class SomeRestControllerTest {
  @Test
  public void shouldReturnHi() {
    final SomeBean someBean = mock(SomeBean.class);
    doReturn("Mocked Hi!")
      .when(someBean)
      .fitYourNeeds(any());
    final SomeRestController controller = new SomeRestController(someBean);

    assertEquals("Mocked Hi!", controller.get());
  }
}
