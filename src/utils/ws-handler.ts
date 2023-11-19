export function handleWs(request: Request) {
  const { socket, response } = Deno.upgradeWebSocket(request);

  socket.onopen = () => {
    console.log("CONNECTED");
  };
  socket.onmessage = (event) => {
    console.log(`RECEIVED: ${event.data}`);
    socket.send("pong");
  };
  socket.onclose = () => console.log("DISCONNECTED");
  socket.onerror = (error) => console.error("ERROR:", error);

  return response;
}
