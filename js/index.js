let cliente = {
    name: 'den',
    password: '123'
  }
function validateForm(){
    
     var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    if(name == cliente.name && password == cliente.password){
        window.location = "Cuentahabiente.html";
      }else{
        swal.fire({
          title: "Error",
          text: "Cuenta  o clave incorrecto",
        });
      }
}
//const elementForm = document.querySelector('#users');

   
/* lst=[{
    name:"den",
    password:"123"
},{
    name:"isa",
    password:"123"
}]; */
/* stringify convierte el objeto a string */
//localStorage.setItem("list",JSON.stringify(lst));
//lst= JSON.parse(localStorage.getItem("list"));
/* Indica que tipo de dato es */
//console.log(typeof(lst));
//console.log(localStorage.getItem("list"));
//console.log();
//console.log(lst);