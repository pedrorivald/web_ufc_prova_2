import mongoose from "mongoose";

const mongoDB_URI = "mongodb://127.0.0.1:27017/webt01";
const db = mongoose.connection;

const init = () => {
  mongoose.connect(mongoDB_URI, { useNewUrlParser: true });
}

db.on("connected", () => {
  console.log("Mongoose Connected to " + mongoDB_URI);
});

db.on("disconnected", () => {
  console.log("Mongoose Disconnected to " + mongoDB_URI);
});

db.on("error", (error) => {
  console.log("Mongoose Error: " + error);
});

export default { init };

