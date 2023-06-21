var body = document.body;
setTimeout(() => {
    sun.style.transition = 'background-color 2s';
    sun.style.backgroundColor = '';
    body.style.transition = 'background-color 2s';
    body.style.backgroundColor ='';
    moon.style.transition = 'background-color 2s';
    moon.style.backgroundColor = '';
    moon.style.opacity = '1';
}, 1000);
moon.addEventListener('click', () => {
    moon.style.backgroundColor = 'white'
    moon.style.opacity = '1';
    sun.style.backgroundColor = 'gray'
    sun.style.opacity = '0.1';
    body.style.backgroundColor = 'black';
})
sun.addEventListener('click', () => {
    sun.style.backgroundColor = 'yellow'
    sun.style.opacity = '1';
    moon.style.backgroundColor = 'gray'
    moon.style.opacity = '0.1';
    body.style.backgroundColor = 'lightblue';
})
