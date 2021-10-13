const expectChai = require("chai").expect;
describe("Ecommerce Application", () => {
  it("UI Controls sanity", () => {
    browser.url("/loginpagePractise/#");
    $('input[name= "username"]').setValue("rahulshettyacademy");
    const password = $('//input[@type="password"]');
    password.setValue("learning");
    // $("input[value='user']").click();
    const radioButtons = $$(".customradio");
    userValue = radioButtons[1];
    adminValue = radioButtons[0];
    userValue.$(".radiotextsty").click();
    $("div.modal-content").waitForDisplayed();

    $("#cancelBtn").click();
    browser.pause(5000);
    console.log(userValue.$(".radiotextsty").isSelected());
    userValue.$(".radiotextsty").click();
    $("div.modal-content").waitForDisplayed();
    $("#okayBtn").click();
    adminValue.$(".radiotextsty").click();
    expect($("div.modal-content")).not.toBeDisplayed();
    browser.pause(5000);
    const dropdown = $("select.form-control");
    dropdown.selectByAttribute("value", "teach");
    dropdown.selectByVisibleText("Consultant");
    dropdown.selectByIndex(1);
    expectChai(dropdown.getValue()).to.equal("teach");

    // const signInBtn = $("#signInBtn")
    // signInBtn.click()
  });
  it("Dynamic dropdown Smoke", () => {
    browser.url("/AutomationPractice/");
    const dynDrop = $("#autocomplete");
    $(dynDrop).setValue("ind");
    browser.pause(3000);
    let items = $$(".ui-menu-item div");
    //legacy way of writing the loop
    // for(var i=0; i < items.length;i++){
    //   console.log(items[i].getText())
    // }
    const desiredLocator = items.filter((item) => item.getText() === "India");
    desiredLocator[0].click();
    browser.pause(3000);
  });
  it("Checkbox identification", () => {
    browser.url("/AutomationPractice/");
    const element = $$('input[type= "checkbox"]');
    element[1].click();
    browser.pause(3000);
    console.log(element[1].isSelected());
    console.log(element[2].isSelected());
    browser.saveScreenshot("screenshot.png");
  });
});
