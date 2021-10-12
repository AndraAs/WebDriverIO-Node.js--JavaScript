describe("Ecommerce Application", () => {
  it("Login Fail Page Title-Smoke", function () {
    this.retries(2);
    browser.url("/loginpagePractise/#");
    console.log(browser.getTitle());

    expect(browser).toHaveTitleContaining("Rahul Shetty Academy");
    //xpath,css,linkText
    // tagname[attribute=value] -> input[name='username']
    $("input[name='username']").setValue("rahulshettyacademy");
    browser.pause(3000);
    $("#username").setValue("secondCSS");
    //-- //tagname[@attribute='value']
    //password xpath
    const password = $('//input[@type="password"]');
    password.setValue("learning1");
    const signInBtn = $("#signInBtn");
    signInBtn.click();
    const error = $("div.alert.alert-danger.col-md-12");
    console.log($(error).getText() + " is the text on the alert");
    //signing-> don't check. Check after button turns to Sign In
    browser.waitUntil(() => $(signInBtn).getAttribute("value") === "Sign In", {
      timeout: 4000,
      timeoutMsg: "Error msg did not appear",
    });

    console.log($(error).getText() + " is the text on the alert");
    // #id -CSS -> #username
    // .classname -CSS-> .form-control
    const textRahul = $("p.text-white");
    expect(textRahul).toHaveTextContaining(
      "(username is rahulshettyacademy and Password is learning)"
    );
  });
  xit("Login Success page title Smoke", () => {
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
