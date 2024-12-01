import mongoose from 'mongoose';

function defineMongooseModel(nameOrOptions, schema, options, hooks) {
  let name;
  if (typeof nameOrOptions === "string") {
    name = nameOrOptions;
  } else {
    name = nameOrOptions.name;
    schema = nameOrOptions.schema;
    options = nameOrOptions.options;
    hooks = nameOrOptions.hooks;
  }
  const newSchema = new mongoose.Schema(schema, options);
  if (hooks)
    hooks(newSchema);
  return mongoose.model(name, newSchema);
}

export { defineMongooseModel as d };
//# sourceMappingURL=model.mjs.map
