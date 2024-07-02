import { model, Schema, Types, } from "mongoose";

import { toJSON } from "@reis/mongoose-to-json";

const eventSchema = new Schema({
    name: { type: String, unique: true, required: true },
    date: { type: Date },
    price: { type: Number, required: true },
    location: { type: String, required: true },

    image: { type: String, required: true },
}, {
    timestamps: true
});

eventSchema.plugin(toJSON);

export const EventModel = model('Event', eventSchema);