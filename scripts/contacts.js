function openContactDialog() {
    const dialog = document.getElementById('contactDialog');
    dialog.showModal();
    document.body.style.overflow = 'hidden';
}

function closeContactDialog() {
    const dialog = document.getElementById('contactDialog');
    dialog.close();
    document.body.style.overflow = 'auto';
}

function contactViaWhatsApp() {
    const message = encodeURIComponent("Здравствуйте! Хочу связаться с вами по поводу проекта.");
    window.open(`https://wa.me/79002276790?text=${message}`, '_blank');
    closeContactDialog();
}

function contactViaTelegram() {
    window.open('https://t.me/BorisInCharge', '_blank');
    closeContactDialog();
}

function contactViaEmail() {
    const subject = encodeURIComponent("Запрос с сайта");
    const body = encodeURIComponent("Здравствуйте! Хочу обсудить с вами проект.");
    window.location.href = `mailto:hazikov2006@mail.ru?subject=${subject}&body=${body}`;
    closeContactDialog();
}

function scheduleCall() {
    alert('Функция планирования звонка будет реализована позже!');
}

function sendQuickMessage() {
    const message = document.getElementById('quickMessage').value;
    if (message.trim()) {
        alert('Сообщение отправлено! Я свяжусь с вами в ближайшее время.');
        document.getElementById('quickMessage').value = '';
        closeContactDialog();
    } else {
        alert('Пожалуйста, введите ваше сообщение');
    }
}

document.getElementById('contactDialog').addEventListener('click', function (event) {
    if (event.target === this) {
        closeContactDialog();
    }
});