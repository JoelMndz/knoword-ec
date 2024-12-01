import { d as defineEventHandler, c as createError } from '../../../../runtime.mjs';
import { P as PalabraSchema } from '../../../../_/palabra.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'requrl';
import 'consola/core';
import 'mongoose';
import 'node:url';
import '../../../../_/model.mjs';

const _id__delete = defineEventHandler(async (event) => {
  const { id } = event.context.params;
  if (!id) {
    throw createError({ status: 400, statusMessage: "Debe enviar el id" });
  }
  const data = await PalabraSchema.findByIdAndDelete(id);
  return data;
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
