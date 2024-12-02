const selectEls = document.getElementById("sub_1_15");
const selectElsV2 = document.getElementById("sub_1_27");
const ownerOne = document.getElementById("ownerone");
const ownerOneV2 = document.getElementById("ownerone_v2");
const ownerTwoV2 = document.getElementById("ownertwo_v2");
selectEls.addEventListener(
  "input",
  function () {
    valueOne = $("#yes_15").val();
    console.log(valueOne);

    if ($("#sub_1_15").val() !== "" || undefined) {
      if ($("#sub_1_15").val() === valueOne) {
        ownerOne.style.display = "block";
      } else {
        ownerOne.style.display = "none";
      }
    } else {
      ownerOne.style.display = "none";
    }
  },
  false
);

selectElsV2.addEventListener(
  "input",
  function () {
    valueOne = $("#yes_4").val();
    valueTwo = $("#no_4").val();
    console.log(valueOne);

    if ($("#sub_1_27").val() !== "" || undefined) {
      if ($("#sub_1_27").val() === valueOne) {
        ownerOneV2.style.display = "block";
        ownerTwoV2.style.display = "none";
      } else {
        ownerOneV2.style.display = "none";
        ownerTwoV2.style.display = "block";
      }
    } else {
      ownerOneV2.style.display = "none";
      ownerTwoV2.style.display = "none";
    }
  },
  false
);
