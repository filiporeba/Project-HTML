const sdaInputs = document.querySelectorAll('.sda-input');
console.log('sdaInputs: ', sdaInputs);

for (let i = 0; i < sdaInputs.length; i++) {
    let currentlabel = sdaInputs[i].parentElement.firstElementChild;
    sdaInputs[i].addEventListener('focus', function () {
        currentlabel.classList.add('move-up');
    });

    sdaInputs[i].addEventListener('blur', function () {
        if (sdaInputs[i].value === '') {
            currentlabel.classList.remove('move-up');
        }
    });
}

function submitForm() {
    const form = document.contactForm;

    //wyswietlenie alertu przegladarkowego z parametrem jako 
    //laczenie stringa ze zmiennymi na dwa sposoby:
    alert('Your full name is: ' + form.name.value); // pierwszy sposób laczenia

}