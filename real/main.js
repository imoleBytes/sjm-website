// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  });
});

function filterGallery(category) {
  // Hide all content
  document.querySelectorAll(".gallery-category-content").forEach((el) => {
    el.classList.remove("active");
  });

  // Show selected content
  if (category === "all") {
    document.getElementById("all").classList.add("active");
  } else {
    document.getElementById(category).classList.add("active");
  }

  // Update active tab
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");
}

function expandImage(element) {
  const img = element.querySelector("img");
  const modal = document.createElement("div");
  modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                cursor: pointer;
            `;

  const expandedImg = document.createElement("img");
  expandedImg.src = img.src;
  expandedImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                border-radius: 12px;
                object-fit: contain;
            `;

  modal.appendChild(expandedImg);
  document.body.appendChild(modal);

  modal.addEventListener("click", () => modal.remove());
}

function expandVideo(element) {
  const video = element.querySelector("video");
  const modal = document.createElement("div");
  modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                cursor: pointer;
            `;

  const expandedVideo = document.createElement("video");
  expandedVideo.src = video.querySelector("source").src;
  expandedVideo.controls = true;
  expandedVideo.autoplay = true;
  expandedVideo.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                border-radius: 12px;
            `;

  modal.appendChild(expandedVideo);
  document.body.appendChild(modal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
}
