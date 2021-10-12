const Person =require('./basics7')
let day = "tuesday ";
// console.log(day.length)
// let halfWord=day.slice(0,4)
// console.log(halfWord)
// console.log(day[1])
// //tue  day
// let splitDay=day.split("s")
// console.log(splitDay[1].trim())

// let date='23'
// let nextDate='27'
// let diff= parseInt(nextDate) - parseInt(date)
// console.log(diff)
// let stringy=diff.toString()
// let stringify=typeof(stringy)
// console.log(stringify)

// const got = require("got");
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

// const vgmUrl = "https://rahulshettyacademy.com/";

// got(vgmUrl)
//   .then((response) => {
//     const dom = new JSDOM(response.body);
//     console.log(dom.window.document.querySelector("title").textContent);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// const LoginPage = require("../pageobjects/login.page");
// const SecurePage = require("../pageobjects/secure.page");

// describe("My Login application", () => {
//   it("should login with valid credentials", async () => {
//     await LoginPage.open();

//     const element = $("downloads-manager")
//       .shadow$("downloads-toolbar")
//       .shadow$("managed-footnote")
//       .shadow$("div#content > a");
//     $(element).click();
//     browser.pause(5000);
//   });
// });

// if (typeof browser === "undefined") {
//   var browser = chrome;
// }
// browser.url("chrome://downloads/");
// browser.pause(5000);
// const element = $("downloads-manager")
//   .shadow$("downloads-toolbar")
//   .shadow$("managed-footnote")
//   .shadow$("div#content > a");
// $(element).click();
// browser.pause(5000);

let newQuote = day + "is Funday day";
console.log(newQuote);
let val = newQuote.indexOf("day");
console.log(val);
let count = 0;
while (val !== -1) {
  count++;
  val = newQuote.indexOf("day", val +1);
  console.log(count);
}
console.log(count);
let person = new Person("Edward", "Smith")
console.log(person.fullName())
