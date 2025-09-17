// Simple swap button fix
document.addEventListener("DOMContentLoaded", function () {
  console.log("Swap fix script loaded");

  // Height swap functionality
  const heightSwapBtn = document.getElementById("swapHeightUnitsBtn");
  if (heightSwapBtn) {
    console.log("Height swap button found");
    heightSwapBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Height swap button clicked");

      const fromSelect = document.getElementById("heightUnitFrom");
      const toSelect = document.getElementById("heightUnitTo");

      if (fromSelect && toSelect) {
        const fromValue = fromSelect.value;
        const toValue = toSelect.value;

        console.log("Swapping height units:", fromValue, "to", toValue);

        // Don't swap if either is feet+inches
        if (fromValue === "ftIn" || toValue === "ftIn") {
          console.log("Cannot swap feet+inches format");
          return;
        }

        fromSelect.value = toValue;
        toSelect.value = fromValue;

        // Trigger change events
        fromSelect.dispatchEvent(new Event("change"));
        toSelect.dispatchEvent(new Event("change"));

        console.log("Height units swapped successfully");
      }
    });
  }

  // Weight swap functionality
  const weightSwapBtn = document.getElementById("swapWeightUnitsBtn");
  if (weightSwapBtn) {
    console.log("Weight swap button found");
    weightSwapBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Weight swap button clicked");

      const fromSelect = document.getElementById("weightUnitFrom");
      const toSelect = document.getElementById("weightUnitTo");

      if (fromSelect && toSelect) {
        const fromValue = fromSelect.value;
        const toValue = toSelect.value;

        console.log("Swapping weight units:", fromValue, "to", toValue);

        // Don't swap if either is stones+pounds
        if (fromValue === "stLb" || toValue === "stLb") {
          console.log("Cannot swap stones+pounds format");
          return;
        }

        fromSelect.value = toValue;
        toSelect.value = fromValue;

        // Trigger change events
        fromSelect.dispatchEvent(new Event("change"));
        toSelect.dispatchEvent(new Event("change"));

        console.log("Weight units swapped successfully");
      }
    });
  }

});