const torre1 = document.querySelector('#torreUno')
const torre2 = document.querySelector('#torreDos')
const torre3 = document.querySelector('#torreTres')

let selectorDisco = 0
let movimientos = 0
let active = false

function inicio(){
    const selector = document.getElementById('selector')
    selectorDisco = selector.options[selector.selectedIndex].value
    for (i = 1; i <= selectorDisco; i++){
        let discosDiv = document.createElement('div')
        discosDiv.id = 'discoF' + i
        discosDiv.className = 'discoFormato'
        torre1.appendChild(discosDiv)}
}inicio()

function aceptar(){
    location.reload();
}

let actions = function(){
    if (active === false && this.childElementCount === 0){
        return
    }else if (active === this.lastChild){
        this.lastChild.style.borderWidth = '1px'
        active = false
    }else if (active === false){
        this.lastChild.style.borderWidth = '2px'
        active = this.lastChild
    }else if (active.offsetWidth < this.lastChild.offsetWidth || this.childElementCount === 0){
        active.style.borderWidth = '1px'
        this.appendChild(active)
        movimientos = movimientos + 1
        document.getElementById('movimientos').textContent = movimientos
        active = false
    }else{
        active.style.borderWidth = '1px'
        active = false
    }
}

torre1.addEventListener('click', actions)
torre2.addEventListener('click', actions)
torre3.addEventListener('click', actions)