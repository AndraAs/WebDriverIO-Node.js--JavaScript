describe("Windows and Frames Misc", () => {
  it("Parent and Child windows switch", () => {
    browser.url("/AutomationPractice/");
    $("[onClick*='openWindow']").click();
    var handles = browser.getWindowHandles();
    //0th index parent window
    //1st index child window
    browser.switchToWindow(handles[1]);
    console.log(browser.getTitle());
    browser.maximizeWindow();
    browser.closeWindow();
    browser.switchToWindow(handles[0]);
    console.log(browser.getTitle());
    browser.newWindow("/#/index"); //switches directly to this page
    const title = browser.getTitle();
    browser.switchWindow("/AutomationPractice/");
    $("input#name.inputs").setValue(title);
    browser.pause(3000);
    browser.switchWindow(title);
    console.log(browser.getUrl());
  });
  it("Frames switch", () => {
    browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    $("#mousehover").scrollIntoView();
    var links = $$("a");
    console.log("links without frame" + links.length);
    browser.switchToFrame($("#courses-iframe"));
    var linksFrame = $$("a");
    console.log("links with frame" + linksFrame.length);
    console.log($("=Courses").getTagName());
    browser.switchToFrame(null);
    var links = $$("a");
    console.log("links without frame" + links.length);
  });
});
