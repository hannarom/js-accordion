const accordion = document.getElementsByClassName('content-box');

// Если не нужно, чтобы вкладки аккордеона закрывались при нажатии на другую:

// for(i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener('click', function() {
//         this.classList.toggle('active')
//     })
// }

if(accordion) {
    for(i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function() {
            if(this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                for(let el of accordion) {
                    el.classList.remove('active');
                }
                this.classList.add('active');
            }
        })
    }
}