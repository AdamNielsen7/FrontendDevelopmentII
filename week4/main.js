const form = document.forms['search']; //find DOM for form
const [input,button] = form.elements; //find elements of form


form.addEventListener ('submit', search, false); //search when form is submitted

function search(event) {
    alert(`You Searched for: ${input.value}`); //access value of form
    event.preventDefault(); //prevent default submission (useful when testing w/o backend)
}

input.value = 'Search Here'; //change default input value

input.addEventListener('focus', function(){ //when input is focused delete default value
    if (input.value==='Search Here') {
        input.value = '';
    }
}, false);

input.addEventListener('blur', function(){ //when input is empty delete default value
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);

form.addEventListener('keyup', disableSubmit, false); //every keypress run disableSubmit

function disableSubmit(event) { //disable submit if fields are empty
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}