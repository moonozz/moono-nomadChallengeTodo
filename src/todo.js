const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoInputBtn = document.querySelector("#todo-form button");

const todo = document.querySelector(".todo-li");
const todoCheck = document.querySelector(".todo-check");

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
  const form = document.createElement("form");
  const label = document.createElement("label");
  const input = document.createElement("input");

  span.innerText = paintTime();
  form.classList.add("todo-li");
  input.classList.add("todo-check");
  label.innerText = newTodo;

  li.append(span, form);
  // form.append(label, input);
  form.appendChild(label);
  form.appendChild(input);
  input.setAttribute("type", "checkbox");

  todoList.appendChild(li);
};

todoForm.addEventListener("submit", handleTodoSubmit);
