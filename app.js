const input = document.getElementById("todo");
const add = document.getElementById("add");
const del = document.getElementById("delete");
const list = document.getElementById("list");

const doList = [];

add.addEventListener("click", () => {
  if (!input.value) {
    alert("Don't you have anythink to do today");
  } else {
    list.innerHTML += `<li id="too2">
        <button class="acc btn btn-info">
        <i class="bi bi-calendar-check"></i>
        <button class="dcc btn btn-danger">
        <i class="bi bi-calendar-x-fill"></i>
        </button> ${input.value}
      </li>`;
    doList.push(input.value);
    input.value = "";
    input.focus();
    document.querySelectorAll(".acc").forEach((e) => {
      //   e.preventDefault;
      e.addEventListener("click", () => {
        e.parentElement.classList.toggle("text-danger");
      });
    });
    document.querySelectorAll(".dcc").forEach((e) => {
      e.preventDefault;
      e.addEventListener("click", () => {
        e.parentElement.remove();
      });
    });
  }
});

del.addEventListener("click", () => {
  list.innerHTML = "";
});
