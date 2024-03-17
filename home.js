let balance = 0.0;
let deposite = 0.0;
let withdraw = 0.0;

let currentBalance = document.getElementById("balance");
currentBalance.innerHTML = balance.toFixed(2);

let currentDeposite = document.getElementById("deposite");
currentDeposite.innerHTML = deposite.toFixed(2);

let currentWithdraw = document.getElementById("withdraw");
currentWithdraw.innerHTML = withdraw.toFixed(2);

document.getElementById("dipBtn").addEventListener("click", () => {
  dipositeAmount = document.getElementById("dipInput");

  if (dipositeAmount.value !== null && parseFloat(dipositeAmount.value) > 0) {
    balance += parseFloat(dipositeAmount.value);
    deposite += parseFloat(dipositeAmount.value);
    currentBalance.innerHTML = balance.toFixed(2);
    currentDeposite.innerHTML = deposite.toFixed(2);
  } else {
    alert("Invalid amount");
  }

  dipositeAmount.value = "";
});

document.getElementById("witBtn").addEventListener("click", () => {
  withdrawAmount = document.getElementById("witInput");

  if (
    withdrawAmount.value !== null &&
    parseFloat(withdrawAmount.value) > 0 &&
    parseFloat(withdrawAmount.value) <= balance
  ) {
    balance -= parseFloat(withdrawAmount.value);
    withdraw += parseFloat(withdrawAmount.value);
    currentBalance.innerHTML = balance.toFixed(2);
    currentWithdraw.innerHTML = withdraw.toFixed(2);
  } else {
    alert("Invalid amount");
  }

  withdrawAmount.value = "";
});
