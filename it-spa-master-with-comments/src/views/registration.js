import database from "../../database.json";
import $ from "jquery";
import { shadowDiv } from "../cart/room-cart.js";
import { loginRemove } from "./login.js";
import { Cart } from "../cart/cart.js";

//------------

const cart = new Cart(); //ciastko do logowania

//-------------

export const showRegistrationForm = () => {
  $("#div-registration").click((e) => {
    e.stopPropagation();

    $(".text-muted").after(shadowDiv);

    const formRegistration = $(
      `<div class="div-form-registration"><form class="registration-form"><div id="logo"><span class="spa-logo">IT SPA</span></div><div class="all-input-container"><h1>Rejestracja</h1>
      <input class="text-input" maxlength="30" type="text" name="login" placeholder="Login" required><input class="email-input" maxlength="30" type="email" name="email" placeholder="E-mail" required><input class="password-input" maxlength="30" type="password" name="password" placeholder="Hasło" required><span class="registration-description">*Mocne hasło powinno zawierać 12 znaków w tym małe i duże litery oraz cyfry</span><div id="password-power"><div class="half-size"><span class="password-word">Password strength:</span></div><div class="half-size div-three-colors"><span class="three-colors"></span>
      <span class="three-colors"></span><span class="three-colors"></span></div></div><div id="hidden-password-strength"><span></span></div><div id="div-input"><input type="submit" value="Zarejestruj się" class="sign-up"></div></div></form><button class="registration-cancel">Anuluj</button></div>`
    );

    $("#main-section").append(formRegistration);

    let sectionSubmit = $(".registration-form");

    let loginInput = $(".text-input");

    let emailInput = $(".email-input");

    let passwordInput = $(".password-input");

    // var passwAll = passwordInput.val();

    // var signCheck = 0;

    function checkPassword(passwordKey) {
      if (passwordInput.val().length > 3) {
        $(".div-three-colors :first-child").addClass("orange-color");

        $("#hidden-password-strength span").text("weak");

        $("#hidden-password-strength").css({
          left: "55.2%",
        });

        if (
          passwordInput.val().length > 7 &&
          ((passwordInput.val().match(/[A-Z]/) &&
            passwordInput.val().match(/[0-9]/)) ||
            (passwordInput.val().match(/[A-Z]/) &&
              passwordInput.val().match(/[a-z]/)) ||
            (passwordInput.val().match(/[a-z]/) &&
              passwordInput.val().match(/[0-9]/)))
        ) {
          $(".div-three-colors :nth-child(2)").addClass("yellow-color");

          $("#hidden-password-strength span").text("avarage");

          $("#hidden-password-strength").css({
            left: "65%",
          });

          if (
            passwordInput.val().length > 11 &&
            passwordInput.val().match(/[0-9]/) &&
            passwordInput.val().match(/[A-Z]/) &&
            passwordInput.val().match(/[a-z]/)
          ) {
            $(".div-three-colors :last-child").addClass("green-color");

            $("#hidden-password-strength span").text("strong");

            $("#hidden-password-strength").css({
              left: "79%",
            });
          } else {
            $(".div-three-colors :last-child").removeClass("green-color");
          }
        } else {
          $(".div-three-colors :nth-child(2)").removeClass("yellow-color");

          $(".div-three-colors :last-child").removeClass("green-color");
        }
      } else {
        $(".div-three-colors :first-child").removeClass("orange-color");

        $(".div-three-colors :nth-child(2)").removeClass("yellow-color");

        $(".div-three-colors :last-child").removeClass("green-color");

        $("#hidden-password-strength span").text("");
      }
    }

    sectionSubmit.on({
      submit: function (e) {
        e.preventDefault();

        var loginValue = loginInput.val();

        var passwordValue = passwordInput.val();

        var emailValue = emailInput.val();

        const emailExistInfo = $(
          `<span class="email-exist-info span-login-exist-info">*Podany email istnieje już w naszej bazie danych!!! Przejdź do zakładki logowania!!!</span>`
        );

        // console.log(emailValue);
        for (let i = 0; database.users.length > i; i++) {
          if (emailValue == database.users[i].email) {
            if ($(".email-exist-info").hasClass("span-login-exist-info")) {
              $(".email-exist-info").remove();
              return $(".email-input").after(emailExistInfo);
            } else {
              return $(".email-input").after(emailExistInfo);
            }
          } else {
            const registrationObject = {
              login: loginValue,
              password: passwordValue,
              email: emailValue,
            };

            // document.cookie = "name" + "=" + "login" + ";";

            // let registrationObjectStringify = JSON.stringify(
            //   registrationObject
            // );

            // database.users.push(registrationObjectStringify);

            cart.add(registrationObject);

            // console.log(registrationObject);

            // var finished = () => {
            //   console.log("działa");
            // };

            // var fs = require("fs");

            // fs.appendFile(
            //   "http://localhost:1234/database.json",
            //   registrationObject,
            //   finished()
            // );

            $(".div-form-registration").remove();
            shadowDiv.remove();

            const loginInfo = $(
              `<div class="nickname-login-info"><button class="remove-login">Wyloguj</button><span class="welcome-info">Witaj</span><span class="nickname-info">${loginValue}</span></div>`
            );
            $(".navbar").append(loginInfo);

            loginRemove();

            $("#div-registration").attr("disabled", true);
            $("#div-login").attr("disabled", true);

            $("#div-registration").removeClass("hover-registration");
            $("#div-login").removeClass("hover-login");

            return;
          }
        }
      },
    });

    passwordInput.on({
      keyup: function (keyPush) {
        //warto używać zdarzenia keyup --- najlepiej działa

        // var passwordValue = passwordInput.val();

        if (keyPush) {
          checkPassword($(this).val()); //ten sam zapis --> checkPassword(passwordInput.val();
        }
      },
    });

    hideRegistrationForm();
  });
};

// Registration Form Cancel

export const hideRegistrationForm = () => {
  $(".registration-cancel").click((e) => {
    e.stopPropagation();

    $(".div-form-registration").remove();
    shadowDiv.remove();
  });
};
