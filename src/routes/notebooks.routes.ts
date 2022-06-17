import {Router} from "express";
import NotebookController from '../controllers/Notebooks/Notebook.controller';

const notebookRouter = Router();

// Notebook routes
// Multiple notebooks 
notebookRouter.post("/", NotebookController.postNotebook);
notebookRouter.get("/", NotebookController.getNotebooks);

// Single notebook 
notebookRouter.get("/:n", NotebookController.getNotebook);
notebookRouter.patch("/:n", NotebookController.updateNotebook);
notebookRouter.delete("/:n", NotebookController.deleteNotebook);

// Note Routes 
// Multiple Notes 
notebookRouter.get('/n/notes', NotebookController.getNotes);

export default notebookRouter;