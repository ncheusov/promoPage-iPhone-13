const scrollFunc = () => {
    const links = document.querySelectorAll('.header-menu__item a'),
          linkDescr = document.querySelector('.card-details__link-characteristics');

    seamless.polyfill();

    links.forEach((element) => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScroll(element);
        });
    });

    linkDescr.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll(linkDescr);
    });

    let smoothScroll = (element) => {
        const id = element.getAttribute('href').substring(1);
            const section = document.getElementById(id);

            if (section) {
                seamless.elementScrollIntoView(section, {
                    behavior: "smooth",
                    block: "start"
                });
            } else {
                seamless.elementScrollIntoView(
                    document.querySelector("#characteristics"), 
                    {
                        behavior: "smooth",
                        block: "center",
                        inline: "center",
                    }
                );
            }
    };
};

scrollFunc();