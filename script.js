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

function toggleDarkMode() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

// Load dark mode preference on page load
window.onload = function () {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
    document.getElementById('toggleDark').checked = true;
  }
};
