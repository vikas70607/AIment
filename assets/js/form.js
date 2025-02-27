document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('multiStepForm');
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const nextStep1 = document.getElementById('nextStep1');
    const prevStep2 = document.getElementById('prevStep2');
    const progressCircles = document.querySelectorAll('.circle');
    const submit = document.getElementById('submit');

    function changeCircle(currentStep) {
        progressCircles.forEach(circle => {
            circle.classList.remove('active', 'completed');
            if (circle.dataset.step < currentStep) {
                circle.classList.add('completed');
            } else if (circle.dataset.step == currentStep) {
                circle.classList.add('active');
            }
        });
    }

    nextStep1.addEventListener('click', function () {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        if (nameInput.value.trim() && emailInput.value.trim()) {
            step1.classList.remove('active');
            step2.classList.add('active');
            changeCircle(2);
        } else {
            alert('Please fill in both name and email');
        }
    });

    prevStep2.addEventListener('click', function () {
        step2.classList.remove('active');
        step1.classList.add('active');
        changeCircle(1);
    });

    progressCircles.forEach(circle => {
        circle.addEventListener('click', function () {
            const step = this.dataset.step;
            if (step == 1) {
                step1.classList.add('active');
                step2.classList.remove('active');
                changeCircle(1);
            } else if (step == 2) {
                step2.classList.add('active');
                step1.classList.remove('active');
                changeCircle(2);
            }
        });
    });

    submit.addEventListener('click', async function (e) {
        e.preventDefault(); 
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const budget = document.getElementById('budget').value.trim();
        const project = document.getElementById('project').value.trim();
        const fileInput = document.getElementById('file');
        
        if (name && email && budget && project) {
            const formData = new FormData();
            formData.append('Name', name);
            formData.append('Email', email);
            formData.append('Budget', budget);
            formData.append('Desc', project);
    
            // Only append the file if one was selected
            if (fileInput.files.length > 0) {
                formData.append('Files', fileInput.files[0], fileInput.files[0].name);
            }
    
            try {
                const response = await fetch('https://hook.eu2.make.com/t6f6mn2kvdvue83acao47cfinn2va269', {
                    method: 'POST',
                    body: formData
                    // Don't set Content-Type header, browser will set it automatically with boundary
                });
                console.log('Response:', response);
                if (response.ok) {
                    try {
                        const result = await response.json();
                        console.log('Response:', result);
                        alert('Form submitted successfully!');
                        setTimeout(() => {
                            window.location.reload();
                        }, 3000);
                    } catch (jsonError) {
                        // Handle case where response is not JSON
                        console.log('Response received but not JSON format');
                        alert('Form submitted successfully!');
                        setTimeout(() => {
                            window.location.reload();
                        }, 3000);
                    }
                } else {
                    console.error('Error response:', response.status, response.statusText);
                    alert('Failed to submit the form. Please try again.');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('An error occurred while submitting the form.');
            }
        } else {
            alert('Please fill in all required fields.');
        }
    });
});
