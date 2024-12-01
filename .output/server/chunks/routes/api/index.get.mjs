import { d as defineEventHandler } from '../../runtime.mjs';
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

const index_get = defineEventHandler(async (event) => {
  const data = await CuestionarioSchema.find().populate("_profesor");
  return data;
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
