import { model, Schema } from "mongoose";
import { IEvent } from "./interfaces";

const EventSchema = new Schema<IEvent>({
  name: String,
  description: String,
  startDate: { type: Date, default: () => Date.now() },
  isOnline: Boolean,
  address: String,
});

const EventModel = model<IEvent>("Event", EventSchema);

export default EventModel;
