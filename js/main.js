const studentInfo = document.getElementById('student-info');
const imageContainer = document.getElementById('image-container');
const blurBackground = document.querySelector('.blur-background');

// student info
studentInfo.textContent = 'Student ID: 200555982 | Name: Gurjot Singh';

// API key and search query
const accessKey = '_EoiBf3ssBbOiSXP922an_qP5hZkF0RFFYMKsidOzu0';
const searchQuery = 'nature'; // Change this to the desired search query

// Fetch random image from Unsplash
fetch(`https://api.unsplash.com/photos/random?query=${searchQuery}&client_id=${accessKey}`)
    .then(response => response.json())
    .then(data => {
        const imageUrl = data.urls.regular;
        const photographerName = data.user.name;
        const photographerLink = data.user.links.html;

        // Set foreground image
        imageContainer.innerHTML = `
            <img src="${imageUrl}" alt="${searchQuery}">
            <p>Photo by <a href="${photographerLink}" target="_blank">${photographerName}</a> on Unsplash</p>
        `;

        // Set blurred background
        document.body.style.backgroundImage = `url(${imageUrl})`;
        blurBackground.style.backgroundImage = `url(${imageUrl})`;
    })
    .catch(error => {
        console.error('Error fetching image data:', error);
    });