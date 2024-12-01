import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import { P as PalabraSchema } from '../../_/palabra.mjs';
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
  const palabra = new PalabraSchema({
    nombre: body.nombre,
    definicion: body.definicion,
    _estudiante: body._estudiante
  });
  return await palabra.save();
});

export { index_post as default };
//# sourceMappingURL=index.post2.mjs.map
