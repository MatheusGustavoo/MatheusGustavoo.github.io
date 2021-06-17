export default function animarScroll(){
const sections = document.querySelectorAll('.js-scroll');
const apartamentos = document.querySelectorAll('.aps')

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < 0){
      apartamentos.forEach((ap) =>{
      ap.classList.add('ativar-scroll')})
    }
  })

    
}

window.addEventListener('scroll', animaScroll);  }

animarScroll();