function clock() {
    function criaHoraDosSegundos(seconds) {
        const data = new Date(seconds*1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    const clock = document.querySelector('.clock');
    let seconds = 0;
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(function() {
            seconds++;
            clock.innerHTML = criaHoraDosSegundos(seconds);
        }, 1000);
    }
    
    document.addEventListener('click', function(event) {
        const elemento = event.target;
    
        if(elemento.classList.contains('reset')) {
            clearInterval(timer);
            clock.innerHTML = '00:00:00';
            clock.classList.remove('paused');
            seconds = 0;
        }

        if(elemento.classList.contains('start')) {
            clock.classList.remove('paused');
            clearInterval(timer);
            iniciaRelogio();
        }

        if(elemento.classList.contains('pause')) {
            clearInterval(timer);
            clock.classList.add('paused');
        }
    });
}
clock();