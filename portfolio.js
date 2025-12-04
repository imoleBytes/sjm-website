const images = [
  {
    url: "https://ik.imagekit.io/newpage/sjm/sjm%20print%2012.jpeg",
    category: "print",
  },
  {
    url: "https://ik.imagekit.io/newpage/sjm/sjm%20print%2016%20aloma.jpeg",
    category: "print",
  },
  {
    url: "https://ik.imagekit.io/newpage/sjm/sjm%20print6.jpeg",
    category: "print",
  },

  {
    url: "https://ik.imagekit.io/newpage/sjm/sjm%20print5.jpeg",
    category: "print",
  },
  // { url: "image4.jp", category: "installations"},

  // { url: "image6.jp", category: "video"},
  {
    url: "https://ik.imagekit.io/newpage/sjm/sjm%20print2.jpeg",
    category: "print",
  },
  {
    url: "https://ik.imagekit.io/newpage/sjm/sjm%20print10.jpeg",
    category: "print",
  },
  {
    url: "https://ik.imagekit.io/newpage/sjm/sjm%20print%2013.jpeg",
    category: "print",
  },

  {
    url: "https://ik.imagekit.io/newpage/sjm/sjm%20print%2011.jpeg",
    category: "print",
  },
  {
    url: "https://ik.imagekit.io/newpage/sjm/sjm%20print7.jpeg",
    category: "print",
  },
  {
    url: "https://ik.imagekit.io/newpage/sjm/sjm%20nin%20banner.jpeg",
    category: "print",
  },
  {
    url: "https://ik.imagekit.io/newpage/sjm/sjm%20exams.jpeg",
    category: "print",
  },
  {
    url: "https://ik.imagekit.io/newpage/sjm/sjm%20workspace.jpeg",
    category: "print",
  },
  {
    url: "https://ik.imagekit.io/newpage/sjm/sjm%20print3.jpeg",
    category: "print",
  },
  {
    url: "https://ik.imagekit.io/newpage/sjm/sjm%20print%2015.jpeg",
    category: "print",
  },
  {
    url: "https://ik.imagekit.io/newpage/sjm/sjm%20print%2014.jpeg",
    category: "print",
  },
  {
    url: "https://ik.imagekit.io/newpage/sjm/sjm-print1.jpeg",
    category: "print",
  },
  //     {
  //     url: "https://ik.imagekit.io/newpage/sjm/sjm%20print7.jpeg",
  //     category: "print",
  //   },
  //     {
  //     url: "https://ik.imagekit.io/newpage/sjm/sjm%20print7.jpeg",
  //     category: "print",
  //   },
  //     {
  //     url: "https://ik.imagekit.io/newpage/sjm/sjm%20print7.jpeg",
  //     category: "print",
  //   },
];

let cards = document.querySelector(".cards");
function allWorks(e) {
  cards.innerHTML = "";
  let btnp = document.querySelectorAll(".btnp button");
  btnp.forEach((btn) => {
    btn.classList.remove("activeBTN");
  });
  e.target.classList.add("activeBTN");
  images.forEach((element) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${element.url}" alt="${element.category}">`;
    cards.appendChild(card);
    // let image = document.createElement("img")
    // image.src = element.url
    // console.log(element.url)
  });
}
// allWorks();
images.forEach((element) => {
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<img src="${element.url}" alt="${element.category}">`;
  cards.appendChild(card);
});

function printWorks(e) {
  let btnp = document.querySelectorAll(".btnp button");
  btnp.forEach((btn) => {
    btn.classList.remove("activeBTN");
  });
  e.target.classList.add("activeBTN");
  let printImages = images.filter((element) => {
    return element.category === "print";
  });
  cards.innerHTML = "";
  printImages.forEach((element) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${element.url}" alt="${element.category}">`;
    cards.appendChild(card);
  });
}

function installationWorks(e) {
  let btnp = document.querySelectorAll(".btnp button");
  btnp.forEach((btn) => {
    btn.classList.remove("activeBTN");
  });
  e.target.classList.add("activeBTN");
  let InstallImages = images.filter((element) => {
    return element.category === "installations";
  });

  cards.innerHTML = "";
  InstallImages.forEach((element) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${element.url}" alt="${element.category}">`;
    cards.appendChild(card);
  });
}

function videoWorks(e) {
  let btnp = document.querySelectorAll(".btnp button");
  btnp.forEach((btn) => {
    btn.classList.remove("activeBTN");
  });
  e.target.classList.add("activeBTN");
  let videos = images.filter((element) => {
    return element.category === "video";
  });

  cards.innerHTML = "";
  videos.forEach((element) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${element.url}" alt="${element.category}">`;
    cards.appendChild(card);
  });
}
