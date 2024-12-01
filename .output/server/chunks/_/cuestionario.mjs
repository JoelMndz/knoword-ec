import { Types } from 'mongoose';
import { d as defineMongooseModel } from './model.mjs';

const CuestionarioSchema = defineMongooseModel({
  name: "cuestionario",
  schema: {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    _profesor: {
      type: Types.ObjectId,
      required: true,
      ref: "usuario"
    },
    palabras: {
      type: [{
        palabra: String,
        definicion: String,
        tipo: String
      }],
      default: []
    }
  },
  options: {
    timestamps: true
  }
});

export { CuestionarioSchema as C };
//# sourceMappingURL=cuestionario.mjs.map
