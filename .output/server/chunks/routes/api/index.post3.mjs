import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import { J as JuegoSchema } from '../../_/juego.mjs';
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
  const juego = new JuegoSchema({
    _cuestionario: body._cuestionario,
    _estudiante: body._estudiante,
    inicio: body.inicio,
    fin: body.fin,
    respuestas: body.respuestas
  });
  await juego.save();
  return juego;
});

export { index_post as default };
//# sourceMappingURL=index.post3.mjs.map
