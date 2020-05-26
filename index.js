let buttons = document.querySelectorAll('.navigation li a button')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            // event.preventDefault()
            var current = document.getElementsByClassName('active-class');
            console.log(current)

            if (current.length > 0) {
                console.log(current[0])
                current[0].classList.remove('active-class')
            }

            this.classList.add('active-class')
        });
    }