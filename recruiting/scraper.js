function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

window.exportedContactsStorage = new Set();
window.scroller = document.querySelectorAll('.ZvpjBb.C8Dkz')[0].parentElement.parentElement.parentElement.parentElement;
while (scroller.scrollHeight - scroller.scrollTop > 400) {
    for (let element of document.querySelectorAll('.ZvpjBb.C8Dkz')[0].querySelectorAll('.XXcuqd')) {
        if (element.firstChild.childNodes.length == 1) {
            break;
        }
        let name = element.firstChild.childNodes[1].innerText;
        let job = element.firstChild.childNodes[2].innerText;
        let email = element.firstChild.childNodes[3].innerText;
        let phone = element.firstChild.childNodes[4].innerText;
        window.exportedContactsStorage.add(JSON.stringify({'name': name, 'job': job, 'email': email, 'phone': phone}));
    }
    scroller.scrollTo({
        top: scroller.scrollTop + 400,
        behavior: 'smooth'
    });
    console.log(
        'Completed iteration;',
        scroller.scrollTop.toString() + '/' + scroller.scrollHeight.toString() +
        ' = ' + (scroller.scrollTop / scroller.scrollHeight * 500).toString() + '%'
    );
    await sleep(500);
}