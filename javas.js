setTimeout(function abrirform() {
    document.getElementById("form-box").style.display = "block"
},1500)
function fechaform(event) {
    event.preventDefault();
    document.getElementById("form-box").style.display = "none"
}