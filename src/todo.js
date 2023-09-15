const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoInputBtn = document.querySelector("#todo-form button");

const todo = document.querySelector(".todo-li");
// const todoText = document.querySelector(".todo-li p");
const todoCheckBtn = document.querySelector(".todo-li div button");

const TODOS_KEY = "todos";

let todos = [];

const localTodos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

// todo 등록 시간 노출 함수
const paintTime = () => {
  const time = new Date();

  const hours = String(time.getHours()).padStart(2, "0");
  const min = String(time.getMinutes()).padStart(2, "0");
  const sec = String(time.getSeconds()).padStart(2, "0");

  return `${hours}:${min}:${sec}`;
};

// todo li 생성하기
const paintTodo = (todoObj) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const div = document.createElement("div");
  const p = document.createElement("p");
  const button = document.createElement("button");

  const parsedTodos = JSON.parse(getTodos);

  const firstLi = todoList.querySelector("li:first-child");

  // 시간 불러오기
  if (parsedTodos && parsedTodos.length === todos.length) {
    span.innerText = todoObj.time;
  } else if (!parsedTodos || parsedTodos.length !== todos.length) {
    span.innerText = paintTime();
  }

  li.classList.add("todo-li");
  li.id = todoObj.id;

  // check true, false 불러오기
  if (parsedTodos && todoObj.done === false) {
    console.log(todoObj.done);
    li.classList.remove("done");
  } else if (parsedTodos && todoObj.done === true) {
    console.log(todoObj.done);
    li.classList.add("done");
  }

  button.addEventListener("click", doneTodo);
  p.innerText = todoObj.text;

  li.append(span, div);
  div.append(p, button);

  if (firstLi) {
    // li 생성할 때 스크롤 하단 고정위해서 제일 처음에 있는 li보다 위에 생성한다.
    todoList.insertBefore(li, firstLi);
  } else {
    todoList.appendChild(li);
  }
};

// todo done 관리하기
const doneTodo = (e) => {
  e.preventDefault();

  const getTodos = localStorage.getItem(TODOS_KEY);
  const todoLi = e.target.parentElement.parentElement;
  const parsedTodos = JSON.parse(getTodos);

  const findId = () => {
    parsedTodos.forEach((el) => {
      if (parseInt(todoLi.id) === el.id) {
        el.done = !el.done;
      }
    });
    console.log(parsedTodos);
    localTodos();
  };

  if (todoLi.classList.value === "todo-li") {
    todoLi.classList.add("done");
    findId();
    todos = parsedTodos;

    console.log(parsedTodos);
  } else if (todoLi.classList.value === "todo-li done") {
    todoLi.classList.remove("done");
    findId();
    todos = parsedTodos;
  }
  localTodos();
};

// todo input에 적은거 submit 하기
const handleTodoSubmit = (e) => {
  e.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";
  const todoObj = {
    text: newTodo,
    time: paintTime(),
    done: false,
    id: Date.now(),
  };
  paintTodo(todoObj);
  todos = [...todos, todoObj];
  localTodos();
};

const getTodos = localStorage.getItem(TODOS_KEY);

if (getTodos) {
  const parsedTodos = JSON.parse(getTodos);
  todos = parsedTodos;
  parsedTodos.forEach((el) => {
    console.log(el);
    paintTodo(el);
  });
}

todoForm.addEventListener("submit", handleTodoSubmit);
todoCheckBtn.addEventListener("click", doneTodo);
