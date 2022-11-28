document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "remove") {
    const id = event.target.dataset.id;

    remove(id).then(() => {
      event.target.closest("li").remove();
    });
  }
});

async function remove(id) {
  await fetch(`/${id}`, { method: "DELETE" });
}

document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "edit") {
    let textNote = event.target
      .closest("li")
      .querySelector(".edit").textContent;
    const id = event.target.dataset.id;

    let editNote = prompt("Введите новое значение", `${textNote}`);

    edit(id, editNote).then(() => {
      event.target.closest("li");
    });
  }
});

async function edit(id, editNote) {
  await fetch(`/${id}`, {
    method: "PUT",
    body: JSON.stringify(editNote),
    credentials: "same-origin",
  });
}
