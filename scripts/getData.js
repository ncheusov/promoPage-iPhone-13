const getData = () => {
    const list = document.querySelector('.cross-sell__list');

    console.log(list);

    const render = (data) => {
        list.innerHTML = '';
    };
    
    fetch('https://promopageiphone13-default-rtdb.firebaseio.com/db.json')
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Данные были получены с ошибкой!');
            }
        })
        .then((data) => {
            render(data);
        })
        .catch((error) => {
            console.error(error.message);
        });
};

getData();