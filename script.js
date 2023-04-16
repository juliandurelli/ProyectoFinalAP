let precioun=0, precioto=0;

function compra(){
  if($("#validacionforma").val()==1)
  {
    $("#validacionlargog").text("Espesor");
    $("#validacionmedidas").empty();
    $("#validacionmedidas").prepend("<option value='4'>2 metros x 3 metros</option>");
    $("#validacionmedidas").prepend("<option value='3'>2 metros x 2 metros</option>");
    $("#validacionmedidas").prepend("<option value='2'>1 metro x 3 metros</option>");
    $("#validacionmedidas").prepend("<option value='1'>1 metro x 2 metros</option>");
    $("#validacionlargo").empty();
    $("#validacionlargo").prepend("<option value='8'>40 mm Espesor</option>");
    $("#validacionlargo").prepend("<option value='7'>36 mm Espesor</option>");
    $("#validacionlargo").prepend("<option value='6'>30 mm Espesor</option>");
    $("#validacionlargo").prepend("<option value='5'>26 mm Espesor</option>");
    $("#validacionlargo").prepend("<option value='4'>22 mm Espesor</option>");
    $("#validacionlargo").prepend("<option value='3'>20 mm Espesor</option>");
    $("#validacionlargo").prepend("<option value='2'>16 mm Espesor</option>");
    $("#validacionlargo").prepend("<option value='1'>10 mm Espesor</option>");
  }
  if($("#validacionforma").val()==2)
  {
    $("#validacionlargog").text("Largo");
    $("#validacionmedidas").empty();
    $("#validacionmedidas").prepend("<option value='8'>50 cm x 50 cm</option>");
    $("#validacionmedidas").prepend("<option value='7'>40 cm x 40 cm</option>");
    $("#validacionmedidas").prepend("<option value='6'>30 cm x 50 cm</option>");
    $("#validacionmedidas").prepend("<option value='5'>30 cm x 40 cm</option>");
    $("#validacionmedidas").prepend("<option value='4'>30 cm x 30 cm</option>");
    $("#validacionmedidas").prepend("<option value='3'>20 cm x 40 cm</option>");
    $("#validacionmedidas").prepend("<option value='2'>20 cm x 30 cm</option>");
    $("#validacionmedidas").prepend("<option value='1'>20 cm x 20 cm</option>");
    $("#validacionlargo").empty();
    $("#validacionlargo").prepend("<option value='6'>3 metros</option>");
    $("#validacionlargo").prepend("<option value='5'>2.5 metros</option>");
    $("#validacionlargo").prepend("<option value='4'>2 metros</option>");
    $("#validacionlargo").prepend("<option value='3'>1.5 metros</option>");
    $("#validacionlargo").prepend("<option value='2'>1 metro</option>");
    $("#validacionlargo").prepend("<option value='1'>0.5 metros</option>");
  }
  if($("#validacionforma").val()==3)
  {
    $("#validacionlargog").text("Largo");
    $("#validacionmedidas").empty();
    $("#validacionmedidas").prepend("<option value='8'>22 cm Diametro</option>");
    $("#validacionmedidas").prepend("<option value='7'>20 cm Diametro</option>");
    $("#validacionmedidas").prepend("<option value='6'>18 cm Diametro</option>");
    $("#validacionmedidas").prepend("<option value='5'>15 cm Diametro</option>");
    $("#validacionmedidas").prepend("<option value='4'>12 cm Diametro</option>");
    $("#validacionmedidas").prepend("<option value='3'>10 cm Diametro</option>");
    $("#validacionmedidas").prepend("<option value='2'>8 cm Diametro</option>");
    $("#validacionmedidas").prepend("<option value='1'>5 cm Diametro</option>");
    $("#validacionlargo").empty();
    $("#validacionlargo").prepend("<option value='6'>3 metros</option>"); 
    $("#validacionlargo").prepend("<option value='5'>2.5 metros</option>");
    $("#validacionlargo").prepend("<option value='4'>2 metros</option>");
    $("#validacionlargo").prepend("<option value='3'>1.5 metros</option>");
    $("#validacionlargo").prepend("<option value='2'>1 metro</option>");
    $("#validacionlargo").prepend("<option value='1'>0.5 metros</option>");
  }
}
function quitar(){
  carrito.filter(x =>x.tipo != item.tipo && x.forma != item.forma && x.medidas != item.medidas && x.acabado != item.acabado && x.espesor != item.espesor)
  guardarCarrito(carrito);
}
function agre(){
  let item = {tipo: $("#validacionmadera option:selected").text(), 
              forma: $("#validacionforma option:selected").text(), 
              medidas: $("#validacionmedidas option:selected").text(),
              acabado: $("#validacionacabado option:selected").text(),
              espesor: $("#validacionlargo option:selected").text(),
              cantidad: parseInt($("#validacionnumerom").val()),
              preciou: precioun,
              preciot: precioto
            }
  existente = carrito.find(x => x.tipo == item.tipo && x.forma == item.forma && x.medidas == item.medidas && x.acabado == item.acabado && x.espesor == item.espesor)
  if(existente)
  {
    existente.cantidad = existente.cantidad + item.cantidad;
    existente.preciot = existente.preciot * existente.cantidad;
  }else{
    carrito.push(item);
  }
  guardarCarrito(carrito);
  console.log(carrito);
}
function precio(){
  let precio=0, preciot=0;
  switch ($("#validacionmadera").val())
  {
    case "1":
      precio=2000;
      break;
    case "2":
      precio=3500;
      break;
    case "3":
      precio=3000;
      break;
    case "4":
      precio=4200;
      break;
    case "5":
      precio=4700;
      break;
    case "6":
      precio=5300;
      break;
  }
  switch ($("#validacionforma").val())
  {
    case "1":
      precio = precio * 2;
      break;
    case "2":
      precio = precio * 1.5;
      break;
    case "3":
      precio=precio * 1.2;
      break;
    default:
      break;  
  }
  if($("#validacionforma").val()==1)
  {
    switch ($("#validacionmedidas").val())
    {
      case "1":
        precio=precio * 2;
        break;
      case "2":
        precio=precio * 3;
        break;
      case "3":
        precio=precio * 4;
        break;
      case "4":
        precio=precio * 5;
        break;
      default:
        break;
    }
    switch ($("#validacionlargo").val())
    {
      case "1":
        precio = precio * 1.1;
        break;
      case "2":
        precio = precio * 1.2;
        break;
      case "3":
        precio = precio * 1.3;
        break;
      case "4":
        precio = precio * 1.4;
        break;
      case "5":
        precio = precio * 1.5;
        break;
      case "6":
        precio = precio * 1.6;
        break;
      case "7":
        precio = precio * 1.7;
        break;
      case "8":
        precio = precio * 1.8;
        break;
      default:
        break
    } 
  }else{
    switch ($("#validacionmedidas").val())
    {
      case "1":
        precio=precio * 1.1;
        break;
      case "2":
        precio=precio * 1.2;
        break;
      case "3":
        precio=precio * 1.3;
        break;
      case "4":
        precio=precio * 1.4;
        break;
      case "5":
        precio=precio * 1.5;
        break;
      case "6":
        precio=precio * 1.6;
        break;
      case "7":
        precio=precio * 1.7;
        break;
      case "8":
        precio=precio * 1.8;
        break;
      default:
        break;
    }
    switch ($("#validacionlargo").val())
  {
    case "1":
      precio = precio * 1;
      break;
    case "2":
      precio = precio * 1.5;
      break;
    case "3":
      precio = precio * 2;
      break;
    case "4":
      precio = precio * 2.5;
      break;
    case "5":
      precio = precio * 3;
      break;
    case "6":
      precio = precio * 3.5;
      break;
    default:
      break
  }
  }
  switch ($("#validacionacabado").val())
  {
    case "1":
      precio = precio * 1.2;
      break;
    case "2":
      precio = precio * 1.3;
      break;
    case "3":
      precio = precio * 1;
      break;
    case "4":
      precio = precio * 1.1;
      break;
    default:
      break;
  }
  if(parseInt($("#validacionnumerom").val())>=0)
  {
    preciot=precio*parseInt($("#validacionnumerom").val())
  }else{

  }
  precioun=precio;
  precioto=preciot
  $("#preciopu").text("$"+new Intl.NumberFormat('de-DE').format(precio));
  $("#preciot").text("$"+new Intl.NumberFormat('de-DE').format(preciot));
  console.log($("#preciopu").text())

}
function validacion(){
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
  if (!form.checkValidity()) {
    form.classList.add('was-validated')
  }else
  {
    const toastLiveExample = document.getElementById('liveToast');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()
    form.classList.remove('was-validated')
    document.getElementById("formulario").reset();
  }
  })
}

function recuperarCarrito(){
  let carrito = localStorage.getItem("carrito");
  if(carrito){
     // El carrito está guardado como texto, hay que convertirlo a un array de objetos
    return JSON.parse(carrito);
  } else {
    return [];
  }
}
let carrito = recuperarCarrito();
  // Guarda el carrito en el localStorage
function guardarCarrito(carrito){
    // El carrito debe ser convertido a texto para poder guardarlo en el localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
$(document).ready(function(){
  compra();
  precio();
})