const app = require('express')();
const http = require('http').Server(app);
const market = require('./market');
const io=require('socket.io')(http);
const cors=require('cors');


// for cross origin support
app.use(cors());

const port = 3000;
// for cross origin suporrt from express
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
// Endpoint that sends values to front-end
app.get('/api/market', (req, res) => {
  res.send(market.marketPositions);
});
// Timing to reset and emit the graph values by socket.io
setInterval(()=>{
  // market.updateMarket();
  io.sockets.emit('market',market.marketPositions[0]);
},2000);


io.on('connection', function (socket) {
    console.log('a user connected');
  });


http.listen(port, () => {
  console.log(`Listening on *:${port}`);
});