export function Slider() {
    let tabs;
    let count = 0;

    let card;
    let buttons;
    let card__img;
    let card__name;
    let card__info;
    let rightBtn;
    let leftBtn;
    let reviews;
    let currentItem = 0;

    tabs = document.querySelectorAll('.app .slider .slider-noHandle .cs-container .cs-body');
    setInterval( () => {
        tabs.forEach( (tab) => {
            tab.classList.remove('active')
        })
    
        count++;
        
        if(count > tabs.length -1){
            count = 0
        }
    
        tabs[count].classList.add('active');
    }, 7000)


    reviews = [
        {
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
        // {
        //     id: 4,
        //     name: 'savage kings',
        //     job: 'Ai instructor',
        //     img: 'img/profile4.jpg',
        //     Text: "I'm database analyst meggings bro can make the world turn into ai... Dummy text four "
        // },
        // {
        //     id: 5,
        //     name: 'williams angel',
        //     job: 'Nurse',
        //     img: 'IMG_1991.PNG',
        //     Text: "I'm take care of people in the hospital and sometimes i go to their hiome to take care of them... Dummy text five "
        // },
        // {
        //     id: 6,
        //     name: 'John murphy',
        //     job: 'web developer',
        //     img: 'IMG_1992.PNG',
        //     Text: "I'm created the carousel in netflix ancd till date there is no one who can create it... Dummy text six "
        // },
        // {
        //     id: 7,
        //     name: 'Last kings',
        //     job: 'Last Job',
        //     img: 'IMG_1993.JPG',
        //     Text: "I'm a priest and i ve come to preach the gospel that ye maybe saved Dummy text seven "
        // },
    ]   
    
    buttons = document.querySelector('.slider-handle .slider-container .slider-buttons')
    card = document.querySelector('.slider-handle .slider-container .card');
    card__img = card.querySelector('.card__img img');
    card__name = card.querySelector('.card__name h2');
    card__info = card.querySelector('.card__description h5');


    rightBtn = buttons.querySelector('.right-btn').addEventListener('click', function(){
        currentItem++
        
        if(currentItem > reviews.length -1){
            currentItem = 0
        }

        const item = reviews[currentItem];
        card__img.src = item.img
        card__name.innerText = item.name
        card__info.innerText = item.Text
    })

    leftBtn = buttons.querySelector('.left-btn').addEventListener('click', function(){
        currentItem--
        
        if(currentItem < 0){
            currentItem = reviews.length -1
        }
        
        const item = reviews[currentItem];
        card__img.src = item.img
        card__name.innerText = item.name
        card__info.innerText = item.Text
    })
    
    const item = reviews[currentItem];
    card__img.src = item.img
    card__name.innerText = item.name
    card__info.innerText = item.Text

}


// 
export function increaseNumber() {
    let count = 0;
    let pendingCount = 0;
    let declinedCount = 0;

    const symbol = document.querySelector('.symbol');
    const number = document.querySelector('.number');
    
    setInterval(() => {

        // HAPPY REQUEST
        function countIncrease(){
            count++   
        }


        if(count >= 35){
            number.style.color = '#0f3929';
            symbol.style.color = '#0f3929';
        } 
        if(count >= 201){
            count--;
        }
        number.innerHTML = count;
        
        countIncrease();

        // PENDING REQUEST
        function pending(){
            pendingCount++
            const symbolPending = document.querySelector('#symbolPending');
            const pending = document.querySelector('#pending'); 
            
            if(pendingCount < 15){
                symbolPending.style.color = '#0f3929';
                pending.style.color = '#0f3929';
            }
            if(pendingCount > 15){
                symbolPending.style.color = 'rgba(255, 0, 0, 0.552)';
                pending.style.color = 'rgba(255, 0, 0, 0.552)';
            }
            if(pendingCount >= 21){
                pendingCount--
            }
            pending.innerHTML = pendingCount;
        }

        pending();

        // DELCINED REQUEST
        function declinedRequest(){
            declinedCount++
            const declined = document.querySelector('#declined');
            const declinedSymbol = document.querySelector('#declinedSymbol'); 
            
            if(declinedCount < 10){
                declinedSymbol.style.color = '#0f3929';
                declined.style.color = '#0f3929';
            }
            if(declinedCount >= 11){
                declinedCount--
            }
            declined.innerHTML = declinedCount;
        };

        declinedRequest();
    }, 200);

}

export function ready() {
    let addToCartButtons;
    let removeCartBtn;
    let quantity;
    let purchaseBtn;

    quantity = document.getElementsByClassName('cart-quantity-input')
    for(let i = 0; i < quantity.length; i++){
        let quantityInput = quantity[i]
        quantityInput.addEventListener('change', quantityChanged)
    }

    removeCartBtn = document.getElementsByClassName('btn-danger')
    for(let i = 0; i < removeCartBtn.length; i++){
        let removeBtn = removeCartBtn[i]
        removeBtn.addEventListener('click', removeItemFromCart)
    }

    addToCartButtons = document.getElementsByClassName('card__addTo__cart')
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    purchaseBtn = document.querySelector('#purchaseBtn').addEventListener('click', purchaseClicked)
}

function quantityChanged(event){
    let input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateTotal()
}

function removeItemFromCart(event){
    let button = event.target
    button.parentElement.parentElement.remove()
}

function purchaseClicked(){
    let cartItems;
    
    cartItems = document.getElementsByClassName('cart-items')[0]
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    alert('Thank you for purchasing ....')
}

function addToCartClicked(event) {
    let button;
    let price;
    let imageSrc;
    let title;
    let modal;
    let shopItem;

    button = event.target;
    shopItem = button.parentElement.parentElement
    title = shopItem.getElementsByClassName('card__title')[0].innerText
    price = shopItem.getElementsByClassName('card__price')[0].innerText
    imageSrc = shopItem.getElementsByClassName('itemImage')[0].src
    modal = document.querySelector('.modal');
    
    modal.style.display = 'flex'
    setTimeout( () => {
        modal.style.display = 'none'
    }, 10000)
    
    addItemToCart(price, title, imageSrc)
    updateTotal()
}

function addItemToCart(price, title, imageSrc){
    let row;
    let column;
    let cartItemNames;
    let cartItems;
    let cartContents;
    let removeBtn;
    let input;

    row = document.createElement('div')
    row.classList.add('row')
    cartItems = document.getElementsByClassName('cart-items')[0]
    cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    column = document.createElement('div')
    column.setAttribute('class', 'column')


    for(let i = 0; i < cartItemNames.length; i++){
        if(cartItemNames[i].innerText == title){
            alert('This item already exist')
            return
        }
    }
    cartContents = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSrc}" width="150" height="100" style="object-fit: cover; border-radius: 10px;">
    <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>
    `
    column.innerHTML = cartContents
    cartItems.append(row)
    row.append(column)
    removeBtn = document.getElementsByClassName('btn-danger')[0].addEventListener('click', removeItemFromCart)
    input = document.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateTotal(){
    let cartItems;
    let rows;
    let quantity;
    let price;
    let priceElement;
    let quantityElement;
    let total = 0;
    let cartRow;
    let dollar = '$'

    cartItems = document.getElementsByClassName('cart-items')[0]
    rows = cartItems.getElementsByClassName('row')
    total = 0;

    for(let i = 0; i < rows.length; i++){
        cartRow = rows[i]
        priceElement = cartRow.getElementsByClassName('cart-price')[0]
        quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        price = parseFloat(priceElement.innerText.replace('$', ''))
        quantity = quantityElement.value
        total = total + (price * quantity)
   }

    total = Math.round(total * 100) / 100
    document.getElementsByClassName('total')[0].innerHTML = `${dollar}` + `${total}`
}


export function newDate() {
    let currentYear;
    currentYear = document.querySelector('h2 .currentYear').innerHTML = new Date().getFullYear()
}
// ONSCROLL