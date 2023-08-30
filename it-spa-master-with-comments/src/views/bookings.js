import $ from "jquery";

export const bookings = () => {
  const fragment = $(new DocumentFragment());
  //DocumentFragment kontener służący do dostawiania elementów

  const h1 = $("<h1>Bookings - Rezerwacje</h1>");
  const p = $("<p>Wybierz datę przyjazdu i wyjazdu</p>");

  fragment.append(h1).append(p);

  return fragment;
};
