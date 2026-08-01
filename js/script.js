document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Scroll Reveal
    ========================== */

    const reveals = document.querySelectorAll(".reveal");

    function revealSections() {

        const windowHeight = window.innerHeight;

        reveals.forEach(section => {

            const top = section.getBoundingClientRect().top;

            if (top < windowHeight - 100) {

                section.classList.add("active");

            } else {

                section.classList.remove("active");

            }

        });

    }

    revealSections();

    window.addEventListener("scroll", revealSections);

/*====================================
        Animated KPI Counter
====================================*/

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function animateCounters() {

    if (counterStarted) return;

    const metrics = document.querySelector(".metrics");

    if (!metrics) return;

    const top = metrics.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = +counter.dataset.target;

            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 60));

            const updateCounter = () => {

                current += increment;

                if (current >= target) {

                    counter.textContent = target + "+";

                    return;

                }

                counter.textContent = current;

                requestAnimationFrame(updateCounter);

            };

            requestAnimationFrame(updateCounter);

        });

    }

}

window.addEventListener("scroll", animateCounters);

animateCounters();

/*====================================
        Sticky Header
====================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 30){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});


/*====================================
        Active Navigation
====================================*/

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


/*====================================
        Scroll Progress
====================================*/

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*====================================
        Dashboard Lightbox
====================================*/

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const closeLightbox = document.querySelector(".close-lightbox");

document.querySelectorAll(".project-image img").forEach(image=>{

    image.style.cursor="zoom-in";

    image.addEventListener("click",()=>{

        lightbox.classList.add("active");

        lightboxImage.src=image.src;

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

});

/*====================================
        Back To Top
====================================*/

const backToTop = document.querySelector(".back-to-top");

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}); 

/*====================================
        Reveal Animation
====================================*/

const revealElements=document.querySelectorAll(

".section-title,.project-card,.skill-card,.stat-card,.about-content,.contact-content"

);

revealElements.forEach(el=>{

    el.classList.add("reveal");

});

const revealObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{

    threshold:.15

});

revealElements.forEach(el=>{

    revealObserver.observe(el);

});

/*====================================
        Page Loader
====================================*/

window.addEventListener("load",()=>{

    document.querySelector(".page-loader")
            .classList.add("hide");

});


/*====================================
        Hero Typing Effect
====================================*/

const typingElement=document.getElementById("typing-text");

const text="Transforming Data into Business Decisions";

let index=0;

function typeWriter(){

    if(!typingElement) return;

    if(index<text.length){

        typingElement.textContent+=text.charAt(index);

        index++;

        setTimeout(typeWriter,55);

    }

}

typeWriter();


});