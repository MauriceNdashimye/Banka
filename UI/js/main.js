var button = document.querySelector('#logout-menu-toggler');
var menu = document.querySelector('.user');
var elements = document.getElementsByClassName("tablinks");
var dashboard = document.querySelector(".dashboard");
var transactions = document.querySelector(".transactions");
for(var i = 0; i<elements.length; i++ ){
    elements[i].onclick = function(){
        var el = elements[0];
        console.log(dashboard)
        while(el){
            if(el.tagName==="LI"){
                el.classList.remove("active");
            }
            el = el.nextSibling;
        }
        if (this.innerHTML.includes("Transactions")){
            transactions.style.display = "block";
            dashboard.style.display = "none";
        };
        if (this.innerHTML.includes("Dashboard")){
            dashboard.style.display = "block";
            transactions.style.display = "none";
        };
        this.classList.add("active");
    };
};
button.addEventListener('click', function (event) {
      if (menu.style.visibility == "hidden" || menu.style.visibility == "" ) {
          menu.style.visibility = "visible";
      } else {
          menu.style.visibility = "hidden";
      }
    }
);
window.addEventListener('mouseup', function(event){
    if(event.target != button ){
        menu.style.visibility = "hidden";
    }
}
);

