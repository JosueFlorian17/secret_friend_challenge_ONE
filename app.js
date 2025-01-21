// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista_de_amigos = [];


function addFriend(){
    if (document.getElementById("amigo").value == ""){
        alert("Por favor ingrese un nombre");
    }
    else if (lista_de_amigos.includes(document.getElementById("amigo").value)){
        alert("Este amigo ya fue agregado");
    }else{

    lista_de_amigos.push(document.getElementById("amigo").value);
    console.log(lista_de_amigos);
    document.getElementById("amigo").value = "";
    showFriends();
    }

}

function showFriends() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 
    for (let i = 0; i < lista_de_amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = lista_de_amigos[i];
        listaAmigos.appendChild(li);
    }
}


function chooseFriend(){
    if(lista_de_amigos.length == 0){
        alert("No hay amigos en la lista");
    }

    else{
    let howlong = lista_de_amigos.length;
    let randomfriend = Math.floor(Math.random()*howlong);
    let winner = lista_de_amigos[randomfriend];
    console.log(winner);
    alert("El amigo elegido es: "+winner);
    }
}


