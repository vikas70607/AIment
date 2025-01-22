document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Collect form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        budget: document.getElementById("budget").value,
        project: document.getElementById("project").value
    };

    // Define the webhook URL
    const webhookUrl = "https://your-webhook-url.com";

    // Send form data as JSON to the webhook
    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            alert("Form submitted successfully!");
        } else {
            alert("There was an issue submitting the form.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    });
});
