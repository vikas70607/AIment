setTimeout(function() {
    document.getElementById('popup-card').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

    document.body.style.overflow = 'hidden';
}, 10000); // 15 seconds delay

// Function to close popup
function closePopup() {
    document.getElementById('popup-card').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';

    document.body.style.overflow = 'auto';
}