import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mongo from './db/mongo.connection.js';
import alunos from "./routes/alunos.js";
import login from "./routes/login.js";

const PORT = 3001;
const app = express();

mongo.init();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/alunos/", alunos);
//registro a rota de login
app.use("/login/", login);

app.listen(PORT, () => {
  console.log(`Server listen on http://localhost:${PORT}`);
});
