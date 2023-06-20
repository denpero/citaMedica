// Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
const formElement = document.querySelector('#formulario');




var id = 0;
//let pacientesList = [];
let pacientesList = localStorage.getItem('pacientesList') ? JSON.parse(localStorage.getItem('pacientesList')) : [];

formElement.addEventListener('submit', (event) => {

    // prevenir el envio del formulario
    event.preventDefault();
    
    id++;
    const radiosList = event.target.doctor;
    const statusElemnt = Array.from(radiosList).find(element => element.checked);
    // armar una estructura de datos, segun lo que necesitamos
    const pacientes = {
        id:id,
        nombre: event.target.nombre.value,
        phone: event.target.phone.value,
        motivo: event.target.motivo.value,
        fecha: event.target.datepicker.value,
        hora: event.target.timepicker.value,
        doctor:statusElemnt.value,
        tipoPaciente: event.target.tipoPaciente.checked,
    }
    pacientesList.push(pacientes);
    //pacientesList = JSON.parse(localStorage.getItem("pacientesList"));

    // limpiar la vista anterior
    cleanView();
    //localStorage.setItem("pacientesList", JSON.stringify(pacientesList));
    localStorage.setItem('pacientesList', JSON.stringify(pacientesList));

    /* var regresaList= localStorage.getItem('pacientesList');
    var aux=JSON.parse(regresaList);
      console.log(aux); */
    renderViewlanguages(pacientesList);
});


const cleanView = () => {
    formulario.innerHTML = '';
};
/* 7471851975 */
const  renderViewlanguages = (pacientesList) =>{
    pacientesList.forEach((element,index)=>{
        console.log(element['nombre']);
        $('.table').append('<tr><td>' + element['nombre'] +
        '</td><td>' + element['fecha'] + '</td><td>' +
        element['hora'] + '</td><td>' +
        '\
      <a href="#edit=' +element['id'] + '"data-target="modal1" class="btn-floating waves-effect waves-light orange btn modal-trigger hoverable"><i class="material-icons">edit</i>\
          </a> \
      <a href="#delete=' + element['id'] + '" id="btn-floating.red" name="btn-floating.red" class="btn-floating waves-effect waves-light red hoverable"><i class="material-icons">delete</i>\
          </a> \
                           </td></tr>')
    })

}
if(pacientesList.length){
    renderViewlanguages(pacientesList);
}

function salir() {
    Swal.fire({
        title: 'Regresara al inicio de sesión',
        icon: 'warning',
        confirmButtonText: 'Salir'
    }).then((result) => {
        if (result.value) {
            window.location = "index.html";
        } else {

        }
    })
}

$('.btn-floating.orange').on('click', function () {
    console.log('Orange');
    $('#modal1').modal('open');
    // Get all TD from the cliked Button
    var td = $(this).parents('tr').find('td:lt(3)');
    // $td.each(function(i){
    // Only the $() makes this td Object of DOM
    $('#nombre').val($(td[0]).text());
    $('#phone').val($(td[1]).text());
    $('#datepicker').val($(td[2]).text());
    $('#timepicker').val($(td[3]).text());
    // })
});

// Delete Button Done!!!
$('.btn-floating.red').on('click', function () {
    
})

function deleteData(index){
    var pacientesList;
    //pacientesList = Jso
}


/* date */
$(function () {
    $("#datepicker").datepicker();
});
/* Timer */
/* $(function() {
  $('#timepicker').timepicker();
}); */


/* $('.timepicker').pickatime({
    default: 'now',
    twelvehour: false, // change to 12 hour AM/PM clock from 24 hour
    donetext: 'OK',
    autoclose: false,
    vibrate: true // vibrate the device when dragging clock hand
}); */
