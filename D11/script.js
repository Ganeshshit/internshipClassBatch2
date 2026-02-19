function addField() {
    const labelText = document.getElementById("labelName").value;
    const type = document.getElementById("inputType").value;

    if (labelText.trim() === "") {
        alert("Enter label name");
        return;
    }

    const form = document.getElementById("dynamicForm");

    const div = document.createElement("div");

    const label = document.createElement("label");
    label.innerText = labelText + ": ";
    const input = document.createElement("input");
    input.type = type;
    input.name = labelText.toLowerCase().replace(/\s/g, "");
    div.appendChild(label);
    div.appendChild(input);

    form.appendChild(div);

    document.getElementById("labelName").value = "";
}
