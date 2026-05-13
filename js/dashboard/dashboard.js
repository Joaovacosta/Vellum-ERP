// Utilizaçao de IA

document.addEventListener('DOMContentLoaded', function() {
    
    const botoesVerificar = document.querySelectorAll('.btn-verificar');
    botoesVerificar.forEach(botao => {
        botao.addEventListener('click', function() {
            const titulo = this.parentElement.querySelector('strong')?.innerText || 'Notificação';
            alert('Abrindo verificação para: ' + titulo);
        });
    });

    const itensVenda = document.querySelectorAll('.item-venda');
    itensVenda.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.opacity = '0.9';
            this.style.transform = 'scale(1.02)';
            this.style.transition = '0.2s';
        });
        item.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
    });

    const linksVer = document.querySelectorAll('.link-ver, .ver-mais-link');
    linksVer.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Navegando para a seção completa...');
        });
    });

});