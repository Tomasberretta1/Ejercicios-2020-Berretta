/**
 * Conversor de unidades, de metros, pulgadas, pies y yardas.
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, pulgadas, pies o yardas
 * @param {numer} valor - El valor de los inputs de metros, pulgadas, pies o yardas
 * @return Valor que retorna
 */

function CambiarUnidades(id, valor) {
    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido " + id);
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";

    } else if (id == "metro") {
        document.lasUnidades.unid_pulgada.value = 39.3701 * valor;
        document.lasUnidades.unid_pie.value = 3.28084 * valor;
        document.lasUnidades.unid_yarda.value = 1.09361 * valor;

    } else if (id == "pulgada") {
        document.lasUnidades.unid_metro.value = 0.0254 * valor;
        document.lasUnidades.unid_pie.value = 0.0833333 * valor;
        document.lasUnidades.unid_yarda.value = 0.027778 * valor;

    } else if (id == "pie") {
        document.lasUnidades.unid_metro.value = 0.3048 * valor;
        document.lasUnidades.unid_pulgada.value = 12 * valor;
        document.lasUnidades.unid_yarda.value = 0.333333 * valor;

    } else if (id == "yarda") {
        document.lasUnidades.unid_metro.value = 0.9144 * valor;
        document.lasUnidades.unid_pulgada.value = 36 * valor;
        document.lasUnidades.unid_pie.value = 3 * valor;
    }

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
    num1=document.getElementsByName("sum_num1")[0].value;
    num2=document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].value= Number(num1) + Number(num2);
}

function calcularResta() {
    var num1,num2;
    num1=document.getElementsByName("res_num1")[0].value;
    num2=document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].value= Number(num1) - Number(num2);
}

function calcularMul() {
    var num1,num2;
    num1=document.getElementsByName("mul_num1")[0].value;
    num2=document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].value= Number(num1) * Number(num2);
}

function calcularDiv() {
    var num1,num2;
    num1=document.getElementsByName("div_num1")[0].value;
    num2=document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].value= Number(num1) / Number(num2);
}