const pizzaPrices = {
  none: {
    auto: 0,
    mech: 0,
  },
  thin: {
    auto: 50,
    mech: 80,
  },
  medium: {
    auto: 80,
    mech: 90,
  },
  thick: {
    auto: 20,
    mech: 100,
  },
};
const priceEl = document.querySelector("#price");

function getPrice() {
  let price = 0;
  const brandSelect = document.getElementById("carSelect");

  const tranferTypeEls = document.getElementsByName("transfer");

  const transferType = tranferTypeEls[0].Checked
    ? tranferTypeEls[0].value
    : tranferTypeEls[1].value;
  const hasPepper = document.getElementById("pepper").checked ? 10 : 0;
  const hasSousage = document.getElementById("sousage").checked ? 5 : 0;
  const hasTomato = document.getElementById("tomato").checked ? 10 : 0;
  const hasCucember = document.getElementById("cucember").checked ? 5 : 0;
  const hasMushrooms = document.getElementById("mushroom").checked ? 6 : 0;
  const hasTurkey = document.getElementById("turkey").checked ? 8 : 0;
  const daysPrice =
    +document.getElementById("days").value *
    pizzaPrices[brandSelect.value][transferType];

  price +=
    daysPrice +
    hasPepper +
    hasSousage +
    hasTomato +
    hasCucember +
    hasMushrooms +
    hasTurkey;
  priceEl.innerHTML = price;
  function clicker() {
  alert("Buyurtmangiz tez orada tayyor boladi!");
  }
}
// alert("Tabga kora tanlang");
getPrice();
function clicker() {
  alert("Buyurtmangiz tez orada tayyor boladi!");
  }