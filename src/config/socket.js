import io from 'socket.io-client';

const socket = io('http://18.191.111.54:1337');
// const socket = io('http://10.0.2.2:1337');
socket.connect();
export default socket;
