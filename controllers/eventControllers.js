import { EventModel } from '../models/eventModels.js'

//create all endpoints

//adding events to db
export const addEvent = async (req, res, next) => {
  console.log('request', req.body)
  try {
    const add_event = await EventModel.create({ ...req.body, image: req.file.filename })
    res.json(add_event)
  } catch (error) {
    next(error)
  }
}

//get single event by ID

export const getEvent = async (req, res, next) => {
  try {
    const getEventById = await EventModel.findById(req.params.body)
    res.json(getEventById)
  } catch (error) {
    next(error)
  }
}

//getting all events from db using the find Method
export const getEvents = async (req, res, next) => {
  console.log('request', req.body)
  try {
    //query params
    const { limit = 5, skip = 0, filter = "{}", sort = "{}", fields = "{}" } = req.query;
    //get events response from user
    const get_allEvents = await EventModel
      .find(JSON.parse(filter))
      .select(JSON.parse(fields))
      .limit(JSON.parse(limit))
      .skip(JSON.parse(skip))
      .sort(JSON.parse(sort))
    //return response
    res.status(201).json(get_allEvents)
  } catch (error) {
    next(error)
  }
}



// deleting event by ID
export const deleteEvent = async (req, res, next) => {
  console.log('require', req.body)
  try {
    const deleteEventById = await EventModel.findAndDeleteById(req.params.id)
    res.json(deleteEventById)
  } catch (error) {
    next(error)
  }
}

// updating event by id
export const updateEvents = async (req, res, next) => {
  try {
    const updateEvent = await EventModel.findByIdAndUpdate(req.params.id, req.body,
      { new: true }
    )
    res.status(200).json(updateEvent)
  } catch (error) {
    next(error)
  }
}