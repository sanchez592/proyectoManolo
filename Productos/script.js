let listElements = document.querySelectorAll('.list__button--click');
const buttonMenu = document.querySelector('.button__menu');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay'); // 👈 nuevo

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});

buttonMenu.addEventListener('click', () => {
    nav.classList.toggle('nav--show');
    overlay.classList.toggle('show');
});

overlay.addEventListener('click', () => {
    nav.classList.remove('nav--show');
    overlay.classList.remove('show');
});

// buton search
const searchBtn = document.querySelector('.button__search');
const searchBar = document.getElementById('searchBar');

searchBtn.addEventListener('click', () => {
  searchBar.classList.toggle('show');
});

// Filtro en vivo
document.getElementById('searchInput').addEventListener('input', function(){
  const filter = this.value.toLowerCase();
  document.querySelectorAll('.button_search').forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(filter) ? '' : 'none';
  });
});


// Filtrar productos en vivo
document.getElementById('searchInput').addEventListener('input', function(){
  const filter = this.value.toLowerCase();
  document.querySelectorAll('.button_carShop').forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(filter) ? '' : 'none';
  });
});



