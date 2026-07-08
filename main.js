window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle
        ('window-scroll', window.scrollY > 0);
})
window.addEventListener('load', () => {
    document.querySelector('header').classList.toggle
        ('window-scroll', window.scrollY > 0);
})


const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');


window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        menuBtn.style.display = "none"
        closeBtn.style.display = "none"
        menu.style.display = "flex"
    }
    else {
        menu.style.display = 'none';
        closeBtn.style.display = 'none';
        menuBtn.style.display = 'inline-block';
    }
})
menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})

const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav);

const typed = new Typed(".multText", {
    strings: ['Frontend Developer', 'MERN Stack Developer', 'Programmer', 'Designer', 'Problem Solver'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const technicalSkills = {
    Frontend: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "Redux", "HTML", "CSS"],
    Backend: ["Node.js", "Express.js", "ASP.NET Core", "Prisma", "Entity Framework", "GraphQL", "Redis"],
    Databases: ["MongoDB", "PostgreSQL", "SQL Server", "Firebase"],
    Tools: ["Git", "GitHub", "Docker", "Vite", "Linux", "Cloudinary"],
    Concepts: ["OOP", "Data Structures & Algorithms", "RESTful APIs", "Clean Architecture"]
};

const softSkills = [
    "Critical Thinking & Problem-Solving",
    "Effective Communication",
    "Teamwork & Collaboration",
    "Time Management & Organization",
    "Adaptability & Flexibility",
    "Continuous Learning",
    "Creativity & Innovation",
    "Leadership",
    "Strategic Thinking",
    "Attention to Detail",
    "Self-awareness & Emotional Intelligence",
    "Negotiation & Persuasion",
    "Resourcefulness"
];

// Technical Skills Render
const skillsContainer = document.getElementById("Skills");
if (skillsContainer) {
    skillsContainer.innerHTML = "";
    const categoryIcons = {
        Frontend: "fas fa-desktop",
        Backend: "fas fa-server",
        Databases: "fas fa-database",
        Tools: "fas fa-tools",
        Concepts: "fas fa-brain"
    };

    for (const [category, items] of Object.entries(technicalSkills)) {
        const icon = categoryIcons[category] || "fas fa-code";
        const tagsHtml = items.map(item => `<span class="skill-tag">${item}</span>`).join("");
        skillsContainer.innerHTML += `
            <div class="skill-category-card">
                <h3><i class="${icon}"></i> ${category}</h3>
                <div class="skills-tags-container">
                    ${tagsHtml}
                </div>
            </div>
        `;
    }
}

// Soft Skills Render
const softSkillsContainer = document.getElementById("SoftSkills");
if (softSkillsContainer) {
    softSkillsContainer.innerHTML = "";
    const tagsHtml = softSkills.map(item => `<span class="skill-tag soft">${item}</span>`).join("");
    softSkillsContainer.innerHTML = `
        <div class="skill-category-card soft-skills-card">
            <h3><i class="fas fa-users"></i> Core Professional Attributes</h3>
            <div class="skills-tags-container">
                ${tagsHtml}
            </div>
        </div>
    `;
}

