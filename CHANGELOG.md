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

## August 2018 A

* Upgrades eslint to version 5.3.0.
* Upgrades jasmine to version 3.2.0.
* Upgrades karma to version 3.0.0.
* Upgrades karma-jasmine to version 1.1.2.
* Upgrades jsdoc to version 3.5.5.
* Upgrades chromedriver to version 2.41.0.
* Upgrades geckodriver to version 1.12.1.
* Adds the global property GLOBAL$RUN_TASK_NAME (initial value: run), [`gradle.properties`](gradle.properties):
  * Moves from `BACK$GROUP_RUN` to `GLOBAL$GROUP_RUN`.
  * Adds an alias for `back:bootRun` task: `back:run`.
  * Adds an alias for `e2e:test` task: `e2e:run`.
  * Adds a `:run` task.
* Suppresses some PMD's rules, [`coding-rules.xml`](back/config/coding-rules.xml):
  * DataflowAnomalyAnalysis: It gets freaky with lambdas and cannot be configured independently for UR, DU and DD.
* Suppresses some PMD's rules for test files, [`coding-rules.xml`](back/config/coding-rules.xml):
  * ExcessivePublicCount.
  * TooManyMethods.
  * AvoidDuplicateLiterals.
  * BeanMembersShouldSerialize.
* Adds some rules to Checkstyle, [`coding-checks.xml`](back/config/coding-checks.xml):
  * AbstractClassName.
* Adds some custom rules to Checkstyle in order to increase Readability, [`coding-checks.xml`](back/config/coding-checks.xml):
  * [CallOnlyOneMethodPerLineForChainedCall](back/README.md###Code-Style-Checking).
  * [UseMultilineTernaryOperator](back/README.md###Code-Style-Checking).
* Suppresses some rules in some special conditions for PMD, [`coding-rules.xml`](back/config/coding-rules.xml):
  * `UselessParentheses` allows to group AND and OR conditions with parentheses to increase Readability.
* Adds some custom rules to PMD, [`coding-checks.xml`](back/config/coding-checks.xml):
  * AvoidFieldInjection.
* Adds some rules to eslint in order to increase Readability, [`.eslintrc.json`](front/.eslintrc.json):
  * newline-per-chained-call.
* Changes method parameters number limit to 4 (8 was to big, then hard to maintain).
* Rearranges plugins's id alphabetically.
* Migrates deprecated NodeJS's `GLOBAL` to `global`.
* Fixes some issues for Concurrent tasks API [`hotrun.gradle`](back/local_gradle/hotrun.gradle):
  * Adds a missing import: `java.time.Instant`.
  * Fixes misspelled method's name: from `createNewConnetion` to `createNewConnection`.
  * Fixes the returning type for createNewConnection: from `GradleConnector` to `ProjectConnection`.
* Updates some README files.
