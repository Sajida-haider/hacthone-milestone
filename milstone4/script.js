window.onload = function() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'styles.css';
    document.head.appendChild(link);
}

document.addEventListener('DOMContentLoaded', function() {
    // Get elements by their IDs
    const generateBtn = document.getElementById('generateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const savePDFBtn = document.getElementById('savePDFBtn');
    const resumePreview = document.getElementById('resumePreview');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const degreeInput = document.getElementById('degree');
    const institutionInput = document.getElementById('institution');
    const skillsInput = document.getElementById('skills');
    const experienceInput = document.getElementById('experience');

    // Event listener for Generate Resume button
    generateBtn.addEventListener('click', function() {
        const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        const degree = degreeInput.value;
        const institution = institutionInput.value;
        const skills = skillsInput.value;
        const experience = experienceInput.value;

        // Populate the resume preview section
        document.getElementById('displayName').textContent = name;
        document.getElementById('displayEmail').textContent = email;
        document.getElementById('displayPhone').textContent = phone;
        document.getElementById('displayDegree').textContent = degree;
        document.getElementById('displayInstitution').textContent = institution;
        document.getElementById('displaySkills').textContent = skills;
        document.getElementById('displayExperience').textContent = experience;

        // Display the resume preview section
        resumePreview.style.display = 'block';
    });

    // Event listener for Clear Form button
    clearBtn.addEventListener('click', function() {
        document.getElementById('resumeForm').reset();
        resumePreview.style.display = 'none';
    });

    // Event listener for Save as PDF button (uses html2pdf.js library)
    savePDFBtn.addEventListener('click', function() {
        if (resumePreview.style.display === 'none') {
            alert('Please generate the resume first.');
        } else {
            const options = {
                filename: 'my_resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(resumePreview).set(options).save();
        }
    });
});
