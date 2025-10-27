let form = document.querySelector("form");
let input = document.querySelectorAll("input[type='text']");
let main = document.querySelector(".main");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // create elements and get a values from inputs and assign them with class list for styling
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

    // append the elements to each other so that they shown on the DOM (html page)
    // append parent elements
    cardHolder.appendChild(card);
    card.appendChild(profile);
    card.appendChild(info);
    // inner elements to outer elements
    profile.appendChild(img);
    info.appendChild(name);
    info.appendChild(title);
    info.appendChild(bioText);

    main.appendChild(cardHolder);

    // clear the input fields after submission
    input.forEach((inp) => {
       if(inp.type !== "submit") {
          inp.value = "";
       }
    });
});