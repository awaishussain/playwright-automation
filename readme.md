# Playwright Automation Framework (TypeScript)

## Overview

This repository contains a test automation framework built using **Playwright** with **TypeScript**. The purpose of this project is to provide a clean setup for end‑to‑end testing of web applications.

The framework is not limited to a single feature or flow. It is designed to support multiple test scenarios across different areas of an application and can be extended as new requirements or features are added.

---

## What This Project Contains uptil now:

* Automated end‑to‑end tests using Playwright Test
* Page Object Model (POM) for better separation of concerns
* Centralized test configuration
* Fixtures and hooks for setup and teardown
* Support for headed and headless execution
* Debugging support using Playwright Trace Viewer
* Automatic generation of test artifacts (reports, screenshots, videos)
* Basic CI‑ready structure

---

## Project Structure

```
playwright-demo/
├── .github/workflows        # CI workflows
├── src
│   ├── pages                # Page Object classes
│   ├── fixtures             # Test fixtures and hooks
│   ├── utils                # Shared utilities
│   ├── test-data             # Test data and constants
│   └── components           # Reusable UI components (if needed)
├── tests
│   ├── auth                 # Authentication related tests
│   ├── inventory            # Feature‑specific tests
│   └── checkout             # End‑to‑end user flows
├── playwright-report        # HTML reports
├── test-results             # Test artifacts (traces, screenshots, videos)
├── playwright.config.ts     # Playwright configuration
└── package.json
```

---



### Page Object Model

Page Object Model maintains the readability of tests. Each page or feature has its own class that contains:

* Locators
* Page‑specific actions

Test files focus on test logic and expected behavior rather than UI implementation details.

---

## To make the Playwright with typescript able to run follow the instructions below:

Install dependencies:

```bash
npm install
```

Run all tests:
    npx playwright test

Run a specific test folder:
    npx playwright test tests/auth

Run tests in headed mode:
    npx playwright test --headed



### VS Code Debugging

Tests can be debugged using the VS Code debugger with breakpoints placed in test files or page objects.

### Trace Viewer

Playwright trace viewer can be used to analyze test execution step by step.


npx playwright show-trace path/to/trace.zip

Trace viewer provides:

* Action timeline
* DOM snapshots
* Network and console information

---

## Reports and Test Artifacts

After each test run, Playwright generates an HTML report.

npx playwright show-report

For failed tests, additional artifacts are generated:

* Screenshots
* Video recordings
* Trace files

These artifacts help in analyzing failures locally and in CI environments.


## Continuous Integration

The project includes a CI‑friendly setup with:

* Retry logic for unstable environments
* Controlled worker configuration for CI
* Automatic artifact collection on failures

This allows the same test suite to be executed locally and in CI with minimal changes.

---

## Future Improvements

Planned and possible future enhancements include:

* Adding more test scenarios and coverage
* Improving test data management
* Extending reusable utilities
* Enhancing CI pipelines
* Adding support for additional test types if required

---

## Notes

This repository is intended to grow over time. The current structure is kept flexible so that new features and test areas can be added without major refactoring.
CI verification change
