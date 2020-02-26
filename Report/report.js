$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Featurefile/login.feature");
formatter.feature({
  "name": "To validate facebook login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on facebooklogin page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_facebooklogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify login with invalid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User to enter username and password icon",
  "rows": [
    {
      "cells": [
        "manoranjan",
        "jio",
        "",
        "gio",
        "icon"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_to_enter_username_and_password_icon(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on facebooklogin page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_facebooklogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the first and last name with valid and invalid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User to enter the first and last name",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_to_enter_the_first_and_last_name()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#u_0_\"}\n  (Session info: chrome\u003d80.0.3987.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-LNDVNHL\u0027, ip: \u0027192.168.1.36\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.116, chrome: {chromedriverVersion: 80.0.3987.16 (320f6526c1632..., userDataDir: C:\\Users\\Ramani\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:57507}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 1d4a29038ea73e5abce078eaf2dab4c1\n*** Element info: {Using\u003did, value\u003du_0_}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.stepdefinition.LoginStepDefinition.user_to_enter_the_first_and_last_name(LoginStepDefinition.java:40)\r\n\tat ✽.User to enter the first and last name(src/test/resources/Featurefile/login.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user to click the signup",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_to_click_the_signup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});