import express, {Application} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from "./routes/user.routes";
import notebookRouter from "./routes/notebooks.routes";
import notesRouter from "./routes/notes.routes";
import 'dotenv/config';

//Configurations
const app: Application = express();
app.use(express.json());
app.use(cors());

// // ----- Database -----
mongoose.connect(String(process.env.DATABASE_URI))
    .then(()=> console.log("connected"))
    .catch((err) => console.log("Couldn't connect to database", err));

// ----- Routes -----
app.use("/api/users", userRouter);
app.use("/api/notebooks", notebookRouter);
app.use("/api/notes", notesRouter);
// ----- Listener -----
let port: number;
if (process.env.PORT) port = parseInt(process.env.PORT);
else port = 8000;
app.listen(port, ()=> console.log(`Server started on ${port}` ));