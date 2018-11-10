package fit.your.needs;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.env.Environment;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@ActiveProfiles("test")
public class MainIntegrationTest {
  @Value("${mysettings.key1}")
  private String value1;

  @Autowired
  private Environment environment;

  @Test
  public void shouldSomeTest() {
    assertAll("with values",
      () -> assertEquals("test1", value1),
      () -> assertEquals("value2", environment.getProperty("mysettings.key2")));
  }
}
