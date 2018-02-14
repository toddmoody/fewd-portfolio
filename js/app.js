'use strict'

// typed.js to handle hero section type
const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 80,
    backSpeed: 20,
    startDelay: 2000,
    backDelay: 1500,
    loop: true,
    loopCount: Infinity
});

const mouseOverImage = (image) => {
    image._oldSrc = image.src;
    image.src = "images/" + image.id + "-mo.png";
}

const mouseOutImage = (image) => {
    image.src = image._oldSrc;
}

// modal box(s)
const workBtn = document.getElementById('workBtn');
workBtn.addEventListener('click', function(){
    console.log('hello!');
    workModal.open();
})

const workModal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['modalStyle'],
    onOpen: function() {
        console.log('workModal open');
        this.setContent(document.querySelector('.workModal').innerHTML);
    },
    onClose: function() {
        console.log('workModal closed');
    },
});

const dcProjectsBtn = document.getElementById('dcProjectsBtn');
dcProjectsBtn.addEventListener('click', function(){
    console.log('hello!');
    dcProjectsModal.open();
})


const dcProjectsModal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: [],
    onOpen: function() {
        console.log('dcProjectsModal open');
        this.setContent(document.querySelector('.dcProjectsModal').innerHTML);
    },
    onClose: function() {
        console.log('dcProjectsModal closed');
    },
});

const arProjectsBtn = document.getElementById('arProjectsBtn');
arProjectsBtn.addEventListener('click', function(){
    console.log('hello!');
    arProjectsModal.open();
})


const arProjectsModal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: [],
    onOpen: function() {
        console.log('arProjectsModal open');
        this.setContent(document.querySelector('.arProjectsModal').innerHTML);
    },
    onClose: function() {
        console.log('arProjectsModal closed');
    },
});

const bhProjectsBtn = document.getElementById('bhProjectsBtn');
bhProjectsBtn.addEventListener('click', function(){
    console.log('hello!');
    bhProjectsModal.open();
})


const bhProjectsModal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: [],
    onOpen: function() {
        this.setContent(document.querySelector('.bhProjectsModal').innerHTML);
    },
    onClose: function() {
        console.log('bhProjectsModal closed');
    },
});

const mmProjectsBtn = document.getElementById('mmProjectsBtn');
mmProjectsBtn.addEventListener('click', function(){
    mmProjectsModal.open();
})


const mmProjectsModal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: [],
    onOpen: function() {
        this.setContent(document.querySelector('.mmProjectsModal').innerHTML);
    },
    onClose: function() {
        console.log('mmProjectsModal closed');
    },
});t



