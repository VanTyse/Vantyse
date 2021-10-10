const menu = document.querySelector('.menu-bar');
const closeButton = document.querySelector('.close-btn')
const navItems = document.querySelector('.nav-items');
navItems.state = true;
const postCards = document.querySelector('.post-cards')

let sneakPeek = [
    {
        image: 'Images/my-photo.jpg',
        postTitle: 'Reaction after my first episode of Death Note',
        path: '#'
    },
    {
        image: 'Images/my-photo.jpg',
        postTitle: 'Finally seen a worse movie',
        path: '#'
    },
    {
        image: 'Images/my-photo.jpg',
        postTitle: 'Advice: never see Crazed',
        path: '#'
    },
    {
        image: 'Images/my-photo.jpg',
        postTitle: 'New favorite book.',
        path: '#'
    },
]

window.addEventListener('DOMContentLoaded', () => {
    postCards.innerHTML = loadSneakPeek(sneakPeek)
})

menu.addEventListener('click', () => {
    if(navItems.state){
        navItems.style.right = '0';
        menu.style.display = 'none'
        closeButton.style.display = 'block';
    }
    navItems.state = !navItems.state
})

closeButton.addEventListener('click', () =>{
    if(!navItems.state){
        navItems.style.right = '-120%'
        menu.style.display = 'block'
        closeButton.style.display = 'none';
    }
    navItems.state = !navItems.state
})

function loadSneakPeek(posts){
    let innerHTML = ``;
    for(let x of posts){
        innerHTML += `
        <a class="sneak-peek-link" href="${x.path}">
            <article class="post-card">
            <div class="post-image-div"><img class="post-image" src="${x.image}" alt="" srcset=""></div>
                <div class="post-title">
                    <p>
                        ${x.postTitle}
                    </p>
                </div>
            </article>
        </a>
        `
    }

    return innerHTML;
}

console.log(loadSneakPeek(sneakPeek))
