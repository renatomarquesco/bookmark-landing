let hamb = document.querySelectorAll(".hamburger");
let navbarOpen = document.getElementById("navbar-open")
let navLarge = document.getElementById("nav")
let featureItems = document.querySelectorAll(".features ul li");
let divFeat = document.querySelectorAll(".div-feat");
let illust = document.getElementById("illust");
let textFeat = document.getElementById("text-feat")
let titleFeat = document.getElementById("title-feat");
let pics = ["./images/illustration-features-tab-1.svg", "./images/illustration-features-tab-2.svg", "./images/illustration-features-tab-3.svg"]
let h2s = ["Bookmark in one click", "Intelligent search", "Share your bookmarks"]
let text = ["Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.", 
            "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.", 
            "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."]

hamb.forEach((btn) => {
    btn.addEventListener("click", function () {
        navbarOpen.classList.toggle("margin-zero");
        nav.classList.toggle("disappear")

    })
})
// change color of features list and the div the usr sees
function changeList() {
    for (let i = 0; i < featureItems.length; i++) {
        featureItems[i].addEventListener("click", function () {
            for (let j = 0; j < featureItems.length; j++) {
                featureItems[j].classList.remove("clicked");
            }
            illust.setAttribute("src", pics[i])
            if (i == 1 || i == 2) {
                illust.style.top = "0%"
            } else {
                illust.style.top = "23%"
            }
            featureItems[i].classList.toggle("clicked");
            textFeat.innerHTML = text[i];
            titleFeat.innerHTML = h2s[i];
            console.log(i);
        })
    }
}
document.querySelectorAll(".arrow").forEach((btn) => {
    btn.addEventListener("click", function () {
        let heightR = btn.parentElement.nextElementSibling.offsetHeight;
        if(btn.parentElement.parentElement.style.height == "60px" || btn.parentElement.parentElement.style.height == ""  ){
            btn.parentElement.parentElement.style.height = heightR + 60 + "px"; 
        }
        else{
            btn.parentElement.parentElement.style.height = "60px"
        }
        
        btn.classList.toggle("rotate-arrow")
        btn.firstElementChild.classList.toggle("stroke-red")
    })
})

let subs = document.getElementById("subs");
subs.addEventListener("invalid", function (event) {
    event.preventDefault();
    document.getElementById("error").classList.remove("error")
    document.getElementById("error").classList.add("appear-error");
    document.querySelector(".img-error").style.display = "block"
})

changeList();
