import express, {Application, Response, Request, NextFunction, Router} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from "./routes/user.routes";
import notebookRouter from "./routes/notebooks.routes";
import notesRouter from "./routes/notes.routes";
import authRouter from "./routes/auth.routes";
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
app.use((req: Request, res: Response, next: NextFunction) => {
    if(req.url.includes('users')) {
        res.status(403).json()
        return;
    }

    next();
});

// ----- Routes -----
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter); // This is an admin route
app.use("/api/notebooks", notebookRouter);
app.use("/api/notes", notesRouter);


// ----- Listener -----
let port: number = 0;
if (process.env.PORT) port = parseInt(process.env.PORT);
else port = 8000;
app.listen(port, ()=> console.log(`Server started on ${port}` ));
