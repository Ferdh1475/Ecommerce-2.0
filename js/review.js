const review = [ {
        id: 1,
        name: 'anna johnson',
        job: 'web developer',
        img: 'img/profile1 (1).jpg',
        Text: "I'm baby meggings twee health goth +1. Bicycle rights and answers the question very well. Dummy text one "
    },
    {
        id: 2,
        name: 'Peter welters',
        job: 'web designer',
        img: 'img/profile2.jpg',
        Text: "I'm yung meggings aunt life is +1 today.And my job is to wish you all a happy birthday... Dummy text two "
    },
    {
        id: 3,
        name: 'Will smith',
        job: 'Ui designer',
        img: 'img/profile3.jpg',
        Text: "I'm actor meggings guy movie is interesting and i have acted men in black 1 - 3... Dummy text three "
    },
    {
        id: 4,
        name: 'savage kings',
        job: 'Ai instructor',
        img: 'img/profile4.jpg',
        Text: "I'm database analyst meggings bro can make the world turn into ai... Dummy text four "
    },
    {
        id: 5,
        name: 'williams angel',
        job: 'Nurse',
        img: 'IMG_1991.PNG',
        Text: "I'm take care of people in the hospital and sometimes i go to their hiome to take care of them... Dummy text five "
    },
    {
        id: 6,
        name: 'John murphy',
        job: 'web developer',
        img: 'IMG_1992.PNG',
        Text: "I'm created the carousel in netflix ancd till date there is no one who can create it... Dummy text six "
    },
    {
        id: 7,
        name: 'Last kings',
        job: 'Last Job',
        img: 'IMG_1993.JPG',
        Text: "I'm a priest and i ve come to preach the gospel that ye maybe saved Dummy text seven "
    },
    // arrays are 0 index base
   
];

let current = 0

const nextBtn = document.querySelector('.right-btn');
const leftBtn = document.querySelector('.left-btn');
const cardImg = document.querySelectorAll('.slider-container .card .card__img');
const cardName = document.querySelectorAll('.slider-container .card .card__name');
const cardDescription = document.querySelectorAll('.slider-container .card .card__description');


function showThreeReviews(person){
    const item = review[person]
    cardImg.src = item.img;
    cardName.textContent = item.name;
    cardDescription.textContent = item.Text;
}

showThreeReviews(current)


nextBtn.addEventListener('click', () => {
    current++
    if(current > review.length -1){
        current = 0
    }
    showThreeReviews(current)
})