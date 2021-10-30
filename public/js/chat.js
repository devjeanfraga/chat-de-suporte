/*
let socket_admin_id = null;
let emailUser = null;
let socket = null;
*/


document.querySelector("#start_chat").addEventListener("click", (event) => {
  const socket = io();

  const chat_help = document.getElementById("chat_help");
  chat_help.style.display = "none";

  const chat_in_support = document.getElementById("chat_in_support");
  chat_in_support.style.display = "block";

  const email = document.getElementById('email').value;
  const text = document.getElementById('txt_help').value;

  //Emissão de eventos com websockets
  socket.on("connect", () => {
    const params = { email, text } 
    socket.emit("client_first_access", params, (call, err) => {
      if(err) {
        console.log(err);
      } else  {
        console.log(call);
      }
    });
  });

}); //fim querySelector
