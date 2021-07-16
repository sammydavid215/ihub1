const uiii = document.getElementById('users');
const ui = document.getElementById('users');
fetch('https://jsonplaceholder.typicode.com/todos')
.then((resp) => resp.json())
.then(function(todos) {
       return todos.map((todo) => {
        // <li class="">A third item</li>
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = todo.title;
        console.log(todo);
           
            let ul =  document.querySelector('ul');
            ul.appendChild(li);
            
       });
       })

.catch(function(error){
       console.log(error);});