let form = document.querySelector("form");
let input = document.querySelectorAll("input[type='text']");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let cardHolder = document.createElement("div");
    cardHolder.classList.add("card-holder");
    
    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", input[0].value);

    let info = document.createElement("div");
    info.classList.add("info");

    let name = document.createElement("h1");
    name.classList.add("name");
    name.textContent = input[1].value;

    let title = document.createElement("h3");
    title.classList.add("title");
    title.textContent = input[2].value;

    let bioText = document.createElement("span");
    bioText.classList.add("bio-text");
    bioText.textContent = input[3].value;

    
})
