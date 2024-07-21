document.getElementById('btn2').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

const sr = ScrollReveal({
    distance:'40px',
    duration:2000,
    reset:true 
})
sr.reveal('.logo',{delay:200,origin:'left'})
sr.reveal('.navbar',{delay:400,origin:'top'})
sr.reveal('.menu-btn',{delay:520,origin:'right'})

sr.reveal('.home-text span',{delay:600,origin:'top'})
sr.reveal('.home-text h1',{delay:680,origin:'left'})
sr.reveal('.home-text p',{delay:750,origin:'right'})
sr.reveal('.main-btn',{delay:800,origin:'left'})

sr.reveal('.share',{delay:950,origin:'bottom'})
sr.reveal('.home-img',{delay:1000,origin:'right'})


var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');


function opentab(tabname){
    
    for(let tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')
}
// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});
