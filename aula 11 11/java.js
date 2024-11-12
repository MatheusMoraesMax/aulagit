function verRadios()
{
    let i;
    var elementos = document.getElementsByName('feliz');
    for (i=0; i< elementos.length; i++){
        if (elementos[i].checked){
            document.getElementById('radios').innerHTML =
            'voce' + elementos[i].value + ' é feliz';
        }

    }
}
function verselect()
{
    let selectElement = document.querySelector('#select1');
    let output = selectElement.value;
    document.querySelector('.output').textContent = output;
}
function verchecks() {  
let checkboxes= document.querySelectorAll('input[type="checkbox"]:checked');
let text= "";
for (let i=0; i<checkboxes.length; i++){
    text= `${text}, ${checkboxes[i].value}`;
}
document.getElementById('checkboxes').innerHTML = text;
}