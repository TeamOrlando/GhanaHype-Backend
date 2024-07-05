import { Router } from "express";
import { addEvent, getEvent, getEvents, updateEvents } from "../controllers/eventControllers.js";
import { remoteUploads } from "../middleware/uploads.js";

//create Router
const eventRouter = Router();

//create all routes
eventRouter.get('/events', getEvents);
eventRouter.get('/events/:id', getEvent)
eventRouter.post('/events', remoteUploads.single('image'), addEvent);
eventRouter.patch('/events/:id', remoteUploads.single('image'), updateEvents);

export default eventRouter;
