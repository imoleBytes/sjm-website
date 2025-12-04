const images = [
    { url: "image1.jp", category: "print"},
    { url: "image2.jp", category: "installations"},
    { url: "image3.jp", category: "print"},
    { url: "image4.jp", category: "installations"},
    { url: "image5.jp", category: "print"},
    { url: "image6.jp", category: "video"},
    { url: "image7.jp", category: "installations"},
    { url: "image8.jp", category: "print"},
    { url: "image9.jp", category: "video"},
];

let cards = document.querySelector(".cards")
function allWorks(e) {
    cards.innerHTML = ""
    let btnp = document.querySelectorAll(".btnp button")
    btnp.forEach(btn => {
    btn.classList.remove("activeBTN");
   });
   e.target.classList.add("activeBTN")
    images.forEach(element => {
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `<img src="${element.url}" alt="${element.category}">`
        cards.appendChild(card)
        // let image = document.createElement("img")
        // image.src = element.url
        // console.log(element.url)    
    });
}
// allWorks();
  images.forEach(element => {
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `<img src="${element.url}" alt="${element.category}">`
        cards.appendChild(card)  
    });

function printWorks(e) {
   let btnp = document.querySelectorAll(".btnp button")
    btnp.forEach(btn => {
    btn.classList.remove("activeBTN");
   });
   e.target.classList.add("activeBTN")
   let printImages = images.filter((element)=>{
    return element.category === "print";
}) 
       cards.innerHTML = ""
       printImages.forEach(element => {
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `<img src="${element.url}" alt="${element.category}">`
        cards.appendChild(card) 
    }); 
}

function installationWorks(e) {
      let btnp = document.querySelectorAll(".btnp button")
    btnp.forEach(btn => {
    btn.classList.remove("activeBTN");
   });
   e.target.classList.add("activeBTN")
     let InstallImages = images.filter((element)=>{
    return element.category === "installations";
}) 

cards.innerHTML = ""
       InstallImages.forEach(element => {
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `<img src="${element.url}" alt="${element.category}">`
        cards.appendChild(card) 
    }); 
}


function videoWorks(e) {
      let btnp = document.querySelectorAll(".btnp button")
    btnp.forEach(btn => {
    btn.classList.remove("activeBTN");
   });
   e.target.classList.add("activeBTN")
     let videos = images.filter((element)=>{
    return element.category === "video";
}) 

cards.innerHTML = ""
        videos.forEach(element => {
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `<img src="${element.url}" alt="${element.category}">`
        cards.appendChild(card) 
    }); 
}
