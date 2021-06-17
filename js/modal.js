export default function modal(){
  const Botaoabrir=document.querySelector('[data-modal="abrir"]')
  const Botaofechar=document.querySelector('[data-modal="fechar"]')
  const conteiner = document.querySelector('[data-modal="conteiner"]')

function Toggle(){
  conteiner.classList.toggle('ativar-modal')
}

function ClicarFora(event){
  if(event.target === this )
    Toggle()
  
}
conteiner.addEventListener('click', ClicarFora)
Botaoabrir.addEventListener('click', Toggle)
Botaofechar.addEventListener('click', Toggle)


}