// Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
const formElement = document.querySelector('#formulario');


/* 7471851975 */

var id = 0;
let pacientesList = [];
formElement.addEventListener('submit', (event) => {

    // prevenir el envio del formulario
    event.preventDefault();
    id++;
    const radiosList = event.target.doctor;
    const statusElemnt = Array.from(radiosList).find(element => element.checked);
    
    /* const checkList = event.target.tipoPaciente.checked;

    if(checkList){
        console.log("si");
    }else{
        console.log("no");
    } */

    var nombre = event.target.nombre.value;
    var phone = event.target.phone.value;
    var motivo = event.target.motivo.value;
    var fecha = event.target.datepicker.value;
    var hora = event.target.timepicker.value;
    var tipoPaciente = event.target.tipoPaciente.value;
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



    //pacientesList = JSON.parse(localStorage.getItem("pacientesList"));

    pacientesList.push(pacientes);
   /*  pacientesList.push({
        id: id,
        nombre: nombre,
        phone: phone,
        motivo: motivo,
        fecha: fecha,
        hora: hora,
        doctor: doctor,
        tipoPaciente: tipoPaciente,
    }); */
    //  localStorage.setItem("pacientesList");


    console.log(pacientesList);

    /*  */


});

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

var data = [{
    "id": 1,
    "Name": "Kamba",
    "Phone": "30-(541)656-1685",
    "DTMF": 757
}, {
    "id": 2,
    "Name": "Feedmix",
    "Phone": "967-(362)975-4248",
    "DTMF": 198
}, {
    "id": 3,
    "Name": "Thoughtstorm",
    "Phone": "358-(619)930-2339",
    "DTMF": 252
}, {
    "id": 4,
    "Name": "Shufflebeat",
    "Phone": "86-(776)437-7364",
    "DTMF": 689
}, {
    "id": 5,
    "Name": "Reallinks",
    "Phone": "55-(689)180-3162",
    "DTMF": 173
}, {
    "id": 6,
    "Name": "Digitube",
    "Phone": "1-(504)256-2986",
    "DTMF": 799
}, {
    "id": 7,
    "Name": "Nlounge",
    "Phone": "62-(928)582-6766",
    "DTMF": 477
}, {
    "id": 8,
    "Name": "Aimbu",
    "Phone": "33-(573)429-4209",
    "DTMF": 445
}, {
    "id": 9,
    "Name": "Mydo",
    "Phone": "370-(167)136-2174",
    "DTMF": 854
}, {
    "id": 10,
    "Name": "Tagcat",
    "Phone": "46-(159)429-8509",
    "DTMF": 859
}];
/*  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal1').modal();
   
    Materialize.updateTextFields();
  }); */
/* 
Dynamic creation of table is not the best practice...
Better way to clone existing table and fill it with data.
*/
$(data).each(function (i, elem) {
    $('.table').append('<tr><td>' + elem['Name'] +
        '</td><td>' + elem['Phone'] + '</td><td>' +
        elem['DTMF'] + '</td><td>' +
        '\
      <a href="#edit=' + elem['id'] + '"data-target="modal1" class="btn-floating waves-effect waves-light orange btn modal-trigger hoverable"><i class="material-icons">edit</i>\
          </a> \
      <a href="#delete=' + elem['id'] + '" class="btn-floating waves-effect waves-light red hoverable"><i class="material-icons">delete</i>\
          </a> \
                           </td></tr>')
});

$('.btn-floating.orange').on('click', function () {
    console.log('Orange');
    $('#modal1').modal('open');
    // Get all TD from the cliked Button
    var td = $(this).parents('tr').find('td:lt(3)');
    // $td.each(function(i){
    // Only the $() makes this td Object of DOM
    $('#name').val($(td[0]).text());
    $('#phone').val($(td[1]).text());
    $('#dtmf').val($(td[2]).text());
    // })
});

// Delete Button Done!!!
$('.btn-floating.red').on('click', function () {
    $(this).parents('tr').remove();
})


/* date */
$(function () {
    $("#datepicker").datepicker();
});

/* $(function() {
  $('#timepicker').timepicker();
}); */
/* Timer */

//Time Picker:
/* $('.timepicker').pickatime({
    default: 'now',
    twelvehour: false, // change to 12 hour AM/PM clock from 24 hour
    donetext: 'OK',
    autoclose: false,
    vibrate: true // vibrate the device when dragging clock hand
}); */

/* M.Datepicker.init(document.querySelectorAll(".datepicker"), {
  format: "dd-mm-yyyy",
  showClearBtn: true,
  onClose: function() {
    var newDate = $(this.el).parent().find('.datepicker').val();
    $(this.el).parent().find('input[type!=hidden]').val(newDate);          
  }
});
$(".datepicker-prefix .prefix").click(function() {
  $(this)
    .parent()
    .find(".datepicker")
    .datepicker("open");
});
$(".datepicker-prefix")
  .find("input[type!=hidden]")
  .change(function() {
    if ($(this).val() != "") {
      var comps = $(this)
        .val()
        .split("-");
      // change code below to match your format needs
      var date = new Date(
        parseInt(comps[2]),
        parseInt(comps[1]) - 1,
        parseInt(comps[0])
      );
      $(this)
        .parent()
        .find(".datepicker")
        .datepicker("setDate", date);
    }
  });
 
M.Timepicker.init(document.querySelectorAll(".timepicker"), {
  twelveHour: false, // this feature doesn't work on 12-hour picker
  showClearBtn: true,
  onCloseEnd: function() {
    var newTime = $(this.el).parent().find('.timepicker').val();
    $(this.el).parent().find('input[type!=hidden]').val(newTime);          
  }
});
$(".timepicker-prefix .prefix").click(function() {
  $(this)
    .parent()
    .find(".timepicker")
    .timepicker("open");
});
$(".timepicker-prefix")
  .parent()
  .find("input[type!=hidden]")
  .change(function() {
    $(this)
      .parent()
      .find(".timepicker")
      .val($(this).val());
  });
 */
