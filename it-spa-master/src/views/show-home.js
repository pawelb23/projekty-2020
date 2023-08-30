import $ from "jquery";

export const showHome = () => {
  if (
    window.location.href.match(/\/$/) &&
    window.location.href.length - 1 === window.location.origin.length
  ) {
    const showAllHome = $(
      '<div id="home-container"><div class="picture"><h1 class="span-home">Witamy!!!</h1></div></div>'
    ); //kod utworzy nowy element div z tekstem i doda go do elementu body strony.

    $("#main-section").append(showAllHome);

    const registAndLogin =
      '<div class="registration-and-login"><button id="div-registration" class="hover-registration">Rejestracja</button><button id="div-login" class="hover-login">Logowanie</button></div>';

    $("main").append(registAndLogin);
  }
};
