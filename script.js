document.querySelectorAll('.faq__question').forEach((question) => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;

        // Скрываем все ответы, кроме текущего
        document.querySelectorAll('.faq__item').forEach((item) => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });

        // Переключаем активный класс для текущего элемента
        faqItem.classList.toggle('active');
    });
});