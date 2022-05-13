const form = document.querySelector(".js-form"),
    input = form.querySelector("input");

function handleSubmit(event){
    event.preventDefault();
}

function init(){
    form.addEventListener("submit",handleSubmit);
}

init();