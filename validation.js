/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript
    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.
    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

document.getElementById('form').addEventListener('submit',(event) =>{
  event.preventDefault();
  validate();
})

function validate()
{



const name = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');

var checkbox = document.getElementsByName("section");

var pattern = new RegExp("^[A-Z]{1}[a-z]{2,49}$");


if(!pattern.test(name.value)){
    name.setAttribute("class", "form-control is-invalid");
  }else{
        name.setAttribute("class", "form-control");
  }

if(!pattern.test(lastName.value)){
  lastName.setAttribute("class", "form-control is-invalid");
}else{
    lastName.setAttribute("class", "form-control");
}

// CHECKBOX VALIDATION

var check = false;

for(let i=0; i<4; i++){
  if(checkbox[i].checked)
  {
    check = true;
  }
}

if(!check){
    alert("Plese select one checkbox or more!");
}

}
