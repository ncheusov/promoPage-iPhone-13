const accordeon = () => {
    const chItems = document.querySelectorAll('.characteristics__item');

    chItems.forEach((item, index) => {
        const chButton = item.querySelector('.characteristics__title');
        
    const closeAccordeonItem = (item) => {
        const chButton = item.querySelector('.characteristics__title'),
                chContent = item.querySelector('.characteristics__description');

            if (chContent.classList.contains('open')) {
                chContent.style.height = '';
            } else {
                chContent.style.height = chContent.scrollHeight + 'px';
            }
            chButton.classList.toggle('active');
            chContent.classList.toggle('open');
        };

        chButton.addEventListener('click', () => {
            chItems.forEach((closeItem, closeIndex) => {
                if (closeItem.querySelector('.characteristics__description').classList.contains('open') && index != closeIndex) {
                    closeAccordeonItem(closeItem);
                }
            });

            closeAccordeonItem(item);
        });
    });
};

accordeon();