# Workshop :: Product Service
* Backend = NodeJS

### Steps to run
```
cd product-service
npm install
node server.js
```

### List of endpoints
* http://localhost:3002
* API documentation
  * http://localhost:3002/api-docs/

### Testing workshop
* API testing

### Run all tests
```
npm test
```

### E2E tests
```
npm run e2e-test
```

### Working with BDD (Behavior-Driven Development)
* [Cucumber with JavaScript](https://cucumber.io/docs/installation/javascript/)
* [Gherkin reference](https://cucumber.io/docs/gherkin/)

Install
```
$npm install cucumber -D
```

Edit file `package.json`
```
"scripts": {
    
    "bdd": "cucumber-js **/features/product-list.feature"
}
```

Create feature file in `__tests__/bdd/features/product-list.feature`
```
Feature: Products List
    Scenario: Load the products list
        When we request the products list
        Then we should receive
            |     name        |     description       |    price  |
            | product 1       | product 1 description |    100    |
            | product 2       | product 2 description |    200    |
            | product 3       | product 3 description |    300    |
```

Create steps file in `__tests__/bdd/features/steps/product.steps.js`
```
const { When, Then, After } = require("cucumber");
const expect = require("chai").expect;
const request = require("supertest");
const app = require("../../../../app");

let response;

When("we request the products list", async () => {
  // Send request to the API
  const server = request.agent(app);
  response = await server
    .get("/api/products")
    .send()
    .set("x-access-token", process.env.ACCESS_TOKEN);
});

Then("we should receive", async (dataTable) => {
  expect(response.status).eq(200);
  expect(response.body.length).eq(3);
  // check format of response.body with jsonschema
  const schema = {
    type: "array",
    items: {
      type: "object",
      properties: {
        id: { type: "number" },
        name: { type: "string" },
        description: { type: "string" },
        price: { type: "number" },
      },
      required: ["id", "name", "description", "price"],
    },
  };
  const Validator = require("jsonschema").Validator;
  const v = new Validator();
  const result = v.validate(response.body, schema);
  expect(result.valid).to.be.true;
  // Check data from expected data table
  const expectedData = dataTable.hashes();
  for (let i = 0; i < expectedData.length; i++) {
    const expected = expectedData[i];
    const actual = response.body[i];
    expect(actual.name).eq(expected.name);
    expect(actual.description).eq(expected.description);
    expect(actual.price).eq(parseFloat(expected.price));
  }
});

```

Run test
```
$export ACCESS_TOKEN=<your token>
$npm run bdd
```
