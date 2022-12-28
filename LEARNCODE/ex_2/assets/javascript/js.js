const handlepre = function () {
  const list = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(list[0]);
};
const handlenext = function () {
  const list = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(list[ list.length-1 ]);
};