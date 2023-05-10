$(document).ready(function() {

    /*
    ----FORMA EXTENSA ADCIONAR UM EVENTO A UM ELEMENTO ---
    document.querySelector('header button').addEventListener('click', function(){ 
    
    })*/
    
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao_cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" tittle="Ver imagem em tamanho real">
                    Ver imagem em tamanho real 
                </a>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(3000);
            $('#endereco-imagem-nova').val('')
            
    })
})

