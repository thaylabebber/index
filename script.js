function alterarNome() {
    let trocarNome = document.getElementById('imputNome').value; 

    if (trocarNome === "") {
        alert('Digite um Nome')
    }else{
        document.getElementById('nomeUsuario').innerHTML = trocarNome;
    }
}