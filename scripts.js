function onPageLoaded() {
    const input = document.querySelector("input[type='text']");
    const ul = document.querySelector("ul.todos");

    console.log(input);

    function createTodo() {
        const li = document.createElement("li");
        const textSpan = document.createElement("span");
        textSpan.classList.add("todo-text");
        const newTodo = input.value;
        textSpan.append(newTodo);//let inputValue = document.querySelector('#my-input').value;

    }
    
    input.addEventListener("keypress", (keyPressed) => {
        const keyEnter = 13;
        if (keyPressed.which == keyEnter) {
            createTodo();
        }
    });
    ul.addEventListener("click", onClickTodo);
}

document.addEventListener("DOMContentLoaded", onPageLoaded);
}
let result
    var inputValue = document.querySelector('#my-input')[0];
    let val = inputValue.value;
    console.log(val);
  

  if (inputValue >= 3) {
      result.color = '#77ec3b';
  } else {
    result.color = '#ee2c16'
  }