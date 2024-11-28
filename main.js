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

let skills = [
    {
        id: 1,
        name: "ReactJS",
    },
    {
        id: 2,
        name: "JavaScript",
    },
    {
        id: 3,
        name: "TypeScript",
    },
    {
        id: 4,
        name: "NodeJS",
    },
    {
        id: 5,
        name: "NextJS",
    },
    {
        id: 6,
        name: "Redux",
    },
    {
        id: 7,
        name: "Express",
    },
    {
        id: 8,
        name: "MongoDB",
    },
    {
        id: 9,
        name: "HTML",
    },
    {
        id: 10,
        name: "CSS",
    },
    {
        id: 11,
        name: "Tailwind CSS",
    },
    {
        id: 12,
        name: "Vite",
    },
    {
        id: 13,
        name: "RESTful API",
    },
    {
        id: 14,
        name: "Data Structures and Algorithms",
        value: 80
    },
    {
        id: 15,
        name: "Git",
    },
    {
        id: 16,
        name: "Github",
    },
    {
        id: 17,
        name: "Docker",
        value: 85
    },
    {
        id: 18,
        name: "Redis",
        value: 50
    },
    {
        id: 19,
        name: "Bootstrap",
        value: 70
    },
    {
        id: 20,
        name: "Postman",
    },
    {
        id: 21,
        name: "OOP",
        value: 70
    },
    {
        id: 22,
        name: "JSON",
        value: 70
    },
    {
        id: 23,
        name: "C++",
        value: 80
    },
    {
        id: 24,
        name: "Java",
        value: 70
    },
    {
        id: 25,
        name: "PhotoShop",
    },
]

let skill = document.getElementById("Skills")
skills.map((s) => {
    skill.innerHTML +=
        `<div class="card" >
            <div class="text">(${s.id})${" "} ${s.name}</div>
        </div>`
})
let soft_skills = [
    {
        id: 1,
        name: "Critical Thinking and Problem-Solving"
    },
    {
        id: 2,
        name: "Effective Communication"
    },
    {
        id: 3,
        name: "Teamwork and Collaboration"
    },
    {
        id: 4,
        name: "Time Management and Organization"
    },
    {
        id: 5,
        name: "Adaptability and Flexibility"
    },
    {
        id: 6,
        name: "Continuous Learning"
    },
    {
        id: 7,
        name: "Creativity and Innovation"
    },
    {
        id: 8,
        name: "Leadership"
    },
    {
        id: 9,
        name: "Strategic Thinking"
    },
    {
        id: 10,
        name: "Attention to Detail"
    },
    {
        id: 11,
        name: "Self-awareness and Emotional Intelligence"
    },
    {
        id: 12,
        name: "Negotiation and Persuasion"
    },
    {
        id: 13,
        name: "Resourcefulness and Organizational Skills"
    },
]
let soft_skill = document.getElementById("SoftSkills")
soft_skills.map((s) => {
    soft_skill.innerHTML +=
        `<div class="card" >
            <div class="text">(${s.id})${" "} ${s.name}</div>
        </div>`
})

