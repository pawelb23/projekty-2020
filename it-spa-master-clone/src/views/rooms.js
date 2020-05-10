import $ from "jquery";

export const rooms = () => {
  const fragment = $(new DocumentFragment());
  //DocumentFragment kontener służący do dostawiania elementów

  const h1 = $("<h1>Rooms - Pokoje</h1>");
  const p = $("<p>Pokoje dostępne w SPA</p>");

  fragment.append(h1).append(p);

  return fragment;
};
