import {defineMongooseModel} from "#nuxt/mongoose";
import {Types} from "mongoose";

export const JuegoSchema = defineMongooseModel({
  name:'juego',
  schema: {
    _cuestionario:{
      type: Types.ObjectId,
      required: true,
      ref:'cuestionario'
    },
    _estudiante:{
      type: Types.ObjectId,
      required: true,
      ref: 'usuario'
    },
    inicio: {
      type: Date,
      required: true
    },
    fin: {
      type: Date,
      required: true
    },
    respuestas:{
      type: [{
        _palabra: Types.ObjectId,
        correcta: Boolean
      }],
      default: []
    }
  },
  options:{
    timestamps: true
  }
})