const expectChai = require("chai").expect;
describe("Ecommerce Application", () => {
  it("End to End test", () => {
    var products = ["Blackberry", "Nokia Edge"];
    browser.url("/loginpagePractise/#");
    $('input[name= "username"]').setValue("rahulshettyacademy");
    const password = $('//input[@type="password"]');
    password.setValue("learning");
    $("#signInBtn").click();
    const link = $("*=Checkout");
    link.waitForExist();
    var cards = $$("div.card.h-100");
    cards
      .filter((card) =>
        products.includes(card.$("div h4.card-title a").getText())
      )
      .map((productCard) => productCard.$(".card-footer button").click());
    link.click();
    browser.pause(7000);
    let productPrices = $$(
      "tr td.col-sm-1.col-md-1.text-center:nth-child(4) strong"
    );
    //getText()
    //format it into integer and apply sum on all vals
    const sumOfProducts = productPrices
      .map((productPrice) =>
        parseInt(productPrice.getText().split(".")[1].trim())
      )
      .reduce((acc, price) => acc + price, 0);
    console.log(sumOfProducts);
    let productsTotal = parseInt(
      $("td.text-right h3 strong").getText().split(".")[1].trim()
    );
    expectChai(sumOfProducts).to.equal(productsTotal);
    $(".btn-success").click();
    $("#country").setValue("ind");
    $("div.lds-ellipsis").waitForExist({ reverse: true });
    $("=India").click();
    // $("#checkbox2").click()
    $("[value='Purchase']").click();
    expect($(".alert-success")).toHaveTextContaining("Success");
  });
});
