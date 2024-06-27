document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы

        // Ваш код валидации здесь
        let email = form.email.value;
        let password = form.password.value;

        // Пример простой валидации (проверка наличия email и пароля)
        if (email.trim() === '' || password.trim() === '') {
            alert('Введите email и пароль');
            return;
        }

        // Если валидация прошла успешно, переходим на страницу demo.html
        window.location.href = 'demo.html';
    });
});