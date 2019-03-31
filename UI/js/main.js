var button = document.querySelector('#logout-menu-toggler');
var menu = document.querySelector('.user');
button.addEventListener('click', function (event) {
      if (menu.style.visibility == "hidden" || menu.style.visibility == "" ) {
          menu.style.visibility = "visible";
      } else {
          menu.style.visibility = "hidden";
      }
    }
  );
