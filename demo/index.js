import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
// Replace with the desired endpoint (standard or testnet)
const endpoint = "wss://ws-api.binance.com:443/ws-api/v3"; // Standard endpoint

// Function to handle incoming messages
function handlemessage(event) {
  const data = JSON.parse(event.data);
  console.log("Received message:", data);
  // Process the data received from Binance here
}

// Function to handle ping requests and send pong responses
function handlePing(event) {
  console.log("Received ping from Binance");
  stompClient.send("/sockjs/ping", {}, JSON.stringify(event.data));
}

// Create a SockJS connection with a fallback option
const sock = new SockJS(endpoint, null, { transports: ['websocket', 'xhr-polling'] });

// Initialize Stomp.js for message framing
const stompClient = Stomp.over(sock);

// Handle connection open/close events
stompClient.connect({}, function (frame) {
  console.log('Connected: ' + frame);
  // Send subscription message after connection is established
  const subscribeMessage = {
    "method": "SUBSCRIBE",
    "params": ["btcusdt@kline_1m"], // Subscribe to 1-minute Kline stream for BTCUSDT pair
    "id": 1, // Your unique identifier for the subscription
  };
  stompClient.send("/topic/market.btcusdt.kline.1m", {}, JSON.stringify(subscribeMessage));
}, function(error) {
  console.log('Could not connect: ' + error);
});

// Handle incoming messages
stompClient.subscribe("/topic/market.btcusdt.kline.1m", handlemessage);

// Handle ping requests using SockJS and Stomp.js
sock.onmessage = function(e) {
  if (e.data === '\u0000') {
    handlePing(e); // Handle ping from server
  } else {
    stompClient.IncomingMessage(e); // Process other messages through Stomp.js
  }
};
