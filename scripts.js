document.getElementById('btninscrever').addEventListener('click', function(event) {
    event.preventDefault();  
    var email = document.getElementById('inputEmail4').value;
    var senhaoculta = "*********";
    var senha = document.getElementById('inputPassword4').value;

    alert(
        "Dados do Formulário"
        +"\n"
        +"\nO seu email é:" + email

        +"\nA sua senha é:" + senhaoculta
    );
});



