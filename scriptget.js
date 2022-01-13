let url = document.getElementById("webUrl");
let pass = document.getElementById("getPass");



url.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        retrive()
    }
});


pass.addEventListener("click", retrive);



function retrive(){
    var r = document.getElementById("webUrl").value
    var output = document.getElementById("output");
    output.textContent = localStorage.getItem(r);
};