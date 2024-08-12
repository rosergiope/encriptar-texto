let textoInicial = "felicidades por enfrentar este desafio y haberlo concluido con exito!";
let textoEncriptado = "";
let textoDesencriptado = "";

function encriptar(){
    textoInicial = document.getElementById('textoInicial').value;
    textoEncriptado = "";
    for (var i = 0; i < textoInicial.length; i++) {
        if(textoInicial[i] === "a"){
            textoEncriptado += "ai";
        }else if(textoInicial[i] === "e"){
            textoEncriptado += "enter";
        }else if(textoInicial[i] === "i"){
            textoEncriptado += "imes";
        }else if(textoInicial[i] === "o"){
            textoEncriptado += "ober";
        }else if(textoInicial[i] === "u"){
            textoEncriptado += "ufat";
        }else{
            textoEncriptado += textoInicial[i];
        }
    }
    console.log(textoEncriptado);
    document.querySelector('#textoProcesado').value = textoEncriptado;
}

function desencriptar(){
    textoEncriptado = document.getElementById('textoInicial').value;
    textoDesencriptado = "";
    var i = 0;
    while (i < textoEncriptado.length) {
        if(textoEncriptado[i] === "a"){
            textoDesencriptado += "a";
            i+=2;
        }else if(textoEncriptado[i] === "e"){
            textoDesencriptado += "e";
            i+=5;
        }else if(textoEncriptado[i] === "i"){
            textoDesencriptado += "i";
            i+=4;
        }else if(textoEncriptado[i] === "o"){
            textoDesencriptado += "o";
            i+=4;
        }else if(textoEncriptado[i] === "u"){
            textoDesencriptado += "u";
            i+=4;
        }else{
            textoDesencriptado += textoEncriptado[i];
            i++;
        }
    }
    console.log(textoDesencriptado);
    document.querySelector('#textoProcesado').value = textoDesencriptado;
}

function copiarTexto() {
    var copiaTexto = document.getElementById("textoProcesado");

    copiaTexto.select();
    copiaTexto.setSelectionRange(0, 99999); 
  
    navigator.clipboard.writeText(copiaTexto.value);
    
    // Alert the copied text
    alert("Copied the text: " + copiaTexto.value);
}