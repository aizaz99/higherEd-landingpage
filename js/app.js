const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function debounce(callback, delay = 300) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
}

const searchInput = document.getElementById("program-search");
const categorySelect = document.getElementById("program-category");
const programCards = document.querySelectorAll(".program-card");
const resultsCount = document.getElementById("results-count");

function filterPrograms() {
  if (!programCards.length) return;

  const searchValue = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const categoryValue = categorySelect ? categorySelect.value : "all";
  let visibleCount = 0;

  programCards.forEach((card) => {
    const title = card.querySelector("h2").textContent.toLowerCase();
    const keywords = card.dataset.keywords.toLowerCase();
    const category = card.dataset.category;

    const matchesSearch = title.includes(searchValue) || keywords.includes(searchValue);
    const matchesCategory = categoryValue === "all" || category === categoryValue;
    const shouldShow = matchesSearch && matchesCategory;

    card.hidden = !shouldShow;
    if (shouldShow) visibleCount++;
  });

  if (resultsCount) {
    resultsCount.textContent = `Showing ${visibleCount} program${visibleCount === 1 ? "" : "s"}`;
  }
}

if (searchInput) {
  searchInput.addEventListener("input", debounce(filterPrograms, 300));
}

if (categorySelect) {
  categorySelect.addEventListener("change", filterPrograms);
}

const modal = document.getElementById("details-modal");
const modalTitle = document.getElementById("modal-title");
const modalSchool = document.getElementById("modal-school");
const modalDescription = document.getElementById("modal-description");
const modalTriggers = document.querySelectorAll("[data-modal-trigger]");
const closeModalTriggers = document.querySelectorAll("[data-close-modal]");
let lastFocusedElement = null;

function openModal(button) {
  if (!modal) return;

  lastFocusedElement = button;
  modalTitle.textContent = button.dataset.title;
  modalSchool.textContent = `School: ${button.dataset.school}`;
  modalDescription.textContent = button.dataset.description;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const closeButton = modal.querySelector(".modal-close");
  if (closeButton) closeButton.focus();
}

function closeModal() {
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

modalTriggers.forEach((button) => {
  button.addEventListener("click", () => openModal(button));
});

closeModalTriggers.forEach((button) => {
  button.addEventListener("click", closeModal);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal && modal.classList.contains("is-open")) {
    closeModal();
  }
});

const accordionTriggers = document.querySelectorAll(".accordion-trigger");

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const panel = trigger.nextElementSibling;
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";

    trigger.setAttribute("aria-expanded", String(!isExpanded));
    panel.hidden = isExpanded;
  });
});

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

function validateField(field) {
  const errorElement = field.parentElement.querySelector(".error-message");
  let error = "";

  if (field.validity.valueMissing) {
    error = "This field is required.";
  } else if (field.type === "email" && field.validity.typeMismatch) {
    error = "Please enter a valid email address.";
  }

  errorElement.textContent = error;
  field.classList.toggle("input-error", Boolean(error));

  return !error;
}

if (contactForm) {
  const fields = [...contactForm.querySelectorAll("input, select, textarea")];

  fields.forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const allValid = fields.every((field) => validateField(field));

    if (!allValid) {
      formStatus.textContent = "Please fix the highlighted fields and try again.";
      formStatus.style.color = "#b42318";
      return;
    }

    formStatus.textContent = "Thanks. Your message has been submitted successfully.";
    formStatus.style.color = "#1c7c54";

    contactForm.reset();
    fields.forEach((field) => field.classList.remove("input-error"));
    contactForm.querySelectorAll(".error-message").forEach((msg) => {
      msg.textContent = "";
    });
  });
}