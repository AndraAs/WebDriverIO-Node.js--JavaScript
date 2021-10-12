const expectChai = require("chai").expect;
describe("Functional Testing on Application", () => {
  xit("Scrooling and mouse hover", () => {
    browser.url("/AutomationPractice/");
    $("#mousehover").scrollIntoView();
    $("#mousehover").moveTo();
    $("=Top").click();
    browser.url("http://only-testing-blog.blogspot.com/");
    $("button").doubleClick();
    //how to handle window based java popups
    expectChai(browser.isAlertOpen()).to.be.true; //true/false
    console.log(browser.getAlertText());
    expectChai(browser.getAlertText()).to.equal(
      "Press 'OK' or 'Cancel' button!"
    );
    browser.acceptAlert(); //clicks ok button
    browser.pause(3000);
  });
  xit("Web Table validations", () => {
    browser.url("/seleniumPractise/#/offers");
    $("tr th:nth-child(1)").click();
    //retrieve list of veggie names in an array ->A
    // sort the array A and create array B
    //compare array A and array B
    const veggieLocators = $$("tr td:nth-child(1)");
    //arrays are passed by reference
    const OriginalVeggieNames = veggieLocators.map((veggie) =>
      veggie.getText()
    );
    console.log(OriginalVeggieNames);
    veggies = OriginalVeggieNames.slice();
    const sortedVeggies = veggies.sort();
    console.log(sortedVeggies);
    expectChai(OriginalVeggieNames).to.eql(sortedVeggies);
  });
  it("Web Tables Filter validation Smoke", () => {
    browser.url("/seleniumPractise/#/offers");
    $("#search-field").setValue("tomato");
    const veggieLocators = $$("tr td:nth-child(1");
    expect(veggieLocators).toBeElementsArrayOfSize({ eq: 1 });
    console.log(veggieLocators[0].getText());
    const veggieName = veggieLocators[0];
    expect(veggieName).toHaveTextContaining("Tomato");
  });
});
