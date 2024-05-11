let url = "http://localhost:8000";

function POSTData(todolist) {
  fetch("http://localhost:8000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      command: "sort",
      title: todolist,
    }),
  });
}
