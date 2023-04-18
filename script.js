/* Integrantes del Grupo 10
MICHEL MERLO
RODRIGO EDUARDO
IVAN EZEQUIEL BORDONI
JULIÁN EZEQUIEL DURELLI */
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
    existente.preciot = existente.preciot + item.preciot;
  }else{
    carrito.push(item);
  }
  guardarCarrito(carrito);
  mostrarcarrito();
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
    preciot=precio * parseInt($("#validacionnumerom").val())
  }else{

  }
  precioun=precio;
  precioto=preciot;
  $("#preciopu").text("$ "+new Intl.NumberFormat('de-DE').format(precio));
  $("#preciot").text("$ "+new Intl.NumberFormat('de-DE').format(preciot));

}

function mostrarcarrito(){
    let salida="";
    carrito.forEach(x =>{
      salida += 
                `<div class="col-12 blancof my-2 p-3">
                  <div class="row justify-content-center text-center align-items-center">
                      <div class="col-10">
                        <div class="row justify-content-start text-start align-items-start">
                          <div class="col-3">
                            <label class="textocarrito">Tipo: </label>
                            <label class="textovalor">${x.tipo}</label>
                          </div>
                          <div class="col-3">
                            <label class="textocarrito">Forma: </label>
                            <label class="textovalor">${x.forma}</label>
                          </div>
                          <div class="col-3">
                            <label class="textocarrito">Medidas:</label>
                            <label class="textovalor">${x.medidas}</label>
                          </div>
                          <div class="col-3">
                            <label class="textocarrito">Acabado: </label>
                            <label class="textovalor">${x.acabado}</label>
                          </div>
                        </div>
                        <div class="row justify-content-start text-start align-items-start pt-4">
                          <div class="col-3">
                            <label class="textocarrito">Espesor: </label>
                            <label class="textovalor">${x.espesor}</label>
                          </div>
                          <div class="col-3">
                            <label class="textocarrito">Cantidad: </label>
                            <label class="textovalor">${x.cantidad}</label>
                          </div>
                          <div class="col-3">
                            <label class="textocarrito">Precio / Unidad: </label>
                            <label class="textovalor">$ ${new Intl.NumberFormat('de-DE').format(x.preciou)}</label>
                          </div>
                          <div class="col-3">
                            <label class="textocarrito">Precio Total: </label>
                            <label class="textovalor">$ ${new Intl.NumberFormat('de-DE').format(x.preciot)}</label>
                          </div>
                        </div>
                      </div>
                      <div class="col-1 m-0 p-0">
                        <div class="row justify-content-center text-center align-items-center m-0 p-0">
                          <div class="col-12 m-0 p-0">
                            <button type="button" class="btn" onclick="agregar1('${x.tipo}','${x.forma}','${x.medidas}','${x.acabado}','${x.espesor}')"><i class="las la-plus iconoc"></i></button>  
                          </div>
                          <div class="col-12 m-0 p-0">
                            <button type="button" class="btn" onclick="quitar1('${x.tipo}','${x.forma}','${x.medidas}','${x.acabado}','${x.espesor}')"><i class="las la-minus iconoc"></i></button>
                          </div>
                        </div>
                      </div>
                      <div class="col-1 m-0 p-0">
                          <div class="row justify-content-center text-center align-items-center m-0 p-0">
                            <div class="col-12 m-0 p-0">
                              <button type="button" class="btn" onclick="quitar('${x.tipo}','${x.forma}','${x.medidas}','${x.acabado}','${x.espesor}')"><i class="las la-trash iconoc"></i></button>
                            </div>
                          </div>
                      </div>
                  </div>
                </div>`
    })
    $("#lista").html(salida);
}

function quitar1(tipo,forma,medidas,acabado,espesor){
  
  existente = carrito.find(item => item.tipo == tipo && item.forma == forma && item.medidas == medidas && item.acabado == acabado && item.espesor == espesor);
  existente.cantidad--;
  existente.preciot = existente.preciot-existente.preciou;

  carrito = carrito.filter(item => item.cantidad > 0);

  guardarCarrito(carrito);
  mostrarcarrito();

}

function agregar1(tipo,forma,medidas,acabado,espesor){
  
  existente = carrito.find(item => item.tipo == tipo && item.forma == forma && item.medidas == medidas && item.acabado == acabado && item.espesor == espesor);
  existente.cantidad++;
  existente.preciot = existente.preciot+existente.preciou;
  guardarCarrito(carrito);
  mostrarcarrito();

}
function quitar(tipo,forma,medidas,acabado,espesor){
  
  existente = carrito.find(item => item.tipo == tipo && item.forma == forma && item.medidas == medidas && item.acabado == acabado && item.espesor == espesor);
  existente.cantidad=0;
  carrito = carrito.filter(item => item.cantidad > 0);
  guardarCarrito(carrito);
  mostrarcarrito();

}
function comprarprimera(){
  $("#primeraparte").addClass('nomostrar');
  $("#segundaparte").removeClass('nomostrar');
}

function volverprimera(){
  $("#primeraparte").removeClass('nomostrar');
  $("#segundaparte").addClass('nomostrar');
}
function volversegunda(){
  $("#segundaparte").removeClass('nomostrar');
  $("#terceraparte").addClass('nomostrar');
}
function volvertercera(){
  $("#terceraparte").removeClass('nomostrar');
  $("#cuartaparte").addClass('nomostrar');
}
function volvercuarta(){
  $("#cuartaparte").removeClass('nomostrar');
  $("#finalizar").addClass('nomostrar');
}
function validacionprimera(){
  const forms = document.querySelectorAll('.needs-validation1');
  Array.from(forms).forEach(form => {
  if (!form.checkValidity()) {
    form.classList.add('was-validated')
  }else
  {
    $("#segundaparte").addClass('nomostrar');
    $("#terceraparte").removeClass('nomostrar');
  }
  })
}
function validacionsegunda(){
  const forms = document.querySelectorAll('.needs-validation3');
  Array.from(forms).forEach(form => {
  if (!form.checkValidity()) {
    form.classList.add('was-validated')
  }else
  {
    $("#terceraparte").addClass('nomostrar');
    $("#cuartaparte").removeClass('nomostrar');
  }
  })
}
function validaciontercera(){
  const forms = document.querySelectorAll('.needs-validation44');
  Array.from(forms).forEach(form => {
  if (!form.checkValidity()) {
    form.classList.add('was-validated')
  }else
  {
    $("#cuartaparte").addClass('nomostrar');
    $("#finalizar").removeClass('nomostrar');
  }
  })
}
function tarjeta(){
  if($("#tarjetat").val()==1)
  {
    $("#validacionltt").addClass('nomostrar');
  }else{
    $("#validacionltt").removeClass('nomostrar');
  } 
}
function mostrarresumen(){
  let salida="";
  carrito.forEach(x =>{
    salida += 
              `<div class="col-12 blancof my-2 p-3">
                <div class="row justify-content-center text-center align-items-center">
                    <div class="col-10">
                      <div class="row justify-content-start text-start align-items-start">
                        <div class="col-3">
                          <label class="textocarrito">Tipo: </label>
                          <label class="textovalor">${x.tipo}</label>
                        </div>
                        <div class="col-3">
                          <label class="textocarrito">Forma: </label>
                          <label class="textovalor">${x.forma}</label>
                        </div>
                        <div class="col-3">
                          <label class="textocarrito">Medidas:</label>
                          <label class="textovalor">${x.medidas}</label>
                        </div>
                        <div class="col-3">
                          <label class="textocarrito">Acabado: </label>
                          <label class="textovalor">${x.acabado}</label>
                        </div>
                      </div>
                      <div class="row justify-content-start text-start align-items-start pt-4">
                        <div class="col-3">
                          <label class="textocarrito">Espesor: </label>
                          <label class="textovalor">${x.espesor}</label>
                        </div>
                        <div class="col-3">
                          <label class="textocarrito">Cantidad: </label>
                          <label class="textovalor">${x.cantidad}</label>
                        </div>
                        <div class="col-3">
                          <label class="textocarrito">Precio / Unidad: </label>
                          <label class="textovalor">$ ${new Intl.NumberFormat('de-DE').format(x.preciou)}</label>
                        </div>
                        <div class="col-3">
                          <label class="textocarrito">Precio Total: </label>
                          <label class="textovalor">$ ${new Intl.NumberFormat('de-DE').format(x.preciot)}</label>
                        </div>
                      </div>
                    </div>
                </div>
              </div>`
  })
  $("#lista2").html(salida);
}
function borrar(){
  carrito = carrito.filter(item => item.cantidad<0);
  guardarCarrito(carrito);
  mostrarcarrito();
}
let empleadost=[];
//pedir empleados a la api
$.ajax({
    url: 'https://reqres.in/api/users?page=1',
    method: 'GET',
    success: function(empleados1) {
      empleadost = empleadost.concat(empleados1.data);
      if(empleadost.length==12)
      {
        cargarEmpleados(empleadost)
      }
    },
    error: function(error) {
      console.error(error);
    }
  });
  //pedir clientes a la api
  $.ajax({
    url: 'https://reqres.in/api/users?page=2',
    method: 'GET',
    success: function(empleados2) {
      empleadost = empleadost.concat(empleados2.data);
      if(empleadost.length==12)
      {
        cargarEmpleados(empleadost)
      }
    },
    error: function(error) {
      console.error(error);
    }
  });
  function cargarEmpleados(empleados){
    for (let i = 0; i < empleados.length; i++) {
        $("#img"+(i+1)).attr("src", empleados[i].avatar);
        $("#nombre"+(i+1)).text(empleados[i].first_name+ ", "+empleados[i].last_name);
        $("#email"+(i+1)).text(empleados[i].email)
    }
  }

  function direccion(){
    if($("#dire").val()==1)
    {
      $(".validationl").prop('disabled',false);
      $(".validationl").prop('required',true);
    }else{
      $(".validationl").prop('disabled',true);
      $(".validationl").prop('required',false);
    } 
  }
 function pdf(){  
  let y=10;
  console.log(jsPDF);
  const doc = new jsPDF();
  let img= new Image();
  img.src = "Imagenes/logo11.png"
  img.onload = function(){
    doc.addImage(img,"PNG",20,y,80,60);
    y+=70;
  }
  doc.setFontSize(20);
  doc.text("Resumen de Compra",20,y);
  y+=10;
  doc.setFontSize(10);
  doc.text("Email: wooden@gmail.com Telefono: +54 9 3537 323232 ",20,y)
  y+=10;
  doc.setFontSize(10);
  doc.text("Facebook: WoodenOficial instagram: WoodenOficial Linkedin: Wooden",20,y)
  y+=10;
  doc.setFontSize(15);
  doc.text("Comprador",20,y);
  y+=10;
  doc.setFontSize(10);
  doc.text(`Nombre: ${$("#validationnombrec").val()} Apellido: ${$("#validationapellidoc").val()} Email: ${$("#validationemailc").val()} Telefono: ${$("#validationtelefonoc").val()}`,20,y)
  y+=10;
  doc.setFontSize(10);
  doc.text(`Pais: ${$("#validationpaisc").val()} Provincia: ${$("#validationprovinciac").val()} Ciudad: ${$("#validationciudadc").val()} Direccion: ${$("#validationdireccionc").val()}`,20,y)
  y+=10;
  if($("#tarjetat").val()==1)
  {
    doc.setFontSize(10);
    doc.text(`paga con: ${$("#tarjetat option:selected").text()}`,20,y);
  }else{
    doc.setFontSize(10);
    doc.text(`paga con: ${$("#tarjetat option:selected").text()} en ${$("#cuotas option:selected").text()}`,20,y);
  }
  y+=10;
  doc.setFontSize(20);
  y+=10;
  doc.text("Productos",20,y)
  y+=10
  let headers=[['Tipo','Forma','Medidas','Acabado','Espesor','Cantidad','Precio/u','Precio T']];
  let rows = [];
  carrito.forEach(x =>{
    let row =[ x.tipo,x.forma,x.medidas,x.acabado,x.espesor,x.cantidad,"$ "+new Intl.NumberFormat('de-DE').format(x.preciou),"$ "+new Intl.NumberFormat('de-DE').format(x.preciot)]
    rows.push(row);
  })
  let total=0;
  carrito.forEach(x =>{
    total += x.preciot;
  })
  let row1=[" "," "," "," "," "," "," ","$"+new Intl.NumberFormat('de-DE').format(total)]
  rows.push(row1);
  doc.autoTable({
    startX: 50,
    startY: y,
    head: headers,
    body: rows,
    theme: 'striped'
  });
  console.log("1")
  doc.save('ejemplo.pdf');
  /*doc.fromHTML(document.getElementById('contenido'), 15, 15);
  doc.save('ejemplo.pdf');*/
}   
function personales(){
  let salida1="",salida2="",salidatotal="";
  salida1=`Nombre: ${$("#validationnombrec").val()} Apellido: ${$("#validationapellidoc").val()} Email: ${$("#validationemailc").val()} Telefono: ${$("#validationtelefonoc").val()}`
  if($("#dire").val()==1)
  {
    salida2=`Pais: ${$("#validationpaisc").val()} Provincia: ${$("#validationprovinciac").val()} Ciudad: ${$("#validationciudadc").val()} Direccion: ${$("#validationdireccionc").val()}`
  }else
  {
    salida2=`Retira en la Empresa`;
  }
  $("#datospersonal").html(salida1);
  $("#datospersonal2").html(salida2);
  let total=0;
  carrito.forEach(x =>{
    total += x.preciot;
  });
  if($("#tarjetat").val()==1)
  {
    salidatotal=`Paga con ${$("#tarjetat option:selected").text()} el Precio Total: $${new Intl.NumberFormat('de-DE').format(total)}`;
  }else
  {
    salidatotal=`Paga con ${$("#tarjetat option:selected").text()} en ${$("#cuotas option:selected").text()} el Precio Total: $${new Intl.NumberFormat('de-DE').format(total)}`;
  }
  $("#total").html(salidatotal);
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
  mostrarcarrito();
})