var container = document.querySelector('#container');
var heart = document.querySelector('i');

container.addEventListener('dblclick', () => {
    heart.style.transform = 'translate(-50%, -50%) scale(1)';
    setTimeout(() => {
        heart.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 1000);
});

