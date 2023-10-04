document.getElementById("number").addEventListener('click', function(e) {
    var texto = e.target.innerText;
    navigator.clipboard.writeText(texto).then(function() {
        Swal.fire({
            title: 'Texto copiado para a área de transferência.',
            text: 'Obrigado pelo acesso!',
            icon: 'success',
            confirmButtonText: 'Fechar'
        });
    })
});
document.getElementById("email").addEventListener('click', function(e) {
    var texto = e.target.innerText;
    navigator.clipboard.writeText(texto).then(function() {
        Swal.fire({
            title: 'Texto copiado para a área de transferência.',
            text: 'Obrigado pelo acesso!',
            icon: 'success',
            confirmButtonText: 'Fechar'
        });
    })
});
document.getElementById("result").addEventListener('click', function(e) {
    var texto = e.target.innerText;
    navigator.clipboard.writeText(texto).then(function() {
        Swal.fire({
            title: 'Resultado copiado para a área de transferência.',
            text: 'Obrigado pelo acesso!',
            icon: 'success',
            confirmButtonText: 'Fechar'
        });
    })
});
