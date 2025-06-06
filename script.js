function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Contact Form Submission Simulation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formStatus').innerText = "Sending...";
  setTimeout(() => {
    document.getElementById('formStatus').innerText = "Message sent successfully!";
    this.reset();
  }, 1000);
});

// Dynamic destination cards
const destinations = [
  "Paris", "Tokyo", "New York", "Sydney", "Cairo", "Rome", "Dubai", "Cape Town",
  "Bali", "Santorini", "Reykjavik", "Toronto", "Barcelona", "Seoul", "Singapore"
];
const destinationGrid = document.querySelector('.destination-grid');
for (let i = 0; i < 30; i++) {
  const city = destinations[i % destinations.length];
  const div = document.createElement('div');
  div.innerHTML = `<h3>${city}</h3><p>Explore the beautiful sights of ${city}.</p>`;
  destinationGrid.appendChild(div);
}

// Populate gallery with placeholder images
const galleryGrid = document.querySelector('.gallery-grid');
for (let i = 1; i <= 50; i++) {
  const img = document.createElement('img');
  img.src = `https://source.unsplash.com/300x200/?travel,place,${i}`;
  galleryGrid.appendChild(img);
}

// Add blog posts dynamically
const blogList = document.querySelector('.blog-list');
for (let i = 1; i <= 20; i++) {
  const card = document.createElement('div');
  card.className = 'blog-card';
  card.innerHTML = `<h3>Adventure #${i}</h3><p>Join us as we travel to a new destination filled with wonder and mystery.</p>`;
  blogList.appendChild(card);
}
// Sample Events
const events = [
  { title: "Bali Yoga Retreat", date: "Aug 12, 2025" },
  { title: "Swiss Hiking Tour", date: "Sep 5, 2025" },
  { title: "Tokyo Lantern Festival", date: "Oct 15, 2025" },
  { title: "Sahara Desert Camping", date: "Nov 20, 2025" },
  { title: "New York Winter Bash", date: "Dec 31, 2025" },
];

// Populate Events Carousel
const carousel = document.getElementById('eventCarousel');
events.forEach(event => {
  const card = document.createElement('div');
  card.className = 'event-card';
  card.innerHTML = <h4>${event.title}</h4><p>${event.date}</p>;
  carousel.appendChild(card);
});

// Carousel Scroll Buttons
function scrollCarousel(direction) {
  const scrollAmount = 300;
  carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
