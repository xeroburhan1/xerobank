document.getElementById("submit").addEventListener("click", () => {

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  email === "xero" && password === "1234"
    ? (window.location.href = "home.html")
    : alert("Invalid Information");
});
