document.getElementById('second-section').addEventListener('click', function(event) {
    const textSection = document.getElementById('text-section');
    
    // Chakra center coordinates and names
    const chakras = [
        { name: "Crown", x: 365, y: 106, description: "The Crown Chakra represents spiritual connection and enlightenment."},
        { name: "Third Eye", x: 365, y: 197, description: "The Third Eye Chakra represents intuition and wisdom." },
        { name: "Throat", x: 365, y: 283, description: "The Throat Chakra is associated with communication and self-expression." },
        { name: "Heart", x: 365, y: 365, description: "The Heart Chakra represents love, compassion, and emotional balance." },
        { name: "Solar Plexus", x: 365, y: 444, description: "The Solar Plexus Chakra is connected to personal power, self-confidence, and will." },
        { name: "Sacral", x: 365, y: 515, description: "The Sacral Chakra is related to creativity, sexuality, and emotional health." },
        { name: "Root", x: 365, y: 586, description: "The Root Chakra represents grounding, security, and survival." },
    ];
    
    // Range for clickable area
    const range = 50;

    // Get the X and Y coordinates of the mouse click
    const xCoordinate = event.clientX;
    const yCoordinate = event.clientY;

    // Check if the click is within the defined range of any chakra
    let chakraClicked = false;
    for (let chakra of chakras) {
        if (Math.abs(xCoordinate - chakra.x) <= range && Math.abs(yCoordinate - chakra.y) <= range) {
            textSection.innerHTML = `
            <h1 class="${chakra.name.toLowerCase().replace(/\s+/g, '-')}-chakra">${chakra.name} Chakra</h1>
            <p>${chakra.description}</p>
            <p>Practice meditations to balance your ${chakra.name} Chakra and enhance your well-being.</p>
        `;
/*
            // Add Start Meditation button **only for Crown Chakra**
            if (chakra.name === "Crown") {
                textSection.innerHTML += `
                    <button id="start-meditation" style="padding: 10px 20px; font-size: 16px; margin-top: 10px; cursor: pointer;">
                        Start ${chakra.name} Meditation
                    </button>
                `;

                document.getElementById("start-meditation").addEventListener("click", function() {
                    window.location.href = "crown-meditation.html"; // Redirects to Crown Meditation page
                });
            }
            */

            chakraClicked = true;
            break;
        }
    }

    if (!chakraClicked) {
        // Default content for clicks outside the chakras
        textSection.innerHTML = `
            <h2>Discover Your Chakras</h2>
            <p>Each chakra is a powerful energy center that influences your physical and emotional well-being.</p>
            <p>Click on a chakra to learn more about its unique energy and meditative practices!</p>
        `;
    }
});

// Zen Fusion Button Functionality
document.getElementById('zen-fusion-btn').addEventListener('click', function() {
    window.location.href = "zen.html"; // Change to the actual HTML file name
});
