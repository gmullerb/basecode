# Base code Change Log

## August 2018

* Sets Java source compatibility to 1.10.
* Upgrades Gradle to version 4.9.
* Upgrades Spring Boot to version 2.0.4.
* Upgrades NodeJS to version 9.11.2.
* Upgrades Checkstyle to version 8.11.
* Upgrades PMD to version 6.6.0:
  * Migrates rulesets to category.
  * Adds some new excludes.
* Upgrades CodeNarc to version 1.2.
* Improves JUnit5 code and configuration:
  * Changes org.junit.Assert to org.junit.jupiter.api.Assertions.
  * Changes org.junit.Test to org.junit.jupiter.api.Test.
  * Changes SpringRunner to SpringExtension.
* Rearranges content of configuration files alphabetically for CodeNarc, Checkstyle, PMD and eslint, in order to make it more Maintainable.
  * Extracts NodeJS's eslint common configuration, [`.eslintrc-node.json`](front/config/.eslintrc-node.json)
* Updates some rules in Checkstyle, [`coding-checks.xml`](back/config/coding-checks.xml):
  * CustomImportOrder.
  * MethodCount.
* Suppresses some rules for Checkstyle for test files, [`checks-suppressions.xml`](back/config/checks-suppressions.xml):
  * MethodCount.
* Suppresses some rules for CodeNarc rules:
  * VariableTypeRequired.
* Improves [`hotrun.gradle`](back/local_gradle/hotrun.gradle) to increase Maintainability:
  * Adds Types.
  * Adds imports.
* Improves [`logger.gradle`](local_gradle/logger.gradle) to increase Maintainability:
  * Adds Types.
  * Adds imports.
* Fixes that when obtaining files for incremental build it was not getting any on subprojects.
  * [`files.gradle`](local_gradle/files.gradle): obtainFiles renamed to obtainFilesFromProject.
* Updates some README files.
