const form = document.getElementById('form-validacao');
const numeroA = document.getElementById('campo-a');
const numeroB = document.getElementById('campo-b');
const mensagemSucesso = `Seu numero foi validado`;
const mensagemErro = `O número B precisa ser maior que o numero A`;

function validaCampo(numeroA,numeroB) {
    return numeroB > numeroA
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = document.getElementById('campo-a');
    const numeroB = document.getElementById('campo-b');
    const mensagemSucesso = `Seu numero foi validado`;
    const mensagemErro = `O número B precisa ser maior que o numero A`;

    formEValido = validaCampo(numeroA.valueAsNumber,numeroB.valueAsNumber)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.getElementsByClassName.display = 'block';
        numeroA.value=' ';
        numeroB.value=' ';
        
    } else {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.getElementsByClassName.display = 'block';
        numeroA.style.border='1px solid red';        
        
    }
})

numeroB.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaCampo(numeroA.valueAsNumber,numeroB.valueAsNumber);
    const containerMensagemErro = document.querySelector('.error-message');
    const containerMensagemSucesso = document.querySelector('.success-message');

    if (!formEValido) {
        numeroA.style.border='1px solid red';
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display='block';
        containerMensagemSucesso.style.display='none';

    }else {
        numeroA.style.border='1px solid';
        containerMensagemErro.style.display='none';
        containerMensagemSucesso.style.display='block';
    }    
});