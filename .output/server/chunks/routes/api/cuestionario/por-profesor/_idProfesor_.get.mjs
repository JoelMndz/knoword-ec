import { d as defineEventHandler, c as createError } from '../../../../runtime.mjs';
import { C as CuestionarioSchema } from '../../../../_/cuestionario.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'requrl';
import 'consola/core';
import 'mongoose';
import 'node:url';
import '../../../../_/model.mjs';

const _idProfesor__get = defineEventHandler(async (event) => {
  const { idProfesor } = event.context.params;
  if (!idProfesor) {
    throw createError({ status: 400, statusMessage: "Debe enviar el profesor" });
  }
  const data = await CuestionarioSchema.find({
    _profesor: idProfesor
  }).populate("_profesor");
  return data;
});

export { _idProfesor__get as default };
//# sourceMappingURL=_idProfesor_.get.mjs.map
