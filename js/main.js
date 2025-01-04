// Navbar and Mobile Menu
const navbar = document.querySelector("#header");
const mobileMenu = document.querySelector(".mobile-menu");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

// Courses Section
const courses = document.querySelector('#class-btns');
const classesImg = document.querySelector("#featuresImg");
const classesH2 = document.querySelector("#featuresH2");
const classesP = document.querySelector("#featuresP");
const buttons = document.querySelectorAll(".classes-btn");

// Scroll Links
const links = document.getElementsByClassName('scrool');

// Change Classes Content
function changeYoga() {
    classesImg.src = "./images/yoga.jpg";
    classesH2.textContent = "Why are your Yoga?";
    classesP.textContent = "Yoga Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quod perspiciatis vero mollitia temporibus placeat enim! Veritatis doloremque obcaecati placeat asperiores soluta, vel voluptatem laudantium ullam possimus. Quisquam, eum aliquid?";
}

function changeGroup() {
    classesImg.src = "./images/group.webp";
    classesH2.textContent = "Why are your Group?";
    classesP.textContent = "Group Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quod perspiciatis vero mollitia temporibus placeat enim! Veritatis doloremque obcaecati placeat asperiores soluta, vel voluptatem laudantium ullam possimus. Quisquam, eum aliquid?";
}

function changeSolo() {
    classesImg.src = "./images/solo.jpg";
    classesH2.textContent = "Why are your Solo?";
    classesP.textContent = "Solo Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quod perspiciatis vero mollitia temporibus placeat enim! Veritatis doloremque obcaecati placeat asperiores soluta, vel voluptatem laudantium ullam possimus. Quisquam, eum aliquid?";
}

function changeStretching() {
    classesImg.src = "./images/stret.webp";
    classesH2.textContent = "Why are your Stretching";
    classesP.textContent = "Stretching Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quod perspiciatis vero mollitia temporibus placeat enim! Veritatis doloremque obcaecati placeat asperiores soluta, vel voluptatem laudantium ullam possimus. Quisquam, eum aliquid?";
}

// BMI Calculator
function calculateBMI() {
    const height = document.getElementById("height").value / 100;
    const weight = document.getElementById("weight").value;
    const resultDiv = document.getElementById("bmi-result");


    document.querySelectorAll(".bmi-img span").forEach((arrow) => {
        arrow.classList.remove("active");
    });

    if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(1);
        if (bmi < 18.5) {
            document.getElementById("underweight").classList.add("active");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            document.getElementById("normal").classList.add("active");
        } else if (bmi >= 25 && bmi <= 29.9) {
            document.getElementById("overweight").classList.add("active");
        } else if (bmi >= 30 && bmi <= 34.9) {
            document.getElementById("obese").classList.add("active");
        } else {
            document.getElementById("extremely-obese").classList.add("active");
        }
        resultDiv.textContent = `${bmi}`;
    }
}

document.getElementById("height").addEventListener("input", calculateBMI);
document.getElementById("weight").addEventListener("input", calculateBMI);

// Handle Course Selection
courses.addEventListener("click", function (event) {
    const id = event.target.id;
    switch (id) {
        case "yoga":
            changeYoga();
            break;
        case "group":
            changeGroup();
            break;
        case "solo":
            changeSolo();
            break;
        case "stretching":
            changeStretching();
            break;
        default:
            return;
    }
});

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelector(".classes-btn.active").classList.remove("active");
        button.classList.add("active");
    });
});

// Navbar Background Change on Scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("nav-bg");
    } else {
        navbar.classList.remove("nav-bg");
    }
});

// Mobile Menu Toggle
menuBtn.addEventListener('click', function () {
    mobileMenu.style.display =
        mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});

closeBtn.addEventListener('click', function () {
    mobileMenu.style.display =
        mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Scroll Section Highlight
var focusSectionLink = function (event) {
    for (const link of links) {
        var id = link.hash.slice(1);
        var section = document.getElementById(id);
        var position = window.scrollY + (window.innerHeight / 1);

        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            link.ariaCurrent = 'page';
            link.classList.add('active');
        } else {
            link.ariaCurrent = null;
            link.classList.remove('active');
        }
    }
};

var focusSection = function (event) {
    event.preventDefault();
    var id = event.target.hash.slice(1);
    var section = document.getElementById(id);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - navbar.offsetHeight,
            behavior: 'smooth'
        });
    }
};

window.addEventListener('scroll', focusSectionLink);

for (const link of links) {
    link.addEventListener('click', focusSection);
}
