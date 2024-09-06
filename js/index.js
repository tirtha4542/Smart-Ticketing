const seats = document.getElementsByClassName("seat-plan");

let count = 0;

for (const seat of seats) {
  seat.addEventListener("click", myFunction);

  function myFunction(event) {
    count += 1;

    if (count === 4) {
      for (const seat of seats) {
        seat.disabled = true;
      }
    }

    const clicked = event.target;

    clicked.style.backgroundColor = "#1DD100";
    clicked.disabled = true;

    setElementById("selected-seat", count);
    console.log(event.target.innerText);
    let totalSeat = document.getElementById("total-seat");
    let seatTotal = parseInt(totalSeat.innerText);
    totalSeat.innerText = seatTotal - 1;
    const seatNo = event.target.innerText;

    const seatPrice = seatPrices("seat-price");
    const ticketDetails = document.getElementById("ticket-details");
    //Create element
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText = seatNo;
    const td2 = document.createElement("td");
    td2.innerText = "Economoy";
    const td3 = document.createElement("td");
    td3.innerText = seatPrice;
    //Append Child
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    ticketDetails.appendChild(tr);

    // total price
    totalPrice("total-price", seatPrice);

    //grand total
    const grandTotal = document.getElementById("grand-total").innerText;
    const grantTotalPrice = parseInt(grandTotal);
    setElementById("grand-total", grantTotalPrice + seatPrice);
  }
}
const couponBtn = document.getElementById("coupon-btn");
// Coupon discount
couponBtn.addEventListener("click", function (event) {
  const input = document.getElementById("input-coupon");
  const inputText = input.value;
  const coupon15 = document.getElementById("coupon15").innerText;
  const coupon20 = document.getElementById("coupon20").innerText;

  //Coupon15
  if (inputText === coupon15) {
    console.log("congratulation");
    const grandTotal = document.getElementById("grand-total").innerText;
    let grantTotalPrice = parseInt(grandTotal);
    grantTotalPrice = grantTotalPrice - grantTotalPrice * 0.15;
    setElementById("grand-total", grantTotalPrice);
    input.value = "";
    input.parentNode.classList.add("hidden");
    // coupon20
  } else if (inputText === coupon20) {
    const grandTotal = document.getElementById("grand-total").innerText;
    let grantTotalPrice = parseInt(grandTotal);
    grantTotalPrice = grantTotalPrice - grantTotalPrice * 0.2;
    setElementById("grand-total", grantTotalPrice);
    input.value = "";
    input.parentNode.classList.add("hidden");
  } else {
    alert("Please enter valid coupon code");
    input.value = "";
  }
});

// Reusable Function
function setElementById(id, value) {
  document.getElementById(id).innerText = value;
}

function seatPrices(id) {
  const price = parseInt(document.getElementById(id).innerText);
  return price;
}

function totalPrice(id, price) {
  const totalPriceElement = document.getElementById(id).innerText;
  let totalPrice = parseInt(totalPriceElement);
  setElementById(id, totalPrice + price);
}
