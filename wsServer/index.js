const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3007 });


wss.on('connection', function connection(server) {
  console.log('A new client connected');
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
    ws.onmessage = (event)=>{
        const data = event.data;
        console.log(data)
        server.send(data)
    }
});