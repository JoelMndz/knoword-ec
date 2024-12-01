import { d as defineEventHandler, c as createError } from '../../../runtime.mjs';
import { P as PalabraSchema } from '../../../_/palabra.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'requrl';
import 'consola/core';
import 'mongoose';
import 'node:url';
import '../../../_/model.mjs';

const _idEstudiante__get = defineEventHandler(async (event) => {
  const { idEstudiante } = event.context.params;
  if (!idEstudiante) {
    throw createError({ status: 400, statusMessage: "Debe enviar el id" });
  }
  const data = await PalabraSchema.find({
    _estudiante: idEstudiante
  });
  return data;
});

export { _idEstudiante__get as default };
//# sourceMappingURL=_idEstudiante_.get.mjs.map
