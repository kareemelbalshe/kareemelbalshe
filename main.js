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
    strings: ['frontend developer', 'Programmer', 'Designer', 'Problem Solver'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let skills = [
    {
        id: 1,
        name: "HTML",
    },
    {
        id: 2,
        name: "CSS",
    },
    {
        id: 3,
        name: "JS",
    },
    {
        id: 4,
        name: "ReactJS",
    },
    {
        id: 6,
        name: "Noodjs",
    },
    {
        id: 7,
        name: "Redux",
    },
    {
        id: 8,
        name: "Express",
    },
    {
        id: 9,
        name: "TypeScript",
    },
    {
        id: 10,
        name: "MongoDB",
    },
    {
        id: 11,
        name: "Photoshop",
    },
    {
        id: 12,
        name: "RESTful API",
    },
    {
        id: 13,
        name: "C++",
        value: 80
    },
    {
        id: 14,
        name: "Data Structures and Algorithms",
        value: 80
    },
    {
        id: 15,
        name: "Github",
        value: 85
    },
    {
        id: 16,
        name: "Docker",
        value: 85
    },
    {
        id: 17,
        name: "Redis",
        value: 50
    },
    {
        id: 18,
        name: "Bootstrap",
        value: 70
    },
    {
        id: 19,
        name: "Tailwind CSS",
        value: 70
    },
    {
        id: 20,
        name: "soft skills",
        value: 85
    },
    {
        id: 21,
        name: "OOP",
        value: 70
    },
    {
        id: 22,
        name: "problemSolving",
        value: 70
    },
    {
        id: 23,
        name: "JSON",
        value: 70
    },
    {
        id: 24,
        name: "Java",
        value: 70
    },
]

let skill = document.getElementById("Skills")
skills.map((s) => {
    skill.innerHTML +=
        `<div class="card" >
            <div class="text">${s.id} ${s.name}</div>
</div>`
})

