let form = document.querySelector("form");
let input = document.querySelectorAll("input[type='text']");
let cardHolder = document.querySelector(".card-holder");
let card = document.querySelector(".card");


let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function(para){
  gsap.to(".cursor", {
    x: para.x,
    y: para.y,
    ease: "back.out"
  })
});
card.addEventListener("mousemove", function(para){
   cursor.style.backgroundColor = "transparent";
   cursor.style.border = "1px solid #fff";
    cursor.style.width = "80px";
    cursor.style.height = "80px";
})
card.addEventListener("mouseleave", function() {
   cursor.style.backgroundColor = "crimson";
   cursor.style.border = "none";
   cursor.style.width = "20px";
   cursor.style.height = "20px";
});

form.addEventListener("mouseover", function() {
   cursor.style.backgroundColor = "transparent";
   cursor.style.border = "1px solid #fff";
    cursor.style.width = "80px";
    cursor.style.height = "80px";
    cursor.style.zIndex = "0";
});
form.addEventListener("mouseleave", function() {
   cursor.style.backgroundColor = "crimson";
   cursor.style.border = "none";
   cursor.style.width = "20px";
   cursor.style.height = "20px";
    cursor.style.zIndex = "4";
});

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // create elements and get a values from inputs and assign them with class list for styling
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
    card.appendChild(profile);
    card.appendChild(info);
    // inner elements to outer elements
    profile.appendChild(img);
    info.appendChild(name);
    info.appendChild(title);
    info.appendChild(bioText);

    cardHolder.appendChild(card);

    // clear the input fields after submission
    input.forEach((inp) => {
       if(inp.type !== "submit") {
          inp.value = "";
       }
    });
});