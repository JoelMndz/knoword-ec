import { d as defineEventHandler, c as createError } from '../../../../runtime.mjs';
import { J as JuegoSchema } from '../../../../_/juego.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'requrl';
import 'consola/core';
import 'mongoose';
import 'node:url';
import '../../../../_/model.mjs';

const _idCuestionario__get = defineEventHandler(async (event) => {
  const { idCuestionario } = event.context.params;
  if (!idCuestionario) {
    throw createError({ status: 400, statusMessage: "Debe enviar el profesor" });
  }
  const data = await JuegoSchema.find({
    _cuestionario: idCuestionario
  }).populate("_estudiante");
  return data;
});

export { _idCuestionario__get as default };
//# sourceMappingURL=_idCuestionario_.get.mjs.map
