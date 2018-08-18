# Backend of the Web project - Java

## Folders structure

```
  /back
    /src
      /main
        /java
        /resources
      /test
        /java
        /resources
    /config
    /local_gradle
    /readme
```

- `src/main`: Source code.
- `src/test`: Test code.
- `config`: Configuration files.
- `local_gradle`: Local gradle modules folder.
- `readme`: Readme attachments folder.

* Backend is organized in package inside `src/main/java`.
* Backend environment information is in `src/*/resource/config/application-*.yml`.
  * With the current configuration, all environments information is inside the assembled Backend JAR.

### Conventions

* `*Test.java`: Unit test file
* `*IntegrationTest.java`: Integration test file

> Only use **Test** and **IntegrationTest** suffix for Test classes name, tests are processed based on this.

## Gradle Tasks structure

![Backend Tasks](readme/tasksDiagramsBack.png "Backend Tasks")

`gradlew :back:tasks`: Lists the runnable tasks for backend project.

## Configuration

* Updating npm dependencies: `gradlew :front:npm_update`

### Running Environments

* [`application.yml`](src/main/resources/config/application.yml): Contains information common to any environment (values can be overridden independently by other files).
* [`application-test.yml`](src/test/resources/config/application-test.yml): Contains information for test environment.

## Code Style

### Code Style Checking

Uses **Checkstyle** + **PMD**[1].

* **Checkstyle** checks are in [`coding-checks.xml`](config/coding-checks.xml).
  * Java Test files have some checks removed. ([`checks-suppressions.xml`](config/checks-suppressions.xml))
    * JavaDoc styles are ignored.
    * Allows static imports.
* **PMD** rules are in [`coding-rules.xml`](config/coding-rules.xml).
* The configuration is set on [`back.gradle`](back.gradle) file.

Highlight:

* Line length limit is ignored for lines with some patterns:
  * Starting with `package`.
  * Starting with `import`.
  * Containing Test methods: `public void should*()`.
  * Containing static Resource URI:
    * `file:///`.
    * `http://`.
    * `https://`.
    * `ftp://`.
    * `classpath:`.
    * `jar:`.
    * `zip:`.
  * Containing Spring Queries:
    * `find*By*`.
    * `read*By*`.
    * `query*By*`.
    * `get*By*`.
    * `count*By*`.
* Import order is forced to have some structure[2] (rule: CustomImportOrder):
  * First same package's imports, to increase Readability (Allows to always easily locate the classes of same package, usually classes created in the project, that current class depends on).
  * Then java and javax.
  * Then third party.
* Ternary operator is forced to be in multiple lines in order to increase Readability (rule: UseMultilineTernaryOperator):

  ```java
    condition
      ? expression
      : expression
   ```

* Checks that only one method is called per line in order to increase Readability (rule: CallOnlyOneMethodPerLineForChainedCall):

  ```java
    new SomeObject(..)
      .method2(..)
      .method3(..);
   ```

  or

  ```java
    method1(..)
      .method2(..)
      .method3(..);
   ```

  or

  ```java
    object.method1(..)
      .method2(..)
      .method3(..);
   ```

* Checks that no Field Injection is used in the code (rule: AvoidFieldInjection).
* For test some rules/checks are disabled in order to allow some freedom:
  * No restriction on the number of methods.
  * Duplication of literals is allowed, to increase test Maintainability.
  * Throwing an Exception is allowed.
  * Field Injection is allowed.
  * Javadoc, obviously, is not required or checked.

Checkstyle and PMD, in their different modalities, can be executed independently[3]:
`gradlew checkstyleMain`
`gradlew checkstyleUnitTest`
`gradlew checkstyleIntegrationTest`
`gradlew pmdMain`
`gradlew pmdUnitTest`
`gradlew pmdIntegrationTest`

> [1] PMD is run after Checkstyle, since Checkstyle is "lighter".
> [2] Although forcing this is sometime harmful since different team members can use different IDEs, but IDEs should not rule the development.
> [3] The common parts between checks of Unit Tests and Integration Tests are done first, TEST_COMMON_SOURCE in `back/build.gradle` (if not Checkstyle will fail to report some things due to the `checks_suppressions.xml` file)

## Test Driven Development

* Unit test are [JUnit](http://junit.org) test defined in `*Test.java` files.
* Integration test are [JUnit](http://junit.org) test defined in `*IntegrationTest.java` files.
* Environment for test can be set on the [`application-test.yml`](src/test/resources/config/application-test.yml)

> Only use **Test** and **IntegrationTest** suffix for Test classes name, tests are processed based on this.

## Hot run

[`Hot run`](../README.md#Hot-run)

## Documentation

Use `doc` task to generate Java documentation.
