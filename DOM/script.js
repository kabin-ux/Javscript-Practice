var istatus = document.querySelector('h5');

var btn = document.querySelector('#buy');

let flag = true;


    btn.addEventListener('click', () => {
        if (flag){
            istatus.innerHTML = 'Bought';
            istatus.style.color = 'green';
            btn.innerHTML = 'Remove';
            flag = false;
        }else{
            istatus.innerHTML = 'Guitar';
            istatus.style.color = 'red';
            btn.innerHTML = 'Buy';
            flag = true;
        }
});