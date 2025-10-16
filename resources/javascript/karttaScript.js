let map;
let markers = [];

function initMap() {
    // Initialize map centered on Rovaniemi (coordinates: 66.5039, 25.7294)
    map = L.map('map').setView([66.5039, 25.7294], 10); // Zoom level 10 for city view

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Example attractions with coordinates and details
    const attractions = [
        {
            position: [66.5436, 25.7041], // Santa Claus Village
            title: "Santa Claus Village",
            category: "Family",
            description: "Meet Santa, cross the Arctic Circle, and enjoy festive activities."
        },
        {
            position: [66.5029, 25.7333], // Arktikum Museum
            title: "Arktikum Museum",
            category: "Cultural",
            description: "Explore Lapland’s history and Arctic science."
        },
        {
            position: [66.5126, 25.7193], // Ounasvaara Hill
            title: "Ounasvaara Hill",
            category: "Adventure",
            description: "Skiing, hiking, and stunning views year-round."
        }
    ];

    // Add markers for each attraction
    attractions.forEach(attraction => {
        const marker = L.marker(attraction.position)
            .addTo(map)
            .bindPopup(`<h3>${attraction.title}</h3><p>${attraction.description}</p><p>Category: ${attraction.category}</p>`);

        // Store marker with category for filtering
        marker.category = attraction.category;
        markers.push(marker);
    });
}

// Filter markers based on category
function filterMarkers() {
    const selectedCategory = document.getElementById('categoryFilter').value;
    markers.forEach(marker => {
        if (selectedCategory === 'All' || marker.category === selectedCategory) {
            marker.addTo(map); // Show marker
        } else {
            map.removeLayer(marker); // Hide marker
        }
    });
}

// Initialize the map when the page loads
initMap();

// Make filterMarkers globally accessible for HTML onchange
window.filterMarkers = filterMarkers;