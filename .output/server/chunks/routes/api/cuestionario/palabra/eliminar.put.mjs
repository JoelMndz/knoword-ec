import { d as defineEventHandler, r as readBody } from '../../../../runtime.mjs';
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

const eliminar_put = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cuestionario = await CuestionarioSchema.findById(body._cuestionario);
  cuestionario.palabras = cuestionario.palabras.filter((x) => (x == null ? void 0 : x._id.toString()) !== body._palabra);
  return await cuestionario.save();
});

export { eliminar_put as default };
//# sourceMappingURL=eliminar.put.mjs.map
