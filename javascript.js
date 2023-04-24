let encriptandoTexto = document.querySelector('.aEncriptar')
let textoEncriptado = document.querySelector('.encriptado')
let btnEncriptar = document.querySelector('.btn1')
let btnDesencriptar = document.querySelector('.btn2')
let btnCopiarTexto = document.querySelector('.btn3')

function encriptarTexto(texto) {
    let scripts = ''
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === texto[i].toUpperCase()) {
            alert('No son permitidas las mayusculas.')
            process.exit()
        }
        if (texto[i] === 'a') {
            scripts += 'ai'
        } else if (texto[i] === 'e') {
            scripts += 'enter'
        } else if (texto[i] === 'i') {
            scripts += 'imes'
        } else if (texto[i] === 'o') {
            scripts += 'ober'
        } else if (texto[i] === 'u') {
            scripts += 'ufat'
        } else {
            scripts += texto[i]
        }
    }
    return scripts
}

function escribir() {
    let result = encriptarTexto(encriptandoTexto.value)
    textoEncriptado.value = result
}

function desencriptar(text) {
    const removerLetras = {
        ai: /i/g,
        enter: /nter/g,
        month: /mas/g,
        ber: /ber/g,
        fat: /fat/g,
    };
    let transformarTxt = text;
    for (const [pattern, regex] of Object.entries(removerLetras)) {
        transformarTxt = transformarTxt.replace(regex, "");
    }
    return transformarTxt;
}

function mostrar() {
    let desencrip = desencriptar(textoEncriptado.value)
    textoEncriptado.value = desencrip
}

function copiandoTexto() {
    let copiando = textoEncriptado
    navigator.clipboard.writeText(copiando.value)
}

btnEncriptar.onclick = escribir
btnDesencriptar.onclick = mostrar
btnCopiarTexto.onclick = copiandoTexto