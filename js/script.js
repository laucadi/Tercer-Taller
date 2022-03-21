//IBM CALCULATOR

const weight = document.querySelector(".weight");
const height = document.querySelector(".height");
const totalResult = document.querySelector(".submit");
const finalResult = document.querySelector(".finalResult");

totalResult.addEventListener("click", function () {
  const result = Number(weight.value) / Number(height.value / 100) ** 2;
  console.log(result);

  finalResult.value = result.toFixed(2);

  const parResult = document.querySelector(".parResult");

  if (result <= 18.5) {
    parResult.textContent = ` se encuentra dentro del rango de peso insuficiente.`;
  } else if (result >= 18.6 && result <= 24.9) {
    parResult.textContent = ` se encuentra dentro del rango de peso optimo. `;
  } else {
    parResult.textContent = `se encuentra dentro del rango de obesidad. Ser obeso sobrecarga al corazón y puede llevar a que se presenten graves problemas de salud. Estos incluyen: 
    Artritis en sus rodillas y cadera,
    Enfermedad del corazón, 
    Presión arterial alta,
    Apnea del sueño, 
    Diabetes tipo 2 entre otras`;
  }
});

////table
const lista = document.getElementById("lista");
function dom() {
  const elementos = ["primer elemento"];
  elementos.forEach((item) => {
    lista.innerHTML += `<li> ${item} </li>`;
  });
}
let body = document.querySelector("body");

function tabla() {
  const tabla = document.getElementById("tabla");
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let estadovacuna = document.getElementById("estadovacuna").value;

  tabla.innerHTML += `<tr>
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${estadovacuna}</td>
    </tr>`;
}

//netflix

function calcular() {
  let valor = document.getElementById("num").value;
  let plan = 16900;
  let calculo = valor * plan;
  //alert("Debes pagar: " +calculo);
  //Swal.fire( 'el valor total pagado fue de ' +calculo,'Gracias por preferirnos', 'success',)
  Swal.fire({
    icon: "success",
    title: "el valor total pagado fue de " + calculo,
    showConfirmButton: true,
    timer: 1500,
    confirmButtonColor: "#db0000",
  });
}

function calcularTwo() {
  let valor = document.getElementById("num").value;
  let plan = 26900;
  let calculo = valor * plan;
  //alert("Debes pagar: " +calculo);
  Swal.fire({
    icon: "success",
    title: "el valor total pagado fue de " + calculo,
    showConfirmButton: true,
    timer: 1500,
    confirmButtonColor: "#db0000",
  });
}

function calcularThree() {
  let valor = document.getElementById("num").value;
  let plan = 38900;
  let calculo = valor * plan;
  //alert("Debes pagar: " +calculo);
  Swal.fire({
    icon: "success",
    title: "el valor total pagado fue de " + calculo,
    showConfirmButton: true,
    timer: 1500,
    confirmButtonColor: "#db0000",
  });
}
