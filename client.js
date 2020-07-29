
const connect = function() {
  let host = '135.23.222.131';
  let port = 50541;
  let obj = {
    host,
    port
  } 
  const conn = net.createConnection({ 
    obj
  });
}
module.exports = connect;