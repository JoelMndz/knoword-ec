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

const _id__get = defineEventHandler(async (event) => {
  const { id } = event.context.params;
  if (!id) {
    throw createError({ status: 400, statusMessage: "Debe enviar el id" });
  }
  const data = await CuestionarioSchema.findById(id).populate("_profesor");
  return data;
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
