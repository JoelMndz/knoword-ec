import {defineMongooseModel} from "#nuxt/mongoose";
import {Types} from "mongoose";
import { Rol } from "../constants";


export const UsuarioSchema = defineMongooseModel({
  name:'usuario',
  schema: {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    email:{
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    password:{
      type: String,
      required: true
    },
    rol:{
      type: String,
      enum: Object.values(Rol),
      required: true
    }
  },
  options:{
    timestamps: true
  }
})