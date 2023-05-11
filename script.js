const t1 = document.querySelector('#tela1')
const t2 = document.querySelector('#tela2')
const t3 = document.querySelector('#tela3')
const t4 = document.querySelector('#tela4')
const t5 = document.querySelector('#tela5')
const t6 = document.querySelector('#tela6')
const t7 = document.querySelector('#tela7')
const t8 = document.querySelector('#tela8')
const t9 = document.querySelector('#tela9')
const limpar = document.querySelector('#limparBtn')
const radiox = document.querySelector('#radioX')
const radioO = document.querySelector('#radioO')
radiox.checked = true

var escolha = 'X'
const listaTela = [t1, t2, t3, t4, t5, t6, t7, t8, t9]

t1.addEventListener('click', quadro1)
t2.addEventListener('click', quadro2)
t3.addEventListener('click', quadro3)
t4.addEventListener('click', quadro4)
t5.addEventListener('click', quadro5)
t6.addEventListener('click', quadro6)
t7.addEventListener('click', quadro7)
t8.addEventListener('click', quadro8)
t9.addEventListener('click', quadro9)
limpar.addEventListener('click', limparTela)

function quadro1(){
    if(t1.textContent == ''){
        if(radiox.checked){
            t1.textContent = 'X'
            radioO.checked = true
            vencedorX()
        }else{
            t1.textContent = 'O'
            radiox.checked = true
            vencedorO()
        } 
    }
}

function quadro2(){
    if(t2.textContent == ''){
        if(radiox.checked){
            t2.textContent = 'X'
            radioO.checked = true
            vencedorX()
        }else{
            t2.textContent = 'O'
            radiox.checked = true
            vencedorO()
        }
    }
}

function quadro3(){
    if(t3.textContent == ''){
        if(radiox.checked){
            t3.textContent = 'X'
            radioO.checked = true
            vencedorX()
        }else{
            t3.textContent = 'O'
            radiox.checked = true
            vencedorO()
        }
    }
}

function quadro4(){
    if(t4.textContent == ''){
        if(radiox.checked){
            t4.textContent = 'X'
            radioO.checked = true
            vencedorX()
        }else{
            t4.textContent = 'O'
            radiox.checked = true
            vencedorO()
        }
    }
}

function quadro5(){
    if(t5.textContent == ''){
        if(radiox.checked){
            t5.textContent = 'X'
            radioO.checked = true
            vencedorX()
        }else{
            t5.textContent = 'O'
            radiox.checked = true
            vencedorO()
        }
    }
}

function quadro6(){
    if(t6.textContent == ''){
        if(radiox.checked){
            t6.textContent = 'X'
            radioO.checked = true
            vencedorX()
        }else{
            t6.textContent = 'O'
            radiox.checked = true
            vencedorO()
        }
    }
}

function quadro7(){
    if(t7.textContent == ''){
        if(radiox.checked){
            t7.textContent = 'X'
            radioO.checked = true
            vencedorX()
        }else{
            t7.textContent = 'O'
            radiox.checked = true
            vencedorO()
        }
    }
}

function quadro8(){
    if(t8.textContent == ''){
        if(radiox.checked){
            t8.textContent = 'X'
            radioO.checked = true
            vencedorX()
        }else{
            t8.textContent = 'O'
            radiox.checked = true
            vencedorO()
        }
    }
    console.log(escolha)
}

function quadro9(){
    if(t9.textContent == ''){
        if(radiox.checked){
            t9.textContent = 'X'
            radioO.checked = true
            vencedorX()
        }else{
            t9.textContent = 'O'
            radiox.checked = true
            vencedorO()
        }
    }
}

function vencedorX(){
    if(t1.textContent === 'X' && t2.textContent === 'X' && t3.textContent === 'X'){
        t1.style.backgroundColor = 'green'
        t2.style.backgroundColor = 'green'
        t3.style.backgroundColor = 'green'
    }else
    if(t4.textContent === 'X' && t5.textContent === 'X' && t6.textContent === 'X'){
        t4.style.backgroundColor = 'green'
        t5.style.backgroundColor = 'green'
        t6.style.backgroundColor = 'green'
    }else
    if(t7.textContent === 'X' && t8.textContent === 'X' && t9.textContent === 'X'){
        t7.style.backgroundColor = 'green'
        t8.style.backgroundColor = 'green'
        t9.style.backgroundColor = 'green'
    }else
    if(t1.textContent === 'X' && t4.textContent === 'X' && t7.textContent === 'X'){
        t1.style.backgroundColor = 'green'
        t4.style.backgroundColor = 'green'
        t7.style.backgroundColor = 'green'
    }else
    if(t2.textContent === 'X' && t5.textContent === 'X' && t8.textContent === 'X'){
        t2.style.backgroundColor = 'green'
        t5.style.backgroundColor = 'green'
        t8.style.backgroundColor = 'green'
    }else
    if(t1.textContent === 'X' && t5.textContent === 'X' && t9.textContent === 'X'){
        t1.style.backgroundColor = 'green'
        t5.style.backgroundColor = 'green'
        t9.style.backgroundColor = 'green'
    }else
    if(t7.textContent === 'X' && t5.textContent === 'X' && t3.textContent === 'X'){
        t7.style.backgroundColor = 'green'
        t5.style.backgroundColor = 'green'
        t3.style.backgroundColor = 'green'
    }
}

function vencedorO(){
    if(t1.textContent === 'O' && t2.textContent === 'O' && t3.textContent === 'O'){
        t1.style.backgroundColor = 'green'
        t2.style.backgroundColor = 'green'
        t3.style.backgroundColor = 'green'
    }else
    if(t4.textContent === 'O' && t5.textContent === 'O' && t6.textContent === 'O'){
        t4.style.backgroundColor = 'green'
        t5.style.backgroundColor = 'green'
        t6.style.backgroundColor = 'green'
    }else
    if(t7.textContent === 'O' && t8.textContent === 'O' && t9.textContent === 'O'){
        t7.style.backgroundColor = 'green'
        t8.style.backgroundColor = 'green'
        t9.style.backgroundColor = 'green'
    }else
    if(t1.textContent === 'O' && t4.textContent === 'O' && t7.textContent === 'O'){
        t1.style.backgroundColor = 'green'
        t4.style.backgroundColor = 'green'
        t7.style.backgroundColor = 'green'
    }else
    if(t2.textContent === 'O' && t5.textContent === 'O' && t8.textContent === 'O'){
        t2.style.backgroundColor = 'green'
        t5.style.backgroundColor = 'green'
        t8.style.backgroundColor = 'green'
    }else
    if(t1.textContent === 'O' && t5.textContent === 'O' && t9.textContent === 'O'){
        t1.style.backgroundColor = 'green'
        t5.style.backgroundColor = 'green'
        t9.style.backgroundColor = 'green'
    }else
    if(t7.textContent === 'O' && t5.textContent === 'O' && t3.textContent === 'O'){
        t7.style.backgroundColor = 'green'
        t5.style.backgroundColor = 'green'
        t3.style.backgroundColor = 'green'
    }
}

function limparTela(){
    for(let i=0; i< listaTela.length; i++){
        listaTela[i].textContent = ''
        listaTela[i].style.backgroundColor = 'white'
    }
}