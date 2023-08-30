import database from "../../database.json";
import $ from "jquery";
import { shadowDiv } from "../cart/room-cart.js";
import { Cart } from "../cart/cart.js";

const cart = new Cart(); //ciastko do logowania

// Cookies Info

let allCookiesInfo = JSON.parse(JSON.stringify(document.cookie));

// console.log(cookiesRoomsInfo);

let cookieForLoginInfo = JSON.parse(allCookiesInfo.slice(12));

console.log(cookieForLoginInfo);

export const findCookieLogin = () => {
  for (let i = 0; cookieForLoginInfo.length > i; i++) {
    if (
      cookieForLoginInfo[i].hasOwnProperty("password") &&
      cookieForLoginInfo[i].hasOwnProperty("login") &&
      cookieForLoginInfo[i].hasOwnProperty("email")
    ) {
      const loginInfo = $(
        `<div class="nickname-login-info"><button class="remove-login">Wyloguj</button><span class="welcome-info">Witaj</span><span class="nickname-info">${cookieForLoginInfo[i].login}</span></div>`
      );
      $(".navbar").append(loginInfo);

      loginRemove();

      $("#div-registration").attr("disabled", true);
      $("#div-login").attr("disabled", true);

      $("#div-registration").removeClass("hover-registration");
      $("#div-login").removeClass("hover-login");
    } else {
      ("");
    }
  }
};

export const registrationLoginHoversOff = () => {
  for (let i = 0; cookieForLoginInfo.length > i; i++) {
    if ($("div.nickname-login-info span").hasClass("welcome-info")) {
      $("#div-registration").attr("disabled", true);
      $("#div-login").attr("disabled", true);

      $("#div-registration").removeClass("hover-registration");
      $("#div-login").removeClass("hover-login");
    } else {
      $("#div-registration").removeAttr("disabled", true);
      $("#div-login").removeAttr("disabled", true);

      $("#div-registration").addClass("hover-registration");
      $("#div-login").addClass("hover-login");
    }
  }
};

export const showLoginForm = () => {
  $("#div-login").click((e) => {
    e.stopPropagation();

    $(".text-muted").after(shadowDiv);

    const formRegistration = $(
      `<div class="div-form-login"><form class="login-form"><div id="logo"><span class="spa-logo">IT SPA</span></div><div class="all-input-container"><h1>Logowanie</h1><span class="login-description">*Aby się zalogować podaj Hasło oraz Login lub E-mail</span>
      <input class="text-input-login" maxlength="30" type="text" name="login" placeholder="Login lub E-mail" required><input class="password-input-login" maxlength="30" type="password" name="password" placeholder="Hasło" required><div id="div-input-login"><input type="submit" value="Zaloguj się" class="sign-in"></div></div></form><button class="login-cancel">Anuluj</button></div>`
    );

    $("#main-section").append(formRegistration);

    let sectionLoginSubmit = $(".login-form");

    let loginInput = $(".text-input-login");

    let passwordInput = $(".password-input-login");

    sectionLoginSubmit.on({
      submit: function (e) {
        e.preventDefault();

        var loginValue = loginInput.val();

        var passwordValue = passwordInput.val();

        const errorLoginInfo = $(
          '<span class="login-error">Oops!... Błędne dane logowania!!! Spróbuj jeszcze raz!</span>'
        );

        // var emailValue = emailInput.val();

        // const registrationObject = {
        //   login: loginValue,
        //   password: passwordValue,
        //   eamil: emailValue,
        // };

        // database.users.push(registrationObject);

        // var finished = () => {
        //   console.log("działa");
        // };

        // var fs = require("fs");

        // fs.appendFile(
        //   "http://localhost:1234/database.json",
        //   registrationObject,
        //   finished()
        // );

        console.log(database.users[0].password);
        console.log(loginValue);

        for (let i = 0; database.users.length > i; i++) {
          if (
            (loginValue == database.users[i].login ||
              loginValue == database.users[i].email) &&
            passwordValue == database.users[i].password
          ) {
            $(".div-form-login").remove();
            shadowDiv.remove();

            const loginInfo = $(
              `<div class="nickname-login-info"><button class="remove-login">Wyloguj</button><span class="welcome-info">Witaj</span><span class="nickname-info">${database.users[i].login}</span></div>`
            );
            $(".navbar").append(loginInfo);

            cart.add(database.users[i]);

            loginRemove();

            $("#div-registration").attr("disabled", true);
            $("#div-login").attr("disabled", true);

            $("#div-registration").removeClass("hover-registration");
            $("#div-login").removeClass("hover-login");
          } else {
            if ($("span").hasClass("login-error")) {
              ("");
            } else {
              passwordInput.after(errorLoginInfo);
            }
          }
        }
      },
    });
    hideLoginForm();
  });
};

// Login Form Cancel

export const hideLoginForm = () => {
  $(".login-cancel").click((e) => {
    e.stopPropagation();

    $(".div-form-login").remove();
    shadowDiv.remove();
  });
};

//----------

export const loginRemove = () => {
  $(".remove-login").click((e) => {
    e.stopPropagation();

    //Current Cookies Info

    let allCurrentCookiesInfo = JSON.parse(JSON.stringify(document.cookie));

    // console.log(cookiesRoomsInfo);

    let currentcookieForRemoveLoginInfo = JSON.parse(
      allCurrentCookiesInfo.slice(12)
    );

    //-----------

    $(".nickname-login-info").remove();

    $("#div-registration").removeAttr("disabled", true);
    $("#div-login").removeAttr("disabled", true);

    $("#div-registration").addClass("hover-registration");
    $("#div-login").addClass("hover-login");

    for (let i = 0; currentcookieForRemoveLoginInfo.length > i; i++) {
      if (
        currentcookieForRemoveLoginInfo[i].hasOwnProperty("password") &&
        currentcookieForRemoveLoginInfo[i].hasOwnProperty("login") &&
        currentcookieForRemoveLoginInfo[i].hasOwnProperty("email")
      ) {
        cart.remove(currentcookieForRemoveLoginInfo[i]);
        // console.log(currentcookieForRemoveLoginInfo[i]);
      } else {
        ("");
      }
    }
  });
};
