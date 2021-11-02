import { model, Schema, Types } from 'mongoose';

const schema = new Schema({
  id: {
    type: String,
    default: new Types.ObjectId(),
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  longitude: {
    type: Schema.Types.Decimal128,
    required: true
  },
  latitude: {
    type: Schema.Types.Decimal128,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  contactName: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  }
});

export default model('Site', schema, 'sites');
