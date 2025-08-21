const pancakeForm = document.getElementById("pancakeForm");
const priceDisplay = document.getElementById("totalPrice");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");
const seeOrderButton = document.getElementById("seeOrder");
const confirmOrderButton = document.getElementById("confirmOrder");
const orderSummary = document.getElementById("orderSummary");
const summaryText = document.getElementById("summaryText");

let orders = JSON.parse(localStorage.getItem("orders")) || [];
let selectedToppings = [];
let selectedExtras = [];
let selectedDeliveryMethod = "Syö täällä";

pancakeForm.addEventListener("change", function (event) {
  const target = event.target;

  if (target.id === "type") {
    calculateTotalPrice();
  } else if (target.classList.contains("topping")) {
    handleToppingChange(target);
  } else if (target.classList.contains("extra")) {
    handleExtraChange(target);
  } else if (target.classList.contains("delivery")) {
    handleDeliveryChange(target);
  }

  calculateTotalPrice();
});

function handleToppingChange(checkbox) {
  const toppingName = checkbox.parentElement.querySelector("span").textContent;

  if (checkbox.checked) {
    if (!selectedToppings.includes(toppingName)) {
      selectedToppings.push(toppingName);
    }
  } else {
    selectedToppings = selectedToppings.filter(
      (topping) => topping !== toppingName
    );
  }
}

function handleExtraChange(checkbox) {
  const extraName = checkbox.parentElement.querySelector("span").textContent;

  if (checkbox.checked) {
    if (!selectedExtras.includes(extraName)) {
      selectedExtras.push(extraName);
    }
  } else {
    selectedExtras = selectedExtras.filter((extra) => extra !== extraName);
  }
}

function handleDeliveryChange(checkbox) {
  if (checkbox.checked) {
    document.querySelectorAll(".delivery").forEach((cb) => {
      if (cb !== checkbox) cb.checked = false;
    });

    selectedDeliveryMethod = checkbox.parentElement.textContent.trim();
  }
}

function calculateTotalPrice() {
  const pancakeTypeSelect = document.getElementById("type");
  const selectedOption =
    pancakeTypeSelect.options[pancakeTypeSelect.selectedIndex];
  let total = Number(selectedOption.value);

  document.querySelectorAll(".topping:checked").forEach((topping) => {
    total += Number(topping.value);
  });

  document.querySelectorAll(".extra:checked").forEach((extra) => {
    total += Number(extra.value);
  });

  const deliveryCheckbox = document.querySelector(
    ".delivery[value='5']:checked"
  );
  if (deliveryCheckbox) {
    total += Number(deliveryCheckbox.value);
  }

  priceDisplay.textContent = `${total}€`;
  totalPriceDisplay.textContent = `${total}€`;

  priceDisplay.classList.add("animate-price");
  totalPriceDisplay.classList.add("animate-price");

  setTimeout(() => {
    priceDisplay.classList.remove("animate-price");
    totalPriceDisplay.classList.remove("animate-price");
  }, 400);
}

function saveOrder(order) {
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
}

seeOrderButton.addEventListener("click", function () {
  const customerName = document.getElementById("customerName").value;
  const pancakeTypeSelect = document.getElementById("type");
  const selectedOption =
    pancakeTypeSelect.options[pancakeTypeSelect.selectedIndex];
  const pancakeType = selectedOption.text;
  const totalPrice = totalPriceDisplay.textContent;

  let summary = `<p><strong>Asiakkaan nimi:</strong> ${
    customerName || "Ei annettu"
  }</p>`;
  summary += `<p><strong>Pannukakun tyyppi:</strong> ${pancakeType}</p>`;

  if (selectedToppings.length > 0) {
    summary += `<p><strong>Valitut täytteet:</strong> ${selectedToppings.join(
      ", "
    )}</p>`;
  } else {
    summary += `<p><strong>Valitut täytteet:</strong> Ei täytteitä</p>`;
  }

  if (selectedExtras.length > 0) {
    summary += `<p><strong>Valitut lisukkeet:</strong> ${selectedExtras.join(
      ", "
    )}</p>`;
  } else {
    summary += `<p><strong>Valitut lisukkeet:</strong> Ei lisukkeita</p>`;
  }

  summary += `<p><strong>Toimitustapa:</strong> ${selectedDeliveryMethod}</p>`;

  summary += `<p><strong>Kokonaishinta:</strong> ${totalPrice}</p>`;

  summaryText.innerHTML = summary;
  orderSummary.style.display = "block";
});

confirmOrderButton.addEventListener("click", function () {
  const customerName = document.getElementById("customerName").value;
  const pancakeTypeSelect = document.getElementById("type");
  const selectedOption =
    pancakeTypeSelect.options[pancakeTypeSelect.selectedIndex];
  const pancakeType = selectedOption.text;
  const totalPrice = totalPriceDisplay.textContent;

  const order = {
    id: Date.now(),
    customerName: customerName || "Ei annettu",
    pancakeType: pancakeType,
    toppings: selectedToppings,
    extras: selectedExtras,
    deliveryMethod: selectedDeliveryMethod,
    totalPrice: totalPrice,
    status: "Tilaus vastaanotettu",
    timestamp: new Date().toLocaleString("fi-FI"),
  };

  saveOrder(order);

  alert("Tilaus vahvistettu!");

  pancakeForm.reset();
  selectedToppings = [];
  selectedExtras = [];
  selectedDeliveryMethod = "Syö täällä";
  orderSummary.style.display = "none";
  calculateTotalPrice();
});

calculateTotalPrice();
