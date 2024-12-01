import { Types } from 'mongoose';
import { d as defineMongooseModel } from './model.mjs';

const PalabraSchema = defineMongooseModel({
  name: "palabra",
  schema: {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    definicion: {
      type: String,
      required: true,
      trim: true
    },
    _estudiante: {
      type: Types.ObjectId,
      required: true,
      ref: "usuario"
    }
  },
  options: {
    timestamps: true
  }
});

export { PalabraSchema as P };
//# sourceMappingURL=palabra.mjs.map
