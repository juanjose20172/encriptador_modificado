// .toLowerCase

var input = document.querySelector("#texto-ingresado");
input.focus();
var textoResultado = document.querySelector("#texto-resultado");
var muñecoYtexto = document.querySelector("#muñeco-texto");
var error = document.querySelector("#error");
var pegar = document.querySelector("#pegar");
var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var btnCopiar = document.querySelector("#btn-copiar");
var keys = [
    ["«","a"],
    ["å","b"],
    ["Æ","c"],
    ["└","d"],
    ["╣","e"],
    ["ô","f"],
    ["û","g"],
    ["Ç","h"],
    ["×","i"],
    ["ê","j"],
    ["æ","k"],
    ["ÿ","l"],
    ["£","m"],
    ["¥","n"],
    ["ƒ","ñ"],
    ["¬","o"],
    ["½","p"],
    ["░","q"],
    ["ø","r"],
    ["º","s"],
    ["▒","t"],
    ["®","u"],
    ["¼","v"],
    ["┤","w"],
    ["©","x"],
    ["╗","y"],
    ["╝","z"],
    ["┴","á"],
    ["┬","é"],
    ["─","í"],
    ["├","ó"],
    ["┼","ú"],
    ["ã","1"],
    ["Ã","2"],
    ["╚","3"],
    ["╔","3"],
    ["╩","4"],
    ["╦","5"],
    ["╠","6"],
    ["═","7"],
    ["╬","8"],
    ["¤","9"],
    ["ð","."],
    ["Ð",":"],
    ["┘",";"],
    ["┌",","]

    // 192 alt
];

//BOTON PARA ENCRIPTAR TEXTO
btnEncriptar.addEventListener("click", function(){

    // //VALIDACIÓN DE MAYÚSCULAS Y/O ACENTOS
    // if(/[A-Z]/.test(input.value) || /[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]/.test(input.value)){
    //     error.classList.remove("invisible");
    //     return
    // }else{
    //     error.classList.add("invisible");
    // };
    input.value = input.value.toLowerCase();
    //ENCRIPTACION
    for(i = 0; i < keys.length; i++){
        if(input.value.includes(keys[i][1])){
            input.value = input.value.replaceAll(keys[i][1], keys[i][0])
        };
    };

    //MOSTRAR EL TEXTO ENCRIPTADO
    if(input.value.length > 0){
        muñecoYtexto.classList.add("invisible");
        textoResultado.classList.remove("invisible");
        btnCopiar.classList.remove("invisible");
        textoResultado.textContent = input.value;
        input.value = "";
    };

     pegar.classList.add("invisible");
    
});

//BOTON PARA DESENCRIPTAR TEXTO
btnDesencriptar.addEventListener("click", function(){

    // //VALIDACIÓN DE MAYÚSCULAS Y/O ACENTOS
    // if(/[A-Z]/.test(input.value) || /[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]/.test(input.value)){
    //     error.classList.remove("invisible");
    //     return
    // }else{
    //     error.classList.add("invisible");
    // };

    //DESENCRIPTACION
    for(i = 0; i < keys.length; i++){
        if(input.value.includes(keys[i][0])){
            input.value = input.value.replaceAll(keys[i][0], keys[i][1]);
        };
    };

    //MOSTRAR EL TEXTO DESENCRIPTADO
    if(input.value.length > 0){
        muñecoYtexto.classList.add("invisible");
        textoResultado.classList.remove("invisible");
        btnCopiar.classList.remove("invisible");
        textoResultado.textContent = input.value;
        input.value = "";
    };

    pegar.classList.add("invisible");
    
});

//BOTON COPIAR
btnCopiar.addEventListener("click", function(){
    pegar.classList.remove("invisible");
    textoResultado.select();
    document.execCommand("copy");
    input.focus();
});


