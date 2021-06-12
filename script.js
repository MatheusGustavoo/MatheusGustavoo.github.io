//  function executar1(){
//   const imagens = document.querySelectorAll('.js-div li')
//   const frase = document.querySelectorAll('.descr-1 img')
//   frase[0].classList.add('ativo')
  
//   function navTab(index){
//     frase.forEach((remover) =>{
//       remover.classList.remove('ativo')
//     });
//     frase[index].classList.add('ativo');
//   }
  
//   imagens.forEach((img, index) =>{
//     img.addEventListener('click', function(){
//       navTab(index)
//     })
//   })
  
//   console.log(imagens.index)
//   }
//   executar1();
import executar1 from './slide.js'
executar1();

function executar2(){
const linkIN =  document.querySelectorAll('.option a')

function scrollToSection(event){
 event.preventDefault();
 const href= event.currentTarget.getAttribute('href');
 const section = document.querySelector(href)
 const topo = section.offsetTop;

 section.scrollIntoView({
  behavior:'smooth',
  block: 'start',

 })
 
}


linkIN.forEach((item) =>{
  item.addEventListener('click', scrollToSection)
})

}

executar2();

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

window.addEventListener('scroll', animaScroll);  



function Carro(Preco, Marca){
  this.preco = Preco;
  this.marca = Marca;
}


const honda = new Carro(2000, 'honda');


const fiat = new Carro(2500, 'fiat');

function Carro2(marca, precoInicial){
  const taxa = 1.2;
  const precofinal = precoInicial * taxa;
 
  this.marca = marca;
  this.preco = precofinal;

}

const celta = new Carro2('celta', 1000);
