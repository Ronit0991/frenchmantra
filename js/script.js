console.log("Website Loaded");


const closeBtn = document.querySelector(".close-popup");

/* BUTTONS */

const triggerButtons = document.querySelectorAll(
  ".btn-primary, .btn-main, .help-box button, .demo-btn"
);

/* OPEN POPUP */

triggerButtons.forEach((btn) => {

  btn.addEventListener("click", () => {

    popup.classList.add("show-popup");

  });

});

/* CLOSE BUTTON */

closeBtn.addEventListener("click", () => {

  popup.classList.remove("show-popup");

});

/* CLICK OUTSIDE */

popup.addEventListener("click", (e) => {

  if(e.target === popup){

    popup.classList.remove("show-popup");

  }

});

