const socket = io(); // creating connection

socket.on("countUpdated", (count) => {
  console.log("the count has been updated ...", count);
  const ele = document.getElementById("content");
  if (ele) ele.innerHTML = count;
});

document.querySelector("#increment").addEventListener("click", () => {
  console.log("Clicked");
  socket.emit("increment");
});
