/* EVENTO CHANGE */
$("#pais").change(function () {
  let paisSeleccionado = $(this).children("option:selected").val();

  $(".resultado").text(paisSeleccionado); // .text("Lo que quiero") =>  .textContent= "Lo que quiero"
});

/* EVENTO ON... con selector guardado en variable */
const clickMeBtn = $("#clickMe");

clickMeBtn.on("click", function () {
  console.log("Gracias por hacer click!");
});

/* ---------------------------------------------------------------------------- */

$("#btn").on("click", function () {
  /* IMPARES */
  $("li").filter(":even").css("background-color", "yellow");
  /* PARES */
  $("li").filter(":odd").css("background-color", "blue");
});

/* ---------------------------------------------------------------------------- */

let contador = 0;
$("#ejemplo").on("click", function () {
  contador++;
  console.log("---> hiciste " + contador + " clic!/clics!");
  $("#counter").html(contador);
});
