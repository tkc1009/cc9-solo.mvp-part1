module.exports = {
    // server connection configs
    server: {
      headers: {
        "mode": "cors",
        "Content-Type": "application/json; charset=UTF-8",
      },
    },
 
    // timestamp format for our logs
    logger: {
      format: "dddd MMMM Do YYYY, h:mm:ss a",
    },
  };