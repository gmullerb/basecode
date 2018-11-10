# Base code Change Log

## November 2018 A

* Upgrades code-common-tasks to version 1.0.1.
  * Does some code changes in frontend's Gradle tasks to follow new version.
* Updates some backend code based on Spring Boot version 2.1.0.
* Fixes backend `bootRunDependenciesJar` task for running correctly on Java 11.
* Updates some README files.

## November 2018

* Fourth step to change the License of this project to UNLICENSE: Use [code-common-tasks plugin](https://github.com/gmullerb/code-common-tasks).
  * Removes `code.gradle`.
  * Adds Maven Url https://dl.bintray.com/gmullerb/all.shared.gradle for plugins, due to delays in the approval on [Gradle Plugin Repository](https://plugins.gradle.org/u/gmullerb) (new policies and more delays).
* Adjusts coverage ratios for `jacocoTestCoverageVerification`.
* Removes some constants in `back.gradle` in order to increase Readability.
* Upgrades base-style-config to version 1.0.8.
  * Does some code changes to follow new version.
* Upgrades Checkstyle to version 8.14.
* Upgrades PMD to version 6.9.0.
* Upgrades Spring Boot to version 2.1.0.
* Updates some README files.

## October 2018 A

* Third step to change the License of this project to UNLICENSE: Use [project-style-checker plugin](https://github.com/gmullerb/project-style-checker).
  * Removes `assessCommon` & `assessGradle` tasks.
  * Removes `extra.gradle`.
* Upgrades base-style-config to version 1.0.6.
  * Does some code changes to follow new version.
* Upgrades Checkstyle to version 8.13.
* Upgrades PMD to version 6.8.0.
* Updates some README files.

## October 2018

* Second step to change the License of this project to UNLICENSE: Moves `files.gradle` to its own project, [file-lister](https://github.com/gmullerb/file-lister).
* Changes from `karma-jasmine-jquery` to `karma-jasmine-jquery-2`, which has no dependencies on `bower`.
* Upgrades base-style-config to version 1.0.4.
  * Does some code changes to follow new version.
* Updates some README files.

## September 2018

* First step to change the License of this project to UNLICENSE: Moves Checkstyle, PMD, Codenarc, ESLint and Stylelint configuration to its own project, [base-style-config](https://github.com/gmullerb/base-style-config).
* Adds Mockito (How do i forget this before!).
* Rearranges alphabetically the script tasks in [`package.json`](front/package.json) in order to increase Readability.
* Moves Gradle's plugins configurations before tasks' configuration, in order to increase Readability, since plugins mainly have general common tasks configurations.
* Removes redundant global task: `assess`, `check`, `coverage`, `doc`, `run` and `test`, since Gradle will run it any way.
* Removes `e2e:run` task to avoid conflict or confusion with `back:run`.
* Removes all code tasks names configuration Constants, `CODE$ASSESS_MAIN_TASK_NAME` -> `assessMain`, `CODE$ASSESS_UNIT_TEST_TASK_NAME` -> `assessUnitTest`, `CODE$ASSESS_INTEGRATION_TEST_TASK_NAME` -> `assessIntegrationTest`, `CODE$ASSESS_TEST_TASK_NAME` -> `assessTest`, `CODE$ASSESS_TASK_NAME` -> `assess`, `CODE$UNIT_TEST_TASK_NAME` -> `unitTest`, `CODE$INTEGRATION_TEST_TASK_NAME` -> `integrationTest`, `CODE$COVERAGE_TASK_NAME` -> `coverage`, `CODE$DOCUMENTATION_TASK_NAME` -> `doc`, `GLOBAL$TEST_TASK_NAME` -> `test`, `GLOBAL$CHECK_TASK_NAME` -> `check`, `GLOBAL$RUN_TASK_NAME` -> `run`, to favor "Convention over Configuration", that makes the gradle code More Maintainable (it was hard to follow).
* Removes `javax.xml.accessExternalDTD` property from `back` project.
* Fixes issues with JUnit5 Test tasks configuration: was missing `useJUnitPlatform()` in order to been able run.
* Fixes issues with `back:assess` task: was not running `checkstyleTest` task.
* Fixes issues with `front:integrationTest` task: was not checking output dir.
* Fixes issues with code coverage average value [`coverage.gradle`](back/local_gradle/coverage.gradle).
* Upgrades Gradle to version 4.10.2.
* Upgrades Checkstyle to version 8.11.
* Upgrades PMD to version 6.7.0.
* Upgrades Spring Boot to version 2.0.5.
* Upgrades gulp-uglify to version 3.0.1.
* Updates tasks' diagrams for main and `back` project.
* Updates some README files.
* Rearranges chronologically this file's information, starting from most recent change.

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
