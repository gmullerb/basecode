package fit.your.needs;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.env.Environment;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles("test")
public class MainIntegrationTest {
  @Value("${mysettings.key1}")
  private String value1;

  @Autowired
  private Environment environment;

  @Test
  public void someTest() {
    assertEquals("test1", value1);
    assertEquals("value2", environment.getProperty("mysettings.key2"));
  }
}
