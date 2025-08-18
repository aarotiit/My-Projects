const ordersContainer = document.getElementById("ordersContainer");
let orders = JSON.parse(localStorage.getItem("orders")) || [];

function displayOrders() {
  if (orders.length === 0) {
    ordersContainer.innerHTML =
      "<p style='text-align: center; color: #666; font-size: 1.2em;'>Ei tilauksia.</p>";
    return;
  }

  ordersContainer.innerHTML = "";

  orders.forEach((order) => {
    const orderCard = document.createElement("div");
    orderCard.className = "order-card";
    orderCard.classList.add(getStatusClass(order.status));

    orderCard.innerHTML = `
      <div class="order-header">
        <div class="order-id">Tilaus #${order.id}</div>
        <div class="order-timestamp">${order.timestamp}</div>
      </div>
      
      <div class="order-info">
        <h3>${order.customerName}</h3>
        <p><strong>Pannukakku:</strong> ${order.pancakeType}</p>
        <p><strong>Täytteet:</strong> ${
          order.toppings.length > 0 ? order.toppings.join(", ") : "Ei täytteitä"
        }</p>
        <p><strong>Lisukkeet:</strong> ${
          order.extras.length > 0 ? order.extras.join(", ") : "Ei lisukkeita"
        }</p>
        <p><strong>Toimitus:</strong> ${order.deliveryMethod}</p>
      </div>
      
      <div class="status-section">
        <select class="status-select" data-order-id="${order.id}">
          <option value="Tilaus vastaanotettu" ${
            order.status === "Tilaus vastaanotettu" ? "selected" : ""
          }>Tilaus vastaanotettu</option>
          <option value="Valmistetaan" ${
            order.status === "Valmistetaan" ? "selected" : ""
          }>Valmistetaan</option>
          <option value="Valmis noudettavaksi" ${
            order.status === "Valmis noudettavaksi" ? "selected" : ""
          }>Valmis noudettavaksi</option>
          <option value="Toimitettu" ${
            order.status === "Toimitettu" ? "selected" : ""
          }>Toimitettu</option>
        </select>
      </div>
      
      <div class="price-display">${order.totalPrice}</div>
    `;

    ordersContainer.appendChild(orderCard);
  });

  attachStatusListeners();
}

function getStatusClass(status) {
  switch (status) {
    case "Tilaus vastaanotettu":
      return "status-received";
    case "Valmistetaan":
      return "status-preparing";
    case "Valmis noudettavaksi":
      return "status-ready";
    case "Toimitettu":
      return "status-delivered";
    default:
      return "status-received";
  }
}

function attachStatusListeners() {
  const statusSelects = document.querySelectorAll(".status-select");

  statusSelects.forEach((select) => {
    select.addEventListener("change", function () {
      const orderId = parseInt(this.getAttribute("data-order-id"));
      const newStatus = this.value;

      updateOrderStatus(orderId, newStatus);
    });
  });
}

function updateOrderStatus(orderId, newStatus) {
  const orderIndex = orders.findIndex((order) => order.id === orderId);

  if (orderIndex !== -1) {
    orders[orderIndex].status = newStatus;
    localStorage.setItem("orders", JSON.stringify(orders));
    displayOrders();
  }
}

displayOrders();
