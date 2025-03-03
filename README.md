# Automated Testing Project with Playwright (TypeScript)

## Overview

This project is a mini-learning project for automated testing using [Playwright](https://playwright.dev/) in TypeScript. It demonstrates:

1. A simple use case of product search and adding a product to the cart.
2. Refactoring the test code using the **Page Object Model (POM)**.
3. Generating another suite of tests with **GitHub Copilot** based on test case descriptions in comments.

## Tech Stack

- **TypeScript**
- **Playwright**
- **GitHub Copilot**
- **Node.js**

## Project Setup

### Prerequisites

- Install [Node.js](https://nodejs.org/)
- Install dependencies:

```bash
npm install
```

### Running Tests

To execute the tests, use the following command:

```bash
npx playwright test
```

## How It Works

### 1. Simple Use Case

Basic test for searching a product and adding it to the cart.

### 2. Refactoring with Page Object Model

Page Object Model implementation abstracts page actions and selectors into reusable classes.

### 3. Copilot-Generated Tests

Test cases automatically generated using GitHub Copilot by placing test descriptions in comments.
