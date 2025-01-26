const python_skill = document.getElementById('python-skill');
const html_skill = document.getElementById('html-skill');
const js_skill = document.getElementById('js-skill');
const carousel_wrapper = document.querySelector('.carousel-wrapper')
const skills_ctr = document.getElementById('skills-ctr');
const skills_card = document.getElementById('skill-card');

// Track which skill is currently selected
let currentSkill = null;

// Function to reset scale for all skills except the clicked one
function resetScaleExcept(clickedSkill) {
    // Only reset scale for skills that are not clicked
    if (clickedSkill !== python_skill) python_skill.style.transform = 'scale(1)';
    if (clickedSkill !== html_skill) html_skill.style.transform = 'scale(1)';
    if (clickedSkill !== js_skill) js_skill.style.transform = 'scale(1)';
}

// Function to toggle visibility based on current skill
function toggleSkillsContent(skill) {
    if (currentSkill === skill) {
        // If the same skill is clicked, hide the content
        skills_ctr.style.display = 'none';
        currentSkill = null;  // Reset current skill to null
        carousel_wrapper.style.borderRadius = '10px'
    } else {
        // Show the content and update current skill
        skills_ctr.style.display = 'flex';
        currentSkill = skill;
        carousel_wrapper.style.borderRadius = '10px 10px 0 0 '

    }
}

// Function to toggle scale for clicked skill
function toggleScale(skillElement) {
    if (skillElement.style.transform === 'scale(1.2)') {
        skillElement.style.transform = 'scale(1)';
    } else {
        skillElement.style.transform = 'scale(1.2)';
    }
}

// Python skill click event
python_skill.addEventListener('click', () => {
    // Toggle visibility of content based on current skill
    toggleSkillsContent('python');

    // Reset scale for all skills except the clicked one
    resetScaleExcept(python_skill);

    // Apply scale for the clicked skill
    toggleScale(python_skill);

    // Add content
    skills_card.innerHTML = `
    <h2>Python</h2>
     `
});

// HTML skill click event
html_skill.addEventListener('click', () => {
    // Toggle visibility of content based on current skill
    toggleSkillsContent('html');

    // Reset scale for all skills except the clicked one
    resetScaleExcept(html_skill);

    // Apply scale for the clicked skill
    toggleScale(html_skill);

    // Add content
    skills_card.innerHTML = `
    <h2>HTML5</h2>
     `
});

// JS skill click event
js_skill.addEventListener('click', () => {
    // Toggle visibility of content based on current skill
    toggleSkillsContent('js');

    // Reset scale for all skills except the clicked one
    resetScaleExcept(js_skill);

    // Apply scale for the clicked skill
    toggleScale(js_skill);

    // Add content
    skills_card.innerHTML = `
    <h2>JavaScript</h2>
     `
});
