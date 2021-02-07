import database from "../../database.json";
import $ from "jquery";

export const showTreatments = () => {
  if (window.location.href.match(/\/treatments$/)) {
    const showAllTreatments = $('<div id="treatments-container"></div>'); //kod utworzy nowy element div z tekstem Hello World! i doda go do elementu body strony.

    $("#main-section").append(showAllTreatments);

    for (let i = 0; database.treatments.length > i; i++) {
      let polishAreaName;
      if (database.treatments[i].area === "back") {
        polishAreaName = "Plecy";
      } else if (database.treatments[i].area === "face") {
        polishAreaName = "Twarz";
      } else if (database.treatments[i].area === "legs") {
        polishAreaName = "Nogi";
      } else if (database.treatments[i].area === "hands") {
        polishAreaName = "Ręce";
      } else if (database.treatments[i].area === "body") {
        polishAreaName = "Całe ciało";
      } else {
        polishAreaName = "Brak danych";
      }
      const showOneTreatment = $(
        `<div class="treatment treatment-hover-shadow treatment-id${database.treatments[i].id}"></div>`
      );

      showAllTreatments.append(showOneTreatment);

      const oneTreatmentInfo = $(`<div class="one-treatment-info"></div>`);

      showOneTreatment.append(oneTreatmentInfo);

      oneTreatmentInfo.html(`<span class="treatment-key">Nazwa:</span> <span class="treatment-value">${database.treatments[i].name}</span><br>
      <span class="treatment-key">Leczony obszar:</span> <span class="treatment-value">${polishAreaName}</span><br>
      <span class="treatment-key">Czas:</span> <span class="treatment-value">${database.treatments[i].time} min</span><br>
      <span class="treatment-key">Cena:</span> <span class="treatment-value">${database.treatments[i].price}</span>`);

      const addMinusTreatment = $(
        `<div class="add-and-remove add-remove-tr-id${database.treatments[i].id}"</div>`
      );

      showOneTreatment.append(addMinusTreatment);

      const buttonTreatment = $(
        `<button class="all-buttons-add-treatments button-add-treatment${database.treatments[i].id} all-add-buttons-treatments-hover">Dodaj</button><button class="all-buttons-remove-treatments button-remove-treatment${database.treatments[i].id}">Usuń</button>`
      );

      addMinusTreatment.append(buttonTreatment);

      $(".all-buttons-remove-treatments").attr("disabled", true);
    }
  }
};
