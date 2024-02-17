var arr = [
    {name: 'Petals of roses', image: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZXxlbnwwfHwwfHx8MA%3D%3D'},
    {name: 'Guitars', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHx8MHx8fDA%3D'},
    {name: 'Laptop', image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fHww'},
    {name: 'Learning', image: 'https://images.unsplash.com/photo-1611348586755-53860f7ae57a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhcm58ZW58MHx8MHx8fDA%3D'},
    {name: 'Reactjs', image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D'},
    {name: 'Relief', image: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlbGllZnxlbnwwfHwwfHx8MA%3D%3D'}
];

showtheCards =() => {
    var clutter = "";
    arr.forEach((obj) => {
        clutter += `<div class= 'box'> <img class= 'cursor-pointer' src = '${obj.image}' alt='image'/>
        <div class='caption'>Lorem ipsum </div>
        </div>`
    })

    document.querySelector('.container').innerHTML = clutter;
};

handleSearchFunctionality = () => {
    input = document.querySelector('#searchinput');
    //when input is clicked
    document.querySelector('#searchinput').addEventListener('focus', () => {
        document.querySelector('.overlay').style.display = 'block';
    })

    //when input is not clicked
    document.querySelector('#searchinput').addEventListener('blur', () => {
        document.querySelector('.overlay').style.display = 'none';
    })

    input.addEventListener('input', () => {
        const filteredArray = arr.filter((obj) => obj.name.toLowerCase().startsWith(input.value))

        var clutter = "";
        filteredArray.forEach((obj) => {
            clutter += `<div class= 'res flex px-8 py-3'> <i class= 'ri-search-line font-semibold mr-5'> </i> 
            <h3 class='font-semibold'> ${obj.name} </h3>
            </div>`
        })

        document.querySelector('.searchdata').style.display = 'block';
        document.querySelector('.searchdata').innerHTML = clutter;

    })
};


handleSearchFunctionality();
showtheCards();