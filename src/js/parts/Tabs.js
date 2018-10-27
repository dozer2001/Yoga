function tabs() {
    let allTabs = document.querySelectorAll('.info-header-tab'),
        tabsHeader = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');


    function HideAllContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    HideAllContent(1);

    function ShowAllContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    tabsHeader.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < allTabs.length; i++) {
                if (target === allTabs[i]) {
                    HideAllContent(0);
                    ShowAllContent(i);
                    break;
                }
            }
        }
    });
}
module.exports = tabs;