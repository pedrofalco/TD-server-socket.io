const socket = io();

socket.on("connect", () => {
    console.log(socket.id)
});

let input = document.createElement('input');
let btn = document.createElement("button");
btn.textContent = "Emit";

document.body.append(input, btn);

btn.onclick = () => {
    socket.emit("dataToTD", input.value);
    console.log(`mensaje emitido: ${input.value}`);
};

socket.on("dataFromTD", (data) => {
    console.log(`mensaje recibido: ${data}`);
});