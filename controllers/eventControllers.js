import { EventModel } from '../models/eventModels.js'

//create all endpoints

//adding events to db
export const addEvent = async (req, res, next) => {
  console.log('request', req.body)
  try {
    const add_event = await EventModel.create(req.body)
    res.json(add_event)
  } catch (error) {
    next(error)
  }

}

//getting all events from db using the find Method
export const getEvents = async (req, res, next) => {
  console.log('request', req.body)
  try {
    const get_allEvents = await EventModel.find()
    res.json(get_allEvents)
  } catch (error) {
    next(error)
  }
}
//update events by ID using findById
export const updateEvent = async (req, res, next) => {
  const uodate_event = await EventModel.findByIdAndUpdate(req.params.id)
}