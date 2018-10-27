function form() {
    let statusMessage = document.createElement('div'),
        img = document.createElement('img'),
        phone = document.getElementsByName('phone');


    function SendForm(elem) {
        let form = document.querySelector(`${ elem}`),
            input = form.getElementsByTagName('input');
        phone.forEach(function (item) {
            item.addEventListener('keypress', function (event) {
                if (event.which < 48 || event.which > 57 || event.which == 8 || event.which === 43) {
                    event.preventDefault();
                }
                form.addEventListener('submit', function (event) {
                    event.preventDefault();
                    form.appendChild(statusMessage);
                    form.appendChild(img);
                    let formData = new FormData(form);

                    function postData() {
                        return new Promise(function (resolve, reject) {
                            let request = new XMLHttpRequest();
                            request.open('POST', 'server.php');
                            request.setRequestHeader('Content-Type', 'application/x-ww-form-urlencoded');

                            request.onreadystatechange = function () {
                                if (request.readyState < 4) {
                                    resolve();
                                } else if (request.readyState === 4 && request.status === 200) {
                                    resolve();
                                } else {
                                    reject();
                                }
                            };
                            request.send(formData);
                        });
                    }// End PostData
                    function clearInput() {
                        for (let i = 0; i < input.length; i++) {
                            input[i].value = '';
                        }
                    }
                    postData(FormData)
                        .then(() => {
                            img.src = "img/callBack.jpg";
                            img.style.paddingLeft = "17%";
                            img.style.paddingTop = "10px";
                            img.style.height = "30%";
                        })
                        .catch(() => img.src = "img/dog2.jpg")
                        .then(clearInput);
                });

            });
        });


    }
    SendForm('.main-form');
    SendForm('.contact-form');
}

export default form;