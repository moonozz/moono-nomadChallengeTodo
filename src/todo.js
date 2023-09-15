const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoInputBtn = document.querySelector("#todo-form button");

const todo = document.querySelector(".todo-li");
const todoText = document.querySelector(".todo-li p");
const todoCheckBtn = document.querySelector(".todo-li button");

// todo input에 적은거 submit 하기
const handleTodoSubmit = (e) => {
  e.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";
  // console.log(newTodo);
  paintTodo(newTodo);
};

// todo 등록 시간 노출 함수
const paintTime = () => {
  const time = new Date();

  const hours = String(time.getHours()).padStart(2, "0");
  const min = String(time.getMinutes()).padStart(2, "0");

  return `${hours}:${min}`;
};

// todo li 생성하기
const paintTodo = (newTodo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const div = document.createElement("div");
  const p = document.createElement("p");
  const button = document.createElement("button");

  span.innerText = paintTime();
  div.classList.add("todo-li");
  button.classList.add("todo-check");
  button.addEventListener("click", doneTodo);
  p.innerText = newTodo;

  li.append(span, div);
  div.append(p, button);

  todoList.appendChild(li);
};

// todo done 관리하기
const doneTodo = (e) => {
  e.preventDefault();
  const txt = e.target.parentElement.children[0];

  if (e.target.className === "todo-check") {
    // todoText.className = "done";
    e.target.classList.add("todo-checked");
    e.target.classList.remove("todo-check");
    txt.className = "done";
  } else if (e.target.className === "todo-checked") {
    e.target.classList.add("todo-check");
    e.target.classList.remove("todo-checked");
    txt.classList.remove("done");
  }
};

todoForm.addEventListener("submit", handleTodoSubmit);
todoCheckBtn.addEventListener("click", doneTodo);
