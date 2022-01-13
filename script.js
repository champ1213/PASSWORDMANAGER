let web = document.getElementById("web");
let pass = document.getElementById("pass");
let send = document.getElementById("send");


web.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        var web = document.getElementById("web").value;
        var pass = document.getElementById("pass").value;
        store(web, pass);
    }
});








pass.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        var web = document.getElementById("web").value;
        var pass = document.getElementById("pass").value;
        store(web, pass);
    }
});



send.addEventListener("click", sendbutton);

function sendbutton() {
  var web = document.getElementById("web").value;
  var pass = document.getElementById("pass").value;
  store(web, pass)
};



function store(key, value) {
  let myList = {
    password: value
  }
  window.localStorage.setItem(key, JSON.stringify(myList));
};

