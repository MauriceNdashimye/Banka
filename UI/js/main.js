var button = document.querySelector('#logout-menu-toggler');
var menu = document.querySelector('.user');
var elements = document.getElementsByClassName("tablinks");
var dashboard = document.querySelector(".dashboard");
var transactions = document.querySelector(".transactions");
var clients = document.querySelector(".clients");
var staff = document.querySelector(".staff");
for(var i = 0; i<elements.length; i++ ){
    elements[i].onclick = function(){
        var el = elements[0];
        while(el){
            if(el.tagName==="LI"){
                el.classList.remove("active");
            }
            el = el.nextSibling;
        }
        if (this.innerHTML.includes("My&nbsp;Accounts") || this.innerHTML.includes("Transactions")){
            transactions.style.display = "block";
            dashboard.style.display = "none";
            clients.style.display = "none";
            staff.style.display = "none";
        };
        if (this.innerHTML.includes("Dashboard")){
            dashboard.style.display = "block";
            transactions.style.display = "none";
            clients.style.display = "none";
            staff.style.display = "none";
        };
        if (this.innerHTML.includes("Client")){
            dashboard.style.display = "none";
            transactions.style.display = "none";
            clients.style.display = "block";
            staff.style.display = "none";
            document.getElementById("search-wrap").style.display ="block";
        };
        if (this.innerHTML.includes("Staff")){
            dashboard.style.display = "none";
            transactions.style.display = "none";
            clients.style.display = "none";
            staff.style.display = "block";
            document.getElementById("search-wrap1").style.display ="block";
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
    else{

    }
}
);

window.onload = function(){
    x = document.getElementsByClassName("acc1");
    for(var i=0; i<x.length; i++)
    {
        x[i].style.display = "none";
    }
}


window.onload = function(){
    x = document.getElementsByClassName("usd");
    for(var i=0; i<x.length; i++)
    {
        x[i].style.display = "none";
    }
}

function onAccountSelected(){
    var account = document.getElementById("bank-account").value;
    x = document.getElementsByClassName("acc1");
    y = document.getElementsByClassName("acc2");

    if(account == "155678637564"){
        for(var i=0; i<x.length; i++)
        {
            x[i].style.display = "none";
        }
        for(var i=0; i<y.length; i++)
        {
            y[i].style.display = "";
        }
    }
    else{
        for(var i=0; i<x.length; i++)
        {
            x[i].style.display = "";
        }
        for(var i=0; i<y.length; i++)
        {
            y[i].style.display = "none";
        }
    }
}

function onCurrencySelected(){
    var account = document.getElementById("staff-account").value;
    x = document.getElementsByClassName("rwf");
    y = document.getElementsByClassName("usd");

    if(account == "rwf-account"){
        for(var i=0; i<x.length; i++)
        {
            x[i].style.display = "";
        }
        for(var i=0; i<y.length; i++)
        {
            y[i].style.display = "none";
        }
    }
    else{
        for(var i=0; i<x.length; i++)
        {
            x[i].style.display = "none";
        }
        for(var i=0; i<y.length; i++)
        {
            y[i].style.display = "";
        }
    }
}

var addButton = document.getElementById("add-btn");
var searchButton = document.getElementById("search-btn");
var searchForm = document.getElementById("search-form");
var addForm = document.getElementById("add-form");
var okSearch = document.getElementById("ok-search");
var cancelSearch = document.getElementById("cancel-search");
var okAdd = document.getElementById("ok-add");
var cancelAdd = document.getElementById("cancel-add");

addButton.onclick = function(){
    addForm.style.display ="block";
};
searchButton.onclick = function(){
    searchForm.style.display = "block";
};
okSearch.onclick = function(){
    searchForm.style.display ="none";
};
cancelSearch.onclick = function(){
    searchForm.style.display = "none";
};
okAdd.onclick = function(){
    addForm.style.display ="none";
};
cancelAdd.onclick = function(){
    addForm.style.display = "none";
};

function searchTable(obj) {
    filter = obj.value.toUpperCase();
    table = document.getElementById("accounts-transaction");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
}

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "user" && password == "password"){
        window.open("./UI/html/user-dashboard.html");
        return false;
    }
    else if(username == "staff" && password == "password"){
        window.open("./UI/html/staff-dashboard.html");
        return false;
    }
    else if(username == "admin" && password == "password"){
        window.open("./UI/html/admin-dashboard.html");
        return false;
    }
    else{
        alert("Wrong username or password");
    }
  }

function showSideMenu(){
    var sideMenu = document.getElementsByTagName("aside").classList
    if(sideMenu.contains('show-side-menu')){
        sideMenu.remove('show-side-menu');
        sideMenu.add('hide-side-menu');
    }
    else{
        sideMenu.remove('hide-side-menu');
        sideMenu.add('show-side-menu');
    }
}

(function(){
    var links = document.getElementsByClassName("add-tooltip")
      for(var i=0; i<links.length; i++){
         var a = links[i];
         if(a.title !== ''){
           a.addEventListener('mouseover',createTip);
           a.addEventListener('mouseout',cancelTip);
         }
      } 
    function createTip(ev){
        var title = this.title;
        this.title = '';
        this.setAttribute("tooltip", title);
        var tooltipWrap = document.createElement("div"); 
        tooltipWrap.className = 'tooltip'; 
        tooltipWrap.appendChild(document.createTextNode(title)); 
 
        var firstChild = document.body.firstChild;
        firstChild.parentNode.insertBefore(tooltipWrap, firstChild);
        var padding = 5;
        var linkProps = this.getBoundingClientRect();
        var tooltipProps = tooltipWrap.getBoundingClientRect(); 
        var topPos = linkProps.bottom - (tooltipProps.height + padding);
        var leftPos = linkProps.left - (tooltipProps.width + padding)
        tooltipWrap.setAttribute('style','top:'+topPos+'px;'+'left:'+leftPos+'px;')
    }
    function cancelTip(ev){
        var title = this.getAttribute("tooltip");
        this.title = title;
        this.removeAttribute("tooltip");
        document.querySelector(".tooltip").remove();
    }


})()