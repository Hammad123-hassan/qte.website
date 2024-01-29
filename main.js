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

document.getElementById('taball').style.display = 'block';

function filterNews(category) {
   var tabs = document.querySelectorAll('.tab-content');
   tabs.forEach(function(tab) {
      tab.style.display = 'none';
   });

   var buttons = document.querySelectorAll('.tab-btn');
   buttons.forEach(function(button) {
      button.classList.remove('active');
   });

   if (category === 'all') {
      tabs.forEach(function(tab) {
         tab.style.display = 'block';
      });
   } else {
      var selectedTab = document.getElementById('tab' + category);
      selectedTab.style.display = 'block';
   }
   var clickedButton = document.querySelector('.tab-btn[data-category="' + category + '"]');
   clickedButton.classList.add('active');
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

// function submitForm() {
//     // Get form data
//     const formData = {
//       name: document.getElementById("yourForm").elements.name.value,
//       email: document.getElementById("yourForm").elements.email.value,
//       phoneNumber: document.getElementById("yourForm").elements.phoneNumber.value,
//       jobTitle: document.getElementById("yourForm").elements.jobTitle.value,
//       message: document.getElementById("yourForm").elements.message.value,
//       checkbox: document.getElementById("yourForm").elements.checkbox.checked,
//     };

//     // Perform form validation
//     if (!validateForm(formData)) {
//       return;
//     }

//     // Check if any required field is empty
//     const requiredFields = ['name', 'email', 'message'];
//     const emptyFields = requiredFields.filter(field => !formData[field]);

//     if (emptyFields.length > 0) {
//       displayErrorMessage("All required fields must be filled", "formError");
//       return;
//     }

//     // Clear any previous error messages
//     clearErrorMessages();

//     // Log form data
//     console.log("Form Data:", formData);

//     // Display success message
//     const successMessage = document.getElementById("successMessage");
//     successMessage.style.display = "block";

//     // Clear the form
//     document.getElementById("yourForm").reset();

//     // Hide success message after 5 seconds
//     setTimeout(() => {
//       successMessage.style.display = "none";
//     }, 5000);
//   }

//   function validateForm(formData) {
//     // Clear any previous error messages
//     clearErrorMessages();

//     // Implement your form validation logic here
//     // Return true if validation passes, otherwise return false

//     // Example validation: Check if name is provided
//     if (!formData.name) {
//       displayErrorMessage("Name is required", "nameError");
//       return false;
//     }

//     // Example validation: Check if email is provided and valid
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email || !emailRegex.test(formData.email)) {
//       displayErrorMessage("Invalid or missing email", "emailError");
//       return false;
//     }

//     // Example validation: Check if phone number is valid
//     const phoneRegex = /^[0-9]{9,15}$/;
//     if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
//       displayErrorMessage("Invalid phone number", "phoneNumberError");
//       return false;
//     }

//     // Example validation: Check if message is provided
//     if (!formData.message) {
//       displayErrorMessage("Message is required", "messageError");
//       return false;
//     }

//     // Add more validation checks as needed

//     return true;
//   }

//   function displayErrorMessage(message, elementId) {
//     const errorElement = document.getElementById(elementId);
//     errorElement.textContent = message;
//   }

//   function clearErrorMessages() {
//     const errorMessages = document.querySelectorAll(".error-message");
//     errorMessages.forEach((element) => {
//       element.textContent = "";
//     });
//   }