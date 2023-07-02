// This is optional, but you can add some interactivity to the button with javascript

const heroButton = document.querySelector(".hero-button");

heroButton.addEventListener("click", function() {
  alert("You clicked the button!");
});

// This is optional, but you can add some interactivity to the feature cards with javascript

const featureCards = document.querySelectorAll(".feature-card");

for (let card of featureCards) {
   card.addEventListener("mouseover", function() {
     card.style.transform = "scale(1.05)";
     card.style.transition = "all .3s";
   });

   card.addEventListener("mouseout", function() {
     card.style.transform = "scale(1)";
     card.style.transition = "all .3s";
   });
}

// This is optional, but you can add some interactivity to the testimonials slider with javascript

const testimonialCards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

function showTestimonial(index) {
   for (let card of testimonialCards) {
     card.classList.remove("active");
     card.classList.add("inactive");
   }
   
   testimonialCards[index].classList.remove("inactive");
   testimonialCards[index].classList.add("active");
}

function prevTestimonial() {
   currentIndex--;
   
   if (currentIndex < 0) {
     currentIndex = testimonialCards.length -1; 
   }
   
   showTestimonial(currentIndex);
}

function nextTestimonial() {
   currentIndex++;
   
   if (currentIndex > testimonialCards.length -1) {
     currentIndex =0; 
   }
   
   showTestimonial(currentIndex);
}

prevBtn.addEventListener("click", prevTestimonial);
nextBtn.addEventListener("click", nextTestimonial);

// This is optional, but you can add some interactivity to the about button with javascript

const aboutButton = document.querySelector(".about-button");

aboutButton.addEventListener("click", function() {
   alert("You clicked the button!");
});


// This is optional, but you can add some interactivity to the footer links with javascript

const footerLinks = document.querySelectorAll(".footer-link");

for (let link of footerLinks) {
   link.addEventListener("mouseover", function() {
     link.style.color = "yellow";
     link.style.transition = "all .3s";
   });

   link.addEventListener("mouseout", function() {
     link.style.color = "white";
     link.style.transition = "all .3s";
   });
}
