declare var html2pdf: any;

document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn') as HTMLButtonElement;
    const clearBtn = document.getElementById('clearBtn') as HTMLButtonElement;
    const resumePreview = document.getElementById('resumePreview') as HTMLElement;

    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const degreeInput = document.getElementById('degree') as HTMLInputElement;
    const institutionInput = document.getElementById('institution') as HTMLInputElement;
    const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
    const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;

    resumePreview.style.display = 'none'; // Default hidden

    generateBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const degree = degreeInput.value.trim();
        const institution = institutionInput.value.trim();
        const skills = skillsInput.value.trim();
        const experience = experienceInput.value.trim();

        if (!name || !email || !phone || !degree || !institution || !skills || !experience) {
            alert('Please fill all fields before generating the resume.');
            return;
        }

        document.getElementById('displayName')!.textContent = name;
        document.getElementById('displayEmail')!.textContent = email;
        document.getElementById('displayPhone')!.textContent = phone;
        document.getElementById('displayDegree')!.textContent = degree;
        document.getElementById('displayInstitution')!.textContent = institution;
        document.getElementById('displaySkills')!.textContent = skills;
        document.getElementById('displayExperience')!.textContent = experience;

        resumePreview.style.display = 'block'; // Show preview
    });

    clearBtn.addEventListener('click', () => {
        (document.getElementById('resumeForm') as HTMLFormElement).reset();
        resumePreview.style.display = 'none'; // Hide preview
    });
});
