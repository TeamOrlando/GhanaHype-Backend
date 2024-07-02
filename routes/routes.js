import { Router } from "express";
import { addEvent, getEvent, getEvents, updateEvent } from "../controllers/eventControllers";

//create Router
const eventRouter = Router();

//create all routes
eventRouter.get('/events', getEvents);
eventRouter.get('/event/:id', getEvent)
eventRouter.post('/event', addEvent);
eventRouter.patch('/event/:id', updateEvent);




export default eventRouter;
