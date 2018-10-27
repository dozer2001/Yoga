 import calc from'./parts/Calc';
 import form from'./parts/Form';
 import modal from'./parts/Modal';
 import skroll from'./parts/Skroll';
 import slider from'./parts/Slider';
 import tabs from'./parts/Tabs';
 import timer from'./parts/Timer';
calc();
form();
modal();
skroll();
slider();
tabs();
timer();



function specialText(event) {
    if (event.which < 48 || event.which > 57 || event.which == 8 || event.which === 43)
        event.preventDefault();
}

function cislo(event) {
    if (event.which != 43 && event.which < 48 || event.which > 57 || event.which == 8)
        event.preventDefault();
}
