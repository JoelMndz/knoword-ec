import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import { C as CuestionarioSchema } from '../../_/cuestionario.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'requrl';
import 'consola/core';
import 'mongoose';
import 'node:url';
import '../../_/model.mjs';

const index_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cuestionario = new CuestionarioSchema({
    nombre: body.nombre,
    _profesor: body._profesor,
    palabras: body.palabras
  });
  await cuestionario.save();
  return cuestionario;
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
