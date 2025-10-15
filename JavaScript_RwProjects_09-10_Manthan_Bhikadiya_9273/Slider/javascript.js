const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');

let slidernumber = 0;

const bottom = document.querySelector('.buttons');
for (let i = 0; i < images.length; i++) {
    const div = document.createElement('div');
    div.className = 'button';
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll('.button');

buttons[0].style.backgroundColor = 'white';

const chengebg = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = 'transparent';
        button.addEventListener('mouseover', stopslideInterval);
        button.addEventListener('mouseout', startInterval);
    })
}

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        chengebg();
        slider.style.transform = `translateX(-${i * 100}%)`;
        slidernumber = i + 1;
        button.style.backgroundColor = 'white';
    })
})

const chengecolor = () => {
    chengebg();
    buttons[slidernumber].style.backgroundColor = 'white';
}
function slide() {
    slider.style.transform = `translateX(-${slidernumber * 100}%)`;
}

right.addEventListener('click', () => {
    slidernumber++;
    if (slidernumber > images.length - 1) {
        slidernumber = 0;
    }
    slide();
    chengecolor();
});

left.addEventListener('click', () => {
    slidernumber--;
    if (slidernumber < 0) {
        slidernumber = images.length - 1;
    }
    slide();
    chengecolor();
})

let slideinterval;

const startInterval = () => {
    slideinterval = setInterval(() => {
        slidernumber++;
        if (slidernumber > images.length - 1) {
            slidernumber = 0;
        }
        slide();
        chengecolor();
    }, 2000)
};

const stopslideInterval = () => {
    clearInterval(slideinterval);
}

startInterval();


slider.addEventListener('mouseover', stopslideInterval);
slider.addEventListener('mouseout', startInterval);


right.addEventListener('mouseover', stopslideInterval);
right.addEventListener('mouseout', startInterval);

left.addEventListener('mouseover', stopslideInterval);
left.addEventListener('mouseout', startInterval);