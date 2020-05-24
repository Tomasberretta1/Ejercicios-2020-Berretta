/**
 * Conversor de unidades, de metros, pulgadas, pies y yardas.
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, pulgadas, pies o yardas
 * @param {numer} valor - El valor de los inputs de metros, pulgadas, pies o yardas
 * @return Valor que retorna
 */

function CambiarUnidades(id, valor) {
    var metro, pulgada, pie, yarda;

    if (valor.includes (",")){
        valor = valor.replace(",",".");
    }

    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido " + id);
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";

    } else if (id == "metro") {
        metro = valor;
        pulgada = 39.3701 * valor;
        pie = 3.28084 * valor;
        yarda = 1.09361 * valor;

    } else if (id == "pulgada") {
        pulgada = valor;
        metro = 0.0254 * valor;
        pie = 0.0833333 * valor;
        yarda = 0.027778 * valor;

    } else if (id == "pie") {
        pie = valor;
        metro = 0.3048 * valor;
        pulgada = 12 * valor;
        yarda = 0.333333 * valor;

    } else if (id == "yarda") {
        yarda = valor;
        metro = 0.9144 * valor;
        pulgada = 36 * valor;
        pie = 3 * valor;
    }
    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yarda*100)/100;
}


function ConvertirGR(id) {
    var grad, rad;
    if(id == "grados") {
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI) / 180;

    }else if (id == "radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180) / Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}


function mostrar_ocultar(valorMo) {
    if (valorMo=="val_mostrar") {
        document.getElementById("divMo").style.display = 'block';
    }else if (valorMo == "val_ocultar"){
        document.getElementById("divMo").style.display = 'none';
    }
}


function calcularSuma() {
    var num1,num2;

    num1=Number(document.getElementsByName("sum_num1")[0].value);
    num2=Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML= num1 + num2;
}

function calcularResta() {
    var num1,num2;
    num1=Number(document.getElementsByName("res_num1")[0].value);
    num2=Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML= num1 - num2;
}

function calcularMul() {
    var num1,num2;
    num1=Number(document.getElementsByName("mul_num1")[0].value);
    num2=Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML= num1 * num2;
}

function calcularDiv() {
    var num1,num2;
    num1=document.getElementsByName("div_num1")[0].value;
    num2=document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML= Number(num1) / Number(num2);
}

function CargarWeb() {
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

function CargarResultado() {
    var urlComp, can, un;

    urlComp = window.location.href.split("/")[5];

    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];

    document.getElementById("dist").value = can + " " + un;
}

function dibujarCirCuad() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#333899";
    ctx.fillRect(0+margen, yMax-40-margen, 40, 40);

    ctx.arc(xMax/2,yMax/2,20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#990a15";
    ctx.fill();
}

function dibujar(event) {
    var canvas = document.getElementById("CanvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function(){bandera=true};
    canvas.onmouseup = function(){bandera=false};

    if(bandera){
        ctx.fillRect(posX, posY, 5,5);
        ctx.fill;
    }

}

function limpiarCanvas() {
    var canvas = document.getElementById("CanvasAdibujar");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

function dibujarCuadriculado() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var alturaMax = canvas.height;
    var anchoMax = canvas.width;

    //Dibujar las Lineas horizontales
    ctx.beginPath();
    for (var i=0; i<alturaMax;) {
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "#d9c22a"
        ctx.stroke();
        i = i + 20;
    }
    ctx.closePath();

    //Dibujar las Lineas Verticales
    ctx.beginPath();
    for (var i=0; i<anchoMax;) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeStyle = "#d9c22a"
        ctx.stroke();
        i = i + 20;
    }
    ctx.beginPath();

    //Eje X
    ctx.beginPath();
    ctx.moveTo(0, alturaMax/2);
    ctx.lineTo(anchoMax, alturaMax/2);
    ctx.strokeStyle = "#4dd946"
    ctx.stroke();
    ctx.beginPath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(anchoMax/2, 0);
    ctx.lineTo(anchoMax/2, alturaMax);
    ctx.strokeStyle = "#4dd946"
    ctx.stroke();
    ctx.beginPath();
}

function dibujarImagen(posX, posY) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(posX, posY);
    var img = new Image();
    img.src = "images/auto.png";

    canvas.width = canvas.width;
    img.onload = function() {
        ctx.drawImage(img, posX, posY);
    }
}