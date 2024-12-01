import { d as defineMongooseModel } from './model.mjs';

var Rol = /* @__PURE__ */ ((Rol2) => {
  Rol2["Estudiante"] = "estudiante";
  Rol2["Profesor"] = "profesor";
  return Rol2;
})(Rol || {});

const UsuarioSchema = defineMongooseModel({
  name: "usuario",
  schema: {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    rol: {
      type: String,
      enum: Object.values(Rol),
      required: true
    }
  },
  options: {
    timestamps: true
  }
});

export { UsuarioSchema as U };
//# sourceMappingURL=usuario.mjs.map
