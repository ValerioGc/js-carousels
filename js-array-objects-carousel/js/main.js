// Array foto
const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];




// for (let i = 0; i < images.length; i++) {
//     for (let key in images) {
//         console.log(images[key].title)
//     }
// }
let title;
let txt;
    for (let i = 0; i < images.length; i++) {

}


let img_arr_l = parseInt(images.length);
// Costruzione Dinamica HTML 
const img = document.getElementsByClassName('img');
const cont_b_prev = document.getElementById('l-prev');
const b_prev = document.getElementsByClassName('imgp');
let carousel_cont = document.getElementById('img-carousel');
for (let i = 0; i < images.length; i++) {
    let imgC = images[i].url;
    let title = images[i].title;
    let txt = images[i].description;
    carousel_cont.innerHTML += 
    `   <li class="img">
            <img src="${imgC}" alt="Immagine ${i + 1}">
            <div id="txt-ov">
                <h1>
                    ${title}
                </h1>
                <p>
                    ${txt}
                </p>
            </div>
        </li> 
    `;
    cont_b_prev.innerHTML +=
        `   <li class="imgp ovrl">
                <img src="${imgC}" alt="Immagine ${i + 1}">
            </li>
    `;
} 
let active = 0;
img[active].classList.add('show');
b_prev[active].classList.remove('ovrl');
// EventListners
const forw = document.getElementById('forw');
const back = document.getElementById('back');


// Event Listner Avanti
forw.addEventListener('click',
    function () {
        // Spostamento classe
        img[active].classList.remove('show');
        b_prev[active].classList.add('ovrl');
        if (active == img_arr_l - 1) {
            active = -1;
        }
        active++;
        img[active].classList.add('show');
        b_prev[active].classList.remove('ovrl');
    });
// Event Listner Indietro
back.addEventListener('click',
    function () {
        // Spostamento classe
        img[active].classList.remove('show');
        b_prev[active].classList.add('ovrl');
        if (active == 0) {
            active = img_arr_l;
        }
        active--;
        img[active].classList.add('show');
        b_prev[active].classList.remove('ovrl');
    });



// Spostamento classe active prima foto
let prevbtn1 = document.querySelector('.imgp:first-child');
prevbtn1.addEventListener('click',
function () {
    // Spostamento classe active
    img[active].classList.remove('show');
    b_prev[active].classList.add('ovrl');
    active = img_arr_l - 5;
    img[active].classList.add('show');
    b_prev[active].classList.remove('ovrl');
});
// Spostamento classe active seconda foto
let prevbtn2 = document.querySelector('.imgp:nth-child(2)');
prevbtn2.addEventListener('click',
function () {
    // Spostamento classe active
    img[active].classList.remove('show');
    b_prev[active].classList.add('ovrl');
    active = img_arr_l - 4;
    img[active].classList.add('show');
    b_prev[active].classList.remove('ovrl');
});
// Spostamento classe active terza foto
let prevbtn3 = document.querySelector('.imgp:nth-child(3)');
prevbtn3.addEventListener('click',
function () {
    // Spostamento classe active
    img[active].classList.remove('show');
    b_prev[active].classList.add('ovrl');
    active = img_arr_l - 3;
    img[active].classList.add('show');
    b_prev[active].classList.remove('ovrl');
});
// Spostamento classe active penultima foto
let prevbtn4 = document.querySelector('.imgp:nth-child(4)');
prevbtn4.addEventListener('click',
function () {
    // Spostamento classe active
    img[active].classList.remove('show');
    b_prev[active].classList.add('ovrl');
    active = img_arr_l - 2;
    img[active].classList.add('show');
    b_prev[active].classList.remove('ovrl');
}); 
// Spostamento classe active ultima foto
let prevbtn5 = document.querySelector('.imgp:nth-child(5)');
prevbtn5.addEventListener('click',
function () {
    // Spostamento classe active
    img[active].classList.remove('show');
    b_prev[active].classList.add('ovrl');
    active = img_arr_l - 1;
    img[active].classList.add('show');
    b_prev[active].classList.remove('ovrl');
});