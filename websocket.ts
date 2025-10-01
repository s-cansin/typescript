const socket: WebSocket = new WebSocket('wss://echo.websocket.org');

socket.addEventListener('open', (event: Event): void => {
  console.log('✅Connected:', event);
  socket.send('Hi, this is the packet to send and will return back.');
});


socket.addEventListener('message', (event: MessageEvent<string>): void => {
  console.log('Incoming Message:', event.data);
});

socket.addEventListener('error', (event: Event): void => {
  console.log('⚠️ Websocket Error:', event);
});

socket.addEventListener('close', (event: CloseEvent): void => {
  console.log('❌ Connection Closed:', event.code);
});