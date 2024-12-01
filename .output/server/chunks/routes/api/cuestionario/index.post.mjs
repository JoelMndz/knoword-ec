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

const index_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cuestionario = await CuestionarioSchema.findById(body._cuestionario);
  cuestionario.palabras.push({
    palabra: body.palabra,
    definicion: body.definicion,
    tipo: body.tipo
  });
  await cuestionario.save();
  return await CuestionarioSchema.findById(body._cuestionario);
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
