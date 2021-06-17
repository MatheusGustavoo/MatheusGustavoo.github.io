export default function executar2(){
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