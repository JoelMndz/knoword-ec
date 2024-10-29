import {defineMongooseModel} from "#nuxt/mongoose";
import {Types} from "mongoose";

export const PalabraSchema = defineMongooseModel({
  name:'palabra',
  schema: {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    definicion:{
      type: String,
      required: true,
      trim: true
    },
    _estudiante:{
      type: Types.ObjectId,
      required: true,
      ref:'usuario'
    },
  },
  options:{
    timestamps: true
  }
})