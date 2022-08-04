let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active');
}

let searchForm = document.querySelector('.search_form');

document.querySelector('#search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
}