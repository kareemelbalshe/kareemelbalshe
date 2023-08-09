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
        value: 95
    },
    {
        id: 2,
        name: "CSS",
        value: 90
    },
    {
        id: 3,
        name: "JS",
        value: 80
    },
    {
        id: 4,
        name: "ReactJS",
        value: 75
    },
    {
        id: 5,
        name: "C++",
        value: 80
    },
    {
        id: 6,
        name: "Github",
        value: 85
    },
    {
        id: 7,
        name: "Noodjs",
        value: 60
    },
    {
        id: 8,
        name: "Typescript",
        value: 50
    },
    {
        id: 9,
        name: "Bootstrap",
        value: 70
    },
    {
        id: 10,
        name: "soft skills",
        value: 85
    },
    {
        id: 11,
        name: "Photoshop",
        value: 70
    },
    {
        id: 12,
        name: "problemSolving",
        value: 70
    },
    {
        id: 13,
        name: "Java",
        value: 70
    },
]

let skill = document.getElementById("Skills")
skills.map((s) => {
    skill.innerHTML += `<div class="card" >
    <div class="box">
        <div class="percent">
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle id="c${s.id}" cx="70" cy="70" r="70"></circle>
            </svg>
            <div class="number">
                <h2>${s.value}<span>%</span></h2>
            </div>
            <div class="text">${s.name}</div>
        </div>
    </div>
</div>`
    let id = "c" + s.id
    document.getElementById(id).style.strokeDashoffset = `calc(440 - (440 * ${s.value}) /100)`
    document.getElementById(id).style.stroke = "#0ef"
})

