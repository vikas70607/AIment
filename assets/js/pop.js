// Check if the popup has already been shown in this session
if (!sessionStorage.getItem('popupShown')) {
    setTimeout(function() {
        document.getElementById('popup-card').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Set a flag in sessionStorage to indicate the popup has been shown
        sessionStorage.setItem('popupShown', 'true');
    }, 5000); // 5 seconds delay
}

// Function to close popup
function closePopup() {
    document.getElementById('popup-card').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}