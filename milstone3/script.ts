declare var html2pdf: any;

document.addEventListener('DOMContentLoaded', function() {
    // Get elements by their IDs
    const generateBtn = document.getElementById('generateBtn') as HTMLButtonElement;
    const clearBtn = document.getElementById('clearBtn') as HTMLButtonElement;
    const savePDFBtn = document.getElementById('savePDFBtn') as HTMLButtonElement;
    const resumePreview = document.getElementById('resumePreview') as HTMLElement;

    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const degreeInput = document.getElementById('degree') as HTMLInputElement;
    const institutionInput = document.getElementById('institution') as HTMLInputElement;
    const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
    const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;

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
        document.getElementById('displayName')!.textContent = name;
        document.getElementById('displayEmail')!.textContent = email;
        document.getElementById('displayPhone')!.textContent = phone;
        document.getElementById('displayDegree')!.textContent = degree;
        document.getElementById('displayInstitution')!.textContent = institution;
        document.getElementById('displaySkills')!.textContent = skills;
        document.getElementById('displayExperience')!.textContent = experience;

        // Display the resume preview section
        resumePreview.style.display = 'block';
    });

    // Event listener for Clear Form button
    clearBtn.addEventListener('click', function() {
        (document.getElementById('resumeForm') as HTMLFormElement).reset();
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
