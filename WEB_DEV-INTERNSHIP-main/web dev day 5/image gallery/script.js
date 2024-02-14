// Image URLs for the gallery
const imageUrls = [
    'https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.jpg?s=1024x1024&w=is&k=20&c=mTABddPRSU1r_hCBpknMjJbCIrJAicjjXGSU42rx-YI=',
    'https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772243_1280.jpg',
    
    // Add more image URLs as needed
];

let currentIndex = 0;
const galleryImage = document.getElementById('galleryImage');

// Function to change the displayed image
function changeImage(direction) {
    currentIndex += direction;

    // Wrap around to the first or last image if needed
    if (currentIndex < 0) {
        currentIndex = imageUrls.length - 1;
    } else if (currentIndex >= imageUrls.length) {
        currentIndex = 0;
    }

    // Update the image source
    galleryImage.src = imageUrls[currentIndex];
}

// Display the initial image
changeImage(0);
