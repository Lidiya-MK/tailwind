// document.addEventListener("DOMContentLoaded", function () {
//   const menuToggle = document.getElementById("menuToggle");
//   const menuList = document.getElementById("menuList");

//   menuToggle.addEventListener("click", function () {
//       if (menuList.classList.contains("hidden")) {
//           menuList.classList.remove("hidden");
//       } else {
//           menuList.classList.add("hidden");
//       }
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const menuList = document.getElementById("menuList");
  const secondaryMenuList = document.getElementById("secondaryMenuList");

  menuToggle.addEventListener("click", function () {
      if (secondaryMenuList.classList.contains("hidden")) {
          secondaryMenuList.classList.remove("hidden");
      } else {
          secondaryMenuList.classList.add("hidden");
      }
  });
});
