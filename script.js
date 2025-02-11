
function AddNewTask(){
    const inputValue = document.getElementById('Taskinput').value;
    
    addTaskDOM(inputValue);


    // Local storage save

    let tasks = JSON.parse(localStorage.getItem('task',)) || [];

    tasks.push('inputValue');

    localStorage.setItem('tasks', JSON.stringify(tasks));



    inputValue.value = '';
};



function addTaskDOM(inputValue){
    let ul = document.getElementById('UnoderList');

    let li = document.createElement('li');


    li.innerHTML = `
        <span>${inputValue}</span>
    `
    ul.appendChild(li)
};