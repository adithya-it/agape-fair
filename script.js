// whatsapp number
var number = "94717812869";

// get things from the page
var form = document.getElementById("fairForm");
var statusBox = document.getElementById("statusBox");
var citySelect = document.getElementById("city");


// choose colombo / kandy links
var cityLinks = document.querySelectorAll("[data-city]");

cityLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    var city = link.getAttribute("data-city");

    // select the same city in the dropdown
    for (var i = 0; i < citySelect.options.length; i++) {
      if (citySelect.options[i].text.indexOf(city) === 0) {
        citySelect.selectedIndex = i;
      }
    }
  });
});


// when the form is submitted
form.addEventListener("submit", function (event) {
  event.preventDefault();   // stop the page from reloading

  // bots fill the hidden field, so stop if it has text
  if (form.website.value !== "") {
    return;
  }

  // stop if something is empty
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // make the message
  var message =
    "Education Fair Registration\n" +
    "Name: " + form.name.value + "\n" +
    "WhatsApp: " + form.phone.value + "\n" +
    "Email: " + form.email.value + "\n" +
    "Fair: " + form.city.value + "\n" +
    "Intake: " + form.intake.value;

  statusBox.style.display = "block";
  statusBox.textContent = "Opening WhatsApp to send your registration...";

  // open whatsapp with the message already typed
  window.open("https://wa.me/" + number + "?text=" + encodeURIComponent(message), "_blank");
});