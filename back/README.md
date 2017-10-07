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

 To highlights:
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
* Import order is freed[2].
  * But requires grouping "same" packages.

To execute these tasks individually[3]:
`gradlew checkstyleMain`
`gradlew checkstyleUnitTest`
`gradlew checkstyleIntegrationTest`
`gradlew pmdMain`
`gradlew pmdUnitTest`
`gradlew pmdIntegrationTest`

> [1] PMD is run after Checkstyle, since Checkstyle is "lighter".  
> [2] Forcing this is sometime harmful since different team members can use different IDEs.  
> [3] The common parts between checks of Unit Tests and Integration Tests must come first on the list, TEST_COMMON_SOURCE in `back/build.gradle` (if not Checkstyle will fail to report some things due to the `checks_suppresions.xml` file)

## Test Driven Development

* Unit test are [JUnit](http://junit.org) test defined in `*Test.java` files.
* Integration test are [JUnit](http://junit.org) test defined in `*IntegrationTest.java` files.
* Environment for test can be set on the [`application-test.yml`](src/test/resources/config/application-test.yml)

> Only use **Test** and **IntegrationTest** suffix for Test classes name, tests are processed based on this.

## Documentation

Use `doc` task to generate Java documentation.
