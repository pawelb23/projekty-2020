import $ from "jquery";

//navItem otrzymuje kompletne informacje o danej 'ścieżce'
export const navItem = (route) => {
  const li = $(`<li></li>`);
  const a = $(`<a class="text-light">${route.name}</a>`);

  a.on("click", (event) => {
    event.preventDefault();
    //emituje zdarzenie 'routechange' (bąbelkowanie)
    a.trigger("routechange", { path: route.path }); //odpowiada za prawidłowy adres w ścieżce strony ---> np. http://localhost:1234/bookings lub /rooms czy /home itd.
  });

  li.append(a);

  return li;
};
