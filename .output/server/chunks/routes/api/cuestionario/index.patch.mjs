import { d as defineEventHandler, r as readBody } from '../../../runtime.mjs';
import { C as CuestionarioSchema } from '../../../_/cuestionario.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'requrl';
import 'consola/core';
import 'mongoose';
import 'node:url';
import '../../../_/model.mjs';

const index_patch = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cuestionario = await CuestionarioSchema.findById(body._cuestionario);
  cuestionario.palabras = cuestionario.palabras.map((x) => {
    if ((x == null ? void 0 : x._id) === body._palabra) {
      x.palabra = body.palabra;
      x.definicion = body.definicion;
      x.tipo = body.tipo;
    }
    return x;
  });
  await cuestionario.save();
  return await CuestionarioSchema.findById(body._cuestionario);
});

export { index_patch as default };
//# sourceMappingURL=index.patch.mjs.map
