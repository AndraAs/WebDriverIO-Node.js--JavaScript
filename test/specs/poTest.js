const loginPage = require("../pageObjects/loginPage");
const shopPage = require("../pageObjects/shopPage");
const reviewPage = require("../pageObjects/reviewPage");
const expectChai = require("chai").expect;
const fs = require("fs");
let credentials = JSON.parse(fs.readFileSync("test/testData/LoginTest.json"));
let e2eCredentials = JSON.parse(fs.readFileSync("test/testData/e2eTest.json"));
describe("Ecommerce Application", () => {
  credentials.forEach(({ username, password }) => {
    xit("Login Fail Page Title", () => {
      browser.url("/loginpagePractise/#");
      console.log(browser.getTitle());

      expect(browser).toHaveTitleContaining("Rahul Shetty Academy");
      loginPage.Login(username, password);
      const error = $("div.alert.alert-danger.col-md-12");
      console.log(loginPage.alert.getText() + " is the text on the alert");
      //signing-> don't check. Check after button turns to Sign In
      browser.waitUntil(
        () => loginPage.signIn.getAttribute("value") === "Sign In",
        {
          timeout: 4000,
          timeoutMsg: "Error msg did not appear",
        }
      );
      expect(loginPage.textInfo).toHaveTextContaining(
        "username is rahulshettyacademy and Password is learning"
      );

      console.log(loginPage.alert.getText() + " is the text on the alert");
      // #id -CSS -> #username
      // .classname -CSS-> .form-control
      const textRahul = $("p.text-white");
      expect(textRahul).toHaveTextContaining(
        "(username is rahulshettyacademy and Password is learning)"
      );
    });
  });
  e2eCredentials.forEach(({ products}) => 
  it("End to End test", () => {
    // var products = ["Blackberry", "Nokia Edge"];
    browser.url("/loginpagePractise/#");
    loginPage.Login("rahulshettyacademy", "learning");
    shopPage.checkout.waitForExist();
    shopPage.addProductToCart(products);
    shopPage.checkout.click();
    browser.pause(7000);
    const sumOfProducts = reviewPage.sumOfProducts();
    let productsTotal = reviewPage.totalFormattedPrice();
    expectChai(sumOfProducts).to.equal(productsTotal);
    reviewPage.successBtn.click();
    reviewPage.country.setValue("ind");
    reviewPage.ellipsisMsg.waitForExist({ reverse: true });
    reviewPage.optionList.click();
    // $("#checkbox2").click()
    reviewPage.purchaseVal.click();
    expect(reviewPage.successAlert).toHaveTextContaining("Success");
  }))
;
  xit("Login Success page title", () => {
    browser.url("/loginpagePractise/#");
    $('input[name= "username"]').setValue("rahulshettyacademy");
    const password = $('//input[@type="password"]');
    password.setValue("learning");
    const signInBtn = $("#signInBtn");
    signInBtn.click();
    // $(a.nav-link.btn.btn-primary)
    const link = $("*=Checkout");
    link.waitForExist();
    expect(browser).toHaveTitle("ProtoCommerce");
    expect(browser).toHaveUrlContaining("/shop");
  });
});
