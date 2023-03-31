import express, {Application, Response, Request, NextFunction, Router} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from "./routes/user.routes";
import notebookRouter from "./routes/notebooks.routes";
import notesRouter from "./routes/notes.routes";
import 'dotenv/config';

//Configurations
const app: Application = express();
const router: Router = Router();

app.use(express.json());
app.use(cors());

// ----- Database -----
mongoose.connect(String(process.env.DATABASE_URI))
    .then(()=> console.log("connected"))
    .catch((err) => console.log("Couldn't connect to database", err));


// ----- Middleware -----
// router.use('/api', (req: Request, res: Response, next: NextFunction) => {
//     console.log('herasdjfaASDASasdfasdDFAD;sjdle')
//     next();
// });

// ----- Routes -----
app.use("/api/users", userRouter);
app.use("/api/notebooks", notebookRouter);
app.use("/api/notes", notesRouter);

console.log('here')
// ----- Listener -----
let port: number = 0;
if (process.env.PORT) port = parseInt(process.env.PORT);
else port = 8000;
app.listen(port, ()=> console.log(`Server started on ${port}` ));
