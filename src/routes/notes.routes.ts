import {Router} from "express";
import NotesController from "../controllers/Notes/Note.controller";

const notesRouter = Router();

// Single Note
notesRouter.post('/', NotesController.postNote);
notesRouter.get('/', NotesController.getNotes);
notesRouter.get('/:n', NotesController.getNote);
notesRouter.delete('/:n', NotesController.deleteNote);
notesRouter.patch('/:n', NotesController.updateNote);

export default notesRouter;