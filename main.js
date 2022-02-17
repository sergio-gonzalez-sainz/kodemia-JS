
//-----------------Ejercicio 1

function cambiar(){
    let peso = document.getElementById("pesos").value;
    let dolar = 22;
    let dolares = peso / dolar ;
    document.getElementById("tipo-cambio").innerHTML = "Tipo de cambio: $" + dolar + " pesos";
    document.getElementById("dolares").innerHTML = ` ${dolares.toFixed(2)}`; 
}


//-----------------Ejercicio 2

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

//-----------------Ejercicio 3


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
    } else if(monto<=150 ){
        document.getElementById("alert").innerHTML = ` `
        document.getElementById("des").innerHTML = `
        <div class="alert alert-warning" role="alert">
            No Hay Descuento
        </div> 
        `;  
    }
}
//-----------------Ejercicio 4
let cal;
let vuelta=0;
let prom = 0;
function calificaciones(){
    let califica = parseInt(document.getElementById("calificacion").value);
    if(califica > -1 && califica <= 20 && califica != ""){
        vuelta += 1;
        prom += califica; 
        if(vuelta == 3){
            document.getElementById("botonCal").disabled = true;
            prom = prom / 3;
            document.getElementById("item-4").innerHTML = prom;
            if(prom >=0 && prom <= 10){
                document.getElementById("item-5").innerHTML = "Alumno Malo";
            }else if(prom >=11 && prom <= 13){
                document.getElementById("item-5").innerHTML = "Alumno Regular";
            } else if(prom >=14 && prom <= 16){
                document.getElementById("item-5").innerHTML = "Alumno Bueno";
            } else if(prom >=17 && prom <= 20){
                document.getElementById("item-5").innerHTML = "Alumno Muy Bueno";
            }
        }
        document.getElementById("item-"+vuelta).innerHTML = califica;
        document.getElementById("calificacion").value = "";
        }else if (califica == ""){
                    document.getElementById("calificacion").value = "";
                    alert("El valor no puede estar vacio");
            }else {
                document.getElementById("calificacion").value = "";
                alert("El valor debe ser entre 0 y 20");
            }
}

//-----------------Ejercicio 5
let multiplicador
function multiplica(){
    multiplicador = parseInt(document.getElementById("multiplicacion").value);
    if(multiplicador<=0 || multiplicador >=13){
        alert("El valor debe ser entre 1 y 12");
    }else if(isNaN(multiplicador)){
        alert("No puede estar vacio el campo");
    } else {
        circulos();
    }
    
}
function limpia(){
    document.getElementById("nuevo").innerHTML = ` <code id="item"></code>`
    document.getElementById("multiplicacion").value = "";
    document.getElementById("multiBtn").disabled = false;
    document.getElementById("nuevoBtn").disabled = true;
}
function circulos(){
   
    for(let i=1 ; i<=9 ; i++){
            let valor= multiplicador*i ;
            setTimeout(() => {  console.log("World!"); }, 2000);
            item.insertAdjacentHTML("beforebegin", 
            `<div class="d-flex justify-content-center align-items-center shadow-lg circulo" >
                <p class="numeroItem">${valor}</p>
            </div>`);
            
    }
    document.getElementById("nuevoBtn").disabled = false;
    document.getElementById("multiBtn").disabled = true;
}








