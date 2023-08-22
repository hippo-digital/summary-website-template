---
title: 'Testing'
order: 6
tags:
  - engineering 
  - ways of working
  - testing 
  - test approach
---

# Testing

## Test Objectives

* Confirm that the service performs as per the defined User needs
* Verify that the service meets the business and technical requirements set out. Ensuring testability in each phase
* To deliver a quality product by finding defects/bugs so that they can be fixed before delivering the service to the end user.

### Feature Lifecycle 

The product backlog and project sprints are managed within a tool such
as Jira/Azure Devops/Trello etc.

For user stories/features we define a \`Definition of Ready\` and a
'Definition of Done'. Along with these we typically have the following
statues

-   To Do
-   In Development
-   Dev Done
-   In Test
-   PO Sign Off
-   Completed

Each status and Definition of Done/Ready acts as a control 'gate' for
all work passing through this process.

#### Definition of Ready
-   UX designs created and complete
-   Acceptance criteria established
-   Technical Lead sign off
-   Product owner sign off
-   Test sign off

#### Definition of Done
-   Development for the ticket is 'code complete'. The functionality for the ticket has been tested and meets the acceptance criteria.
-   Test script/s have been created for the ticket
-   Test scripts have been run against the feature/product.
-   Any issues found are placed on the backlog.
-   Ticket status is updated on the board
-   A sign off is in place from the reporter and Product Owner.
-   If work is not correct or incomplete, tickets get moved back to 'In Dev' and the cycle starts again.

For both the Definition of Ready and Definition of Done these are
established on a per-project basis and the above are simply examples.

## Environment Definitions

**DEV**

The development environment serves two purposes in this project.
Primarily it is a smoke test environment for developers to see the
product in situ as a showcase for new product developments. Secondly,
this environment acts as a conduit for the automated tests that are run.
In addition the Security and Performance tests are ran against this
environment as part of the normal development process.

**Note:** The performance and security tests in this environment are
considered advisory and are not final, as the size and networking in
this environment does not replicate (pre-)production. However these
tests provide an early warning and indicator for introduced errors.

**SIT / test**

The SIT environment is the primary integration testing environment. The
manual testing (Acceptance and Regression) is carried out in this
environment and although the underlying infrastructure isn't production
like, the functionality delivered by this environment should be entirely
equivalent to the pre-prod and production environments.

**PRE-PROD / Staging / Model**

This PRE-PROD (pre-production) environment is used to carry out
production like testing in an environment that has exactly the same
configuration as Production. In this environment we repeat the Security
and Performance testing that were carried out in production. We also
commission as part of the DSAM security process, ITHC checks, which are
security penetration tests carried out by an external security
consultancy.

**PRODUCTION**

No direct testing is carried out in this environment. However we will
utilise deployment slots which provide an opportunity to smoke test the
deployment in that slot before making that slot the active production
slot.

## Automated testing

At hippo we carry out a combination of analytical (Risk/Requirements
based) and we are regression averse. To this end we aim to complete a
combination of the testing methodologies below:

![Types of testing](/images/test-approach-types-of-testing.jpg)

When developing and focusing on the testing the selected methodologies
are executed according to the following testing pyramid

![Testing pyramid](/images/test-approach-testing-pyramid.jpg)

### Unit Testing

**Technologies:** JUnit, NUnit, XUnit, pyTest, RSpec, TestNG

Unit Tests are developed on a Red -\> Green -\> Refactor basis. We start
by writing a test case to cover the requirement, without any code
supporting it, this test obviously fails. Then we write the simplest
code to pass the test. When another requirement comes along that alters
the code then another test is written to satisfy this requirement and
the code is refactored as appropriate. Unit tests will typically rely on mocking components external to the *unit* under test

Some tips on writing a good unit test:

* Has a rich/descriptive name
* Follows arrange, act, assert organisation

```python
def abs_a_number_makes_it_positive():
  # Arrange
  negative = -5
  # Act
  answer = abs(negative)
  # Assert
  assert answer == 5
```
* Appropriately mocks or stubs dependencies
* Should only assert a single condition and be independent (i.e. not depend on the order the tests are run in)
* A test should be repeatable 
* A test should be independent
* A test should be fast.


In addition to running the unit tests in the CI/CD pipeline we also ensure
that a coverage report is generated and the appropriate threshold is set
on the pipeline to fail the build if the coverage target isn't set.
Typically this is set to **value \> 75%**.

### Integration Testing

**Technologies:** JUnit, NUnit, XUnit, pyTest, RSpec, TestNG

Integration tests utilise the same technologies as unit testing. However they typically rely less on mocking dependencies and try to create as many *in-memory analogues* as is possible. This typically involves in-memory databases and web servers. Which allow assertions to be carried out over content rendered with real API calls to in-memory databases. The tests are typically run on release to the test environment as part of the release pipeline

Some tips on writing a good integration test:

* Don't test business logic, instead test inputs and expected outcome treat the system like a blackbox
* Consider writing integration tests before unit tests, this allows you to make sure the macro behaviours of the system are correct before spending alot of time on the more granular unit tests
* Tag integration tests appropriately and make sure you keep them separate from unit and functional tests
* Don't test every scenario test the critical and important paths
* Clean up after yourself, make sure every test cleans up any data that may of been saved / changed.
* Follow the arrange, act, assert pattern
* It is ok for a integration test to assert multiple things just any sure that the messages are clear when the test has failed.

Below is an example of writing an integration test in .net

```csharp
public class IndexPageTests :
    IClassFixture<CustomWebApplicationFactory<Program>>
{
    private readonly HttpClient _client;
    private readonly CustomWebApplicationFactory<Program>
        _factory;

    public IndexPageTests(
        CustomWebApplicationFactory<Program> factory)
    {
        _factory = factory;
        _client = factory.CreateClient(new WebApplicationFactoryClientOptions
        {
            AllowAutoRedirect = false
        });
    }

    [Fact]
    public async Task Post_DeleteAllMessagesHandler_ReturnsRedirectToRoot()
    {
        // Arrange
        var defaultPage = await _client.GetAsync("/");
        var content = await HtmlHelpers.GetDocumentAsync(defaultPage);

        //Act
        var response = await _client.SendAsync(
            (IHtmlFormElement)content.QuerySelector("form[id='messages']"),
            (IHtmlButtonElement)content.QuerySelector("button[id='deleteAllBtn']"));

        // Assert
        Assert.Equal(HttpStatusCode.OK, defaultPage.StatusCode);
        Assert.Equal(HttpStatusCode.Redirect, response.StatusCode);
        Assert.Equal("/", response.Headers.Location.OriginalString);
    }
}

```

### Functional Testing

**Technologies:** JBehave, Quantum, NBehave, Specflow, Behave, Cucumber, JavaScript (Jasmine, Mocha, Cucumber)

Functional tests are the slowest running tests out of Unit, Integration and Functional. They run against an actual deployed environment and do not mock anything. Functional test typically come in two forms: 

* **Requirements driven tests** - these types of tests typically test the ability of a system to satisfy a requirement. These tests may prod a specific part of the system with certain data (normally based on some sort of MoSCoW ranking) and asserts the outcomes and effects, in practices this type of testing is rare, unless the space is highly regulated

* **Scenario testing** - More often called BDD, is a far more common type of unit testing that typically runs through a scenario that an end user would do in a system, for example, 

```Login -> Browse Catalogue -> Put an item(s) in a basket -> Remove an item -> Add another item -> Checkout -> Pay```

Functional tests are normally specified in the Gherkin syntax which then gets mapped to executable code (steps) for example 

```gherkin
Given a user logs in as `test@test.com`
When the user adds item `123124234` to the basket
And clicks checkout 
And pays with credit card `123456789091`
Then they should be shown a successful checkout
```

this typically translates into a class that maps these steps

```java
public class Steps
{
  @Given("a user logs in as `(.*)`")
  public void login(string email)
  {
    ///DO login logic
  }

  @When("the user adds item `(.*)` to the basket")
  public void addToBasket(string sku)
  {
    ///Add to Basket logic
  }

  @When("clicks checkout")
  public void clickCheckout(string sku)
  {
    ///Add checkout logic
  }

  @When("pays with credit card `(.*)`")
  public void payWithCreditCard(string cardNumber)
  {
    ///Add Pay logic
  }

  @Then("they should be shown a successful checkout")
  public void payWithCreditCard(string cardNumber)
  {
    ///Assert a successful checkout or not
  }

}

```

Functional tests are very slow and a comprehensive suite can take hours to run. With this in mind they should be ran as part of the path to live process but not necessarily on every push (see [An example automation workflow](#automation-workflow) for an example of where these tests should be run)

### Cross Browser Testing

**Technologies:** [Browser Stack](https://www.browserstack.com/), [Selenium Grid](https://www.selenium.dev/documentation/grid/), [Playwright](https://playwright.dev/)

Typically we should aim to provide cross-browser testing coverage based on the browser list in the [GDS Service Manual](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices).

Cross browser tests follow the same rules as functional tests, in fact an end to end scenario declared in your functional tests is usually the ideal candidate for running cross browser tests. 

To select which scenarios to run in your Cross-browser testing you should take a risk based approach, covering the most critical pathways and pages in the application under test

### Accessibility Testing

**Technologies:** [Pa11y](https://github.com/pa11y/pa11y-ci), [aXe](https://www.axe-core.org/), Various Screen Readers (see. [GDS Service Manual](https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies)) 

Accessibility testing is a large subject with many facets and again a risk based approach to testing should be adopted. Not all accessibility testing can be automated tools like pa11y and Google lighthouse provide good assurance on the derivable aspects of accessibility testing like colour contracts, font-sizes, navigation etc. a full list can be found [here](https://www.w3.org/TR/WCAG21/)

The easiest way to get up and running with pa11y tests is to use [Pa11y CI](https://github.com/pa11y/pa11y-ci) and provide a sitemap from your site for the pa11y CI process to consume as part of your CI/CD pipeline.

### Performance / Scalability / Load Testing

**Technologies:** [Apache JMeter](https://jmeter.apache.org/), [K6](https://k6.io/), [Gatling](https://gatling.io/), [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

Performance testing is an important part of any application delivery. The performance of your application directly affects user experience, this is backed up by evidence from the real world:  

![Performance impact](/images/performance_impact.webp)

Performance testing encompasses everything in your application and to be meaningful should be carried out in an environment that is as close to the production environment as possible, normally this your PRE-PROD environment.

As with functional tests when writing performance tests consider how you are going to clear down the test environment when the test has finished. One simple strategy is to simply create the environment from scratch, run the tests and tear it down when finished. This however is predicated on the ability to be able to build and teardown environments at will, which will likely be the case if your project is utilising [Terraform](https://www.terraform.io), [CloudFormation](https://aws.amazon.com/cloudformation/) or [ARM](https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/overview).

If your project cannot easily teardown and rebuild environments then there is an obvious question why? But this means that along side your performance tests you will need a set of data clearance scripts. This can be challenging to maintain and keep in step with the current state of the system, features and changes.

There are several types of tests that come under the performance testing banner: 

* **Performance tests** - Performance tests ramp-up concurrent users given a set profile, each user then executes a pre-defined scenario. As the number of users ramp-up the system comes under more and more load. Running this type of test you need to make sure that the system stays inline with the 99%, 95% and 90% performance metrics defined in the NFRs. 

* **Stress tests** - In stress testing scenarios you are trying to establish the maximum load that your system can take before the response time latency breaches SLA's or the system breaks. For a stress test to be successful ideally the system should begin to break at 2 - 3 times the maximum expected peak load of the service.   

* **Load/Soak tests** - Load and soak tests look at longer term behavior of the system under test. Soak tests, are similar to performance tests but run over a longer period of time. The idea is to see how the system performs under constant high load rather than peak loads. This allows for identification of things like memory leaks through unreleased resource handles or identifying abnormal data growth on a database.

### Security and Penetration Testing (OWASP Zap)

**Technologies**: Various listed below

Security testing, probes API's and web server routes for vulnerabilities to the [OWASP top 10](https://owasp.org/www-project-top-ten/), and other vulnerabilities. Although these reports are a guide and should be backed by formal penetration testing methods. 

Security testing has many aspects however the most important for us to consider are: 

* **Source code scanning** - These tools can scan source code for vulnerabilities some tools in this space are:
  * [SonarQube](https://www.sonarqube.org/downloads/)
  * [.Net security guard](https://security-code-scan.github.io/)
  * [Agnitio](https://sourceforge.net/projects/agnitiotool/)
  * [APISecurity.io](https://apisecurity.io/tools/audit/)
  * [Bandit](https://github.com/PyCQA/bandit) 
  * [Among others there is a good list on the OWASP site](https://owasp.org/www-community/Source_Code_Analysis_Tools)

* **Dependency scanning** - These tools can introspect your applications dependencies for vulnerabilities and raise issues or recommend fixes to those vulnerabilities. These tools are becoming increasingly more important as *supply chain* attacks through dependency chains are becoming a more and more exploited vector. Tools in this space are:
  * [Dependabot](https://github.com/dependabot)
  * [Dependency check](https://www.owasp.org/index.php/OWASP_Dependency_Check)
  * [OSS Index](https://ossindex.net/)
  * [Bundler audit](https://github.com/rubysec/bundler-audit)
  * [Synk](https://snyk.io/)

* **Dynamic analysis tools** - These tools scan your application for access and data vulnerabilities, ensuring that your system isn't exposed to common attack vectors. 

  * [OWASP Zed Attack Proxy (Zap)](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project)
  * [Synk](https://crozdesk.com/software/snyk)
  * [Vega](https://subgraph.com/vega/documentation/about-vega/index.en.html)
  * [Arachni](http://www.arachni-scanner.com/)

 
### A path to live {#automation-workflow}

![Path to live](/images/path-to-live.jpg)

## Manual Testing / Acceptance / Exploratory Testing

Even in the world of automated testing, manual testing practices still have a place. This is due to the fact that manual testing can be very quick to carry out requiring little to no infrastructure or frameworks. 

### Deciding between manual or automated testing


| Manual                                                                    | Automation |
|---------------------------------------------------------------------------|------------|
| It is a one-off or low cardinality                                        | High cardinality, repetitive testing |
| Validating and understanding a new integration (3rd party service)        | Ensuring there is a consistent behaviour between builds |
| Validating or triaging complex error reports and scenarios                | Ensuring that the key/critical user flows are working as expected |
| User experience and accessibility testing (especially with screen readers) | Cross-browser and testing across many devices |

Fundamentally thou it is a rare a project can be fully automated and there is certainly diminishing returns to be had if you do try and automated everything. So it is about striking a balance. This decision should be made in your test strategy when you start a project and exceptions changes highlighted in each test plan that occurs in the project.

### Creating manual regression packs

As stated above the decision on what to manually test versus automate, should be outlined in your projects test strategy. But when you do create a manual regression pack it should include: 

* An agreed target scope
* A risk based prioritisation of business areas / user flows to test within the target scope
* A set of quick to execute smoke tests (which maybe automated), to ensure the baseline behaviour of the system is what you expect.
* A set of exploratory tests with well understood correct and erroneous data
* A strict way to record the test actions taken and document the results
* A strategy for keeping regression pack up-to-date


## Managing and tracking change


## Links to example documents

* [Test Plan document template](https://github.com/hippo-digital/documentation-templates/blob/main/testing/test-plan.md)
* [Test Strategy document template](https://github.com/hippo-digital/documentation-templates/tree/main/testing/test-strategy.md)
* [Traceability matrix template](https://github.com/hippo-digital/documentation-templates/tree/main/testing/traceability-matrix.md)
* [Change log / Change tracking template](https://github.com/hippo-digital/documentation-templates/tree/main/testing/change-log.md)
