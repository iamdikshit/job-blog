import app from "./app.js";
import config from "./config.js";
// const config = require("./config.js");

console.log(process.env.NODE_ENV);

const PORT = config.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
  console.log(`Server : http://127.0.0.1:${PORT}`);
});
