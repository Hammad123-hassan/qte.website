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

   // Add active class to the clicked button
   var clickedButton = document.querySelector('.tab-btn[data-category="' + category + '"]');
   clickedButton.classList.add('active');
}