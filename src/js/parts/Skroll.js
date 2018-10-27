function skroll() {
    let li = document.getElementsByTagName('li');
    let ul = document.querySelector('.container'),
        contacts = document.getElementById('contacts'),
        price = document.getElementById('price'),
        photo = document.getElementById('photo'),
        about = document.getElementById('about');

    ul.addEventListener('click', function (event) {
        event.preventDefault();
        let target = event.target;
        if (event.target.hash) {
            let poz = document.querySelector(target.hash).getBoundingClientRect();
            if (poz.top < 0) {
                requestAnimationFrame(scrollUp);
            } else {
                requestAnimationFrame(scrollDown);
            }
        }

        function scrollUp() {
            let poz = document.querySelector(target.hash).getBoundingClientRect();
            if (poz.top < 0) {
                scrollBy(0, -50);
                requestAnimationFrame(scrollUp);
            }
        }

        function scrollDown() {
            let poz = document.querySelector(target.hash).getBoundingClientRect();
            if (poz.top > 0) {
                scrollBy(0, 50);
                requestAnimationFrame(scrollDown);
            }
        }
    });
}

export default skroll;