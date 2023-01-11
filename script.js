let originalImg = './assets/sofa.svg'

function changeImage(){
  let img = document.getElementById('sofa')
  let currentImg =img.src
  img.src = './assets/sofa.gif'
  originalImg = currentImg

  let btn1 = document.getElementById('botao360')
  let btn2 = document.getElementById('botaoX')

  btn1.style.display = 'none'
  btn2.style.display = 'block'
}

function backImage(){
  let img2 = document.getElementById('sofa')
  img2.src = originalImg

  let btn1 = document.getElementById('botaoX')
  let btn2 = document.getElementById('botao360')

  btn1.style.display = 'none'
  btn2.style.display = 'block'
}

function mensagem(){
  alert('Adicionado!')
}