document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector(".SideContactFormstyled__Container-sc-xpl7fe-0");
  var formWrapper = document.querySelector(".SideContactFormstyled__FormWrapper-sc-xpl7fe-2");

  container.addEventListener("click", function () {
      // Toggle the visibility of the form wrapper
      if (formWrapper.style.display === "none" || formWrapper.style.display === "") {
          formWrapper.style.display = "flex";
        
          // Remove the gYoBYn class and add the eSEVla class
          formWrapper.classList.remove("gYoBYn");
          formWrapper.classList.add("eSEVla");
      } else {
          formWrapper.style.display = "none";
           

          // Add the gYoBYn class and remove the eSEVla class
          formWrapper.classList.remove("eSEVla");
          formWrapper.classList.add("gYoBYn");
      }
  });

  // Close the form wrapper when clicking the close button
  var closeButton = formWrapper.querySelector(".SideContactFormstyled__CloseButton-sc-xpl7fe-6");
  closeButton.addEventListener("click", function () {
      formWrapper.style.display = "none";

      // Add the gYoBYn class and remove the eSEVla class
      formWrapper.classList.remove("eSEVla");
      formWrapper.classList.add("gYoBYn");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector(
    ".Headerstyle__Hamburger-sc-11sf5xg-4"
  );
  const sidebarMenu = document.querySelector(
    ".Headerstyle__SidebarBackground-sc-11sf5xg-6"
  );
  const HeaderMenu = document.querySelector(
    ".Headerstyle__Sidebar-sc-11sf5xg-9"
  );
  hamburgerIcon.addEventListener("click", function () {
    hamburgerIcon.classList.toggle("active");
    sidebarMenu.classList.toggle("active");
    HeaderMenu.classList.toggle("active");
    const menuVisible = sidebarMenu.classList.contains("active");

    // Update the position of the sidebar menu based on its visibility
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.querySelector(
    ".Headerstyle__Hamburger-sc-11sf5xg-5"
  );
  var navMenu = document.querySelector(".Headerstyle__Sidebar-sc-11sf5xg-9");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active"); // You may need to define a CSS class for 'open'
  });
});

// tabs js

document.getElementById("taball").style.display = "block";

function filterNews(category) {
  var tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(function (tab) {
    tab.style.display = "none";
  });

  var buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach(function (button) {
    button.classList.remove("active");
  });

  if (category === "all") {
    tabs.forEach(function (tab) {
      tab.style.display = "block";
    });
  } else {
    var selectedTab = document.getElementById("tab" + category);
    selectedTab.style.display = "block";
  }
  var clickedButton = document.querySelector(
    '.tab-btn[data-category="' + category + '"]'
  );
  clickedButton.classList.add("active");
}

function submitForm() {
  // Get form data
  const formData = {
    name: document.getElementById("yourForm").elements.name.value,
    email: document.getElementById("yourForm").elements.email.value,
    phoneNumber: document.getElementById("yourForm").elements.phoneNumber.value,
    jobTitle: document.getElementById("yourForm").elements.jobTitle.value,
    message: document.getElementById("yourForm").elements.message.value,
    checkbox: document.getElementById("yourForm").elements.checkbox.checked,
  };
  if (!validateForm(formData)) {
    return;
  }
  console.log("Form Data:", formData);
  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";
  document.getElementById("yourForm").reset();
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 5000);
}

function validateForm(formData) {
  clearErrorMessages();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email)) {
    displayErrorMessage("Invalid or missing email", "emailError");
    return false;
  }

  return true;
}

function displayErrorMessage(message, elementId) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
}

function clearErrorMessages() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((element) => {
    element.textContent = "";
  });
}

