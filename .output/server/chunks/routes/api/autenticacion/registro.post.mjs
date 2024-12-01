import { d as defineEventHandler, r as readBody, c as createError } from '../../../runtime.mjs';
import { U as UsuarioSchema } from '../../../_/usuario.mjs';
import { genSalt, hash } from 'bcrypt';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'requrl';
import 'consola/core';
import 'mongoose';
import 'node:url';
import '../../../_/model.mjs';

const registro_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (await noExisteEmail(body.email))
    throw createError({ status: 400, statusMessage: "El email ya est\xE1 registrado!" });
  const passwordEncriptada = await encriptarPassword(body.password);
  const usuario = new UsuarioSchema({
    nombre: body.nombre,
    email: body.email,
    password: passwordEncriptada,
    rol: body.rol
  });
  await usuario.save();
  return usuario;
});
const noExisteEmail = async (email) => {
  const usuario = await UsuarioSchema.findOne({ email: email.toLocaleLowerCase() });
  return !!usuario;
};
const encriptarPassword = async (password) => {
  const salt = await genSalt(10);
  return await hash(password, salt);
};

export { registro_post as default };
//# sourceMappingURL=registro.post.mjs.map
