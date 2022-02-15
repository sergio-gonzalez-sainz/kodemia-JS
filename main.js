


function cambiar(){
    let peso = document.getElementById("pesos").value;
    let dolar = 22;
    let dolares = peso / dolar ;
    document.getElementById("tipo-cambio").innerHTML = "Tipo de cambio: $" + dolar + " pesos";
    document.getElementById("dolares").innerHTML = ` ${dolares.toFixed(2)}`; 
}


function login(){
    let usuario = document.getElementById("user").value ;
    let password = document.getElementById("pass").value;
    if( usuario == "usuario3"){
        if(password == "password123" ){
            alert("Bienvenido : " + usuario );
        } else{
            alert("Contraseña Incorrecta");
        }
    }else{
        alert("No se encontro el usuario");
    }
}

function descuento(){

    let monto = document.getElementById("monto-desc").value;
    let descuento;
    if(monto >= 300){
        descuento = 0.25;
        monto = monto * descuento;
        document.getElementById("alert").innerHTML = `<div class="alert alert-success" role="alert">
        Descuento
        </div>`
        document.getElementById("des").innerHTML = `
        <span class="input-group-text">%</span>
        <span class="input-group-text">${descuento}</span>
        <input type="text" class="form-control" value = "${monto}" aria-label="Dollar amount (with dot and two decimal places)">
    `; 
    } else if(monto>150 && monto<300  ){
        descuento = 0.20;
        monto = monto * descuento;
        document.getElementById("alert").innerHTML = `<div class="alert alert-success" role="alert">
        Descuento
        </div>`
        document.getElementById("des").innerHTML = `
        <span class="input-group-text">%</span>
        <span class="input-group-text">${descuento}</span>
        <input type="text" class="form-control" value = "${monto}" aria-label="Dollar amount (with dot and two decimal places)">
    `; 
    } else if(monto<150 ){
        document.getElementById("alert").innerHTML = ` `
        document.getElementById("des").innerHTML = `
        <div class="alert alert-warning" role="alert">
 No Hay Descuento
</div>
    `;  
    }
}




