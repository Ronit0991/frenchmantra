console.log("Website Loaded");

const popup = document.getElementById("popupForm");
const closeBtn = document.querySelector(".close-popup");

/* POPUP BUTTONS */
const triggerButtons = document.querySelectorAll(
  ".btn-primary, .btn-main, .help-box button, .demo-btn"
);

/* OPEN CONTACT POPUP */
triggerButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (popup) popup.classList.add("show-popup");
  });
});

/* CLOSE CONTACT POPUP */
if (closeBtn && popup) {
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("show-popup");
  });
}

/* CLICK OUTSIDE CONTACT POPUP */
if (popup) {
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("show-popup");
    }
  });
}

/* =====================================================
   BLOG INTERACTIONS & READER MODAL
===================================================== */

const blogModal = document.getElementById("blogModal");
const blogModalContent = document.getElementById("blogModalContent");
const closeBlogModal = document.getElementById("closeBlogModal");
const blogTabs = document.querySelectorAll(".blog-tab");
const blogCards = document.querySelectorAll(".blog-card");

/* BLOG CATEGORY FILTERING */
blogTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const category = tab.getAttribute("data-category");

    blogTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    blogCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");
      if (category === "all" || cardCategory === category) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

/* OPEN BLOG ARTICLE READER MODAL */
function openBlogArticle(articleId) {
  const template = document.getElementById(`${articleId}-content`);
  if (template && blogModalContent && blogModal) {
    blogModalContent.innerHTML = template.innerHTML;
    blogModal.classList.add("show-popup");
  }
}

/* LISTEN FOR READ ARTICLE CLICK & MODAL EVENTS */
document.addEventListener("click", (e) => {
  const readBtn = e.target.closest(".read-article-btn");
  if (readBtn) {
    const articleId = readBtn.getAttribute("data-article-target");
    openBlogArticle(articleId);
    return;
  }

  const cardTitle = e.target.closest(".blog-card-title");
  if (cardTitle) {
    const card = cardTitle.closest(".blog-card");
    if (card) {
      const articleId = card.getAttribute("data-article-id");
      openBlogArticle(articleId);
    }
    return;
  }

  /* CLOSE BLOG MODAL */
  if (e.target.closest("#closeBlogModal") || e.target === blogModal) {
    if (blogModal) blogModal.classList.remove("show-popup");
    return;
  }

  /* BOOK DEMO FROM BLOG MODAL */
  if (e.target.closest(".open-enroll-from-blog")) {
    if (blogModal) blogModal.classList.remove("show-popup");
    if (popup) popup.classList.add("show-popup");
    return;
  }
});
