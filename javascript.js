let encriptandoTexto = document.querySelector('.aEncriptar')
let textoEncriptado = document.querySelector('.encriptado')
let btnEncriptar = document.querySelector('.btn1')
let btnDesencriptar = document.querySelector('.btn2')
let btnCopiarTexto = document.querySelector('.btn3')

function encriptarTexto(texto){
    let scripts = ''
    for(let i = 0;i < texto.length;i++){
        if(texto[i] === 'a'){
            scripts += 'ai'
        }else if(texto[i] === 'e'){
            scripts += 'enter'
        }else if(texto[i] === 'i'){
            scripts += 'imes'
        }else if(texto[i] === 'o'){
            scripts += 'ober'
        }else if(texto[i] === 'u'){
            scripts += 'ufat'
        }
        scripts += texto[i]
    }
    return scripts
}

function escribir(){
    let result = encriptarTexto(encriptandoTexto.value)
    textoEncriptado.value = result
}

function desencriptar(texto){
    let limpiarTexto = texto.replace(/ai|enter|imes|ober|ufat|\n/g, '')
    return limpiarTexto
}

function mostrar(){
    let desencrip = desencriptar(textoEncriptado.value)
    textoEncriptado.value = desencrip
}

function copiandoTexto(){
    let copiando = textoEncriptado
    navigator.clipboard.writeText(copiando.value)
}

btnEncriptar.onclick = escribir
btnDesencriptar.onclick = mostrar
btnCopiarTexto.onclick = copiandoTexto