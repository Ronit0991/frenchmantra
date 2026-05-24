/* =========================
GOOGLE SHEET CONNECT
========================= */

const popup = document.getElementById("popupForm");

const form = document.getElementById("contactForm");

const successMessage = document.getElementById("successMessage");

/* GOOGLE SCRIPT URL */

const scriptURL = "https://script.google.com/macros/s/AKfycbx0oK6oxUsJQ1MJV4fXg-6opkEFFDYa-jalw5g-cnMIBAl9aEpuxRY8URwtEN1OvzrIVA/exec";

form.addEventListener("submit", function(e){

  e.preventDefault();

  if(form.checkValidity()){

    const formData = {

      name: document.getElementById("name").value,

      phone: document.getElementById("phone").value,

      email: document.getElementById("email").value,

      course: document.getElementById("course").value,

      mode: document.getElementById("mode").value,

      message: document.getElementById("message").value

    };

    try{

      /* INSTANT SUCCESS UI */

      form.querySelectorAll(
        ".form-row, label, input, select, textarea, .submit-btn, .small-note"
      ).forEach((el) => {

        el.style.display = "none";

      });

      successMessage.style.display = "block";

      /* SEND DATA IN BACKGROUND */

      fetch(scriptURL, {

        method: "POST",

        body: JSON.stringify(formData)

      });

      /* CLOSE POPUP FAST */

      setTimeout(() => {

        popup.classList.remove("show-popup");

      }, 1500);

    }

    catch(error){

      alert("Something went wrong!");

      console.log(error);

    }

  }

  else{

    form.reportValidity();

  }

});