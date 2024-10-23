import {defineMongooseModel} from "#nuxt/mongoose";
import {Types} from "mongoose";

export const CuestionarioSchema = defineMongooseModel({
  name:'cuestionario',
  schema: {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    categoria:{
      type: String,
      required: true,
      trim: true
    },
    _profesor:{
      type: Types.ObjectId,
      required: true,
      ref:'usuario'
    },
    palabras:{
      type: [{
        palabra: String,
        definicion: String,
        tipo: String
      }],
      default: []
    }
  },
  options:{
    timestamps: true
  }
})