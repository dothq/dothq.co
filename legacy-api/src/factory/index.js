const makeModel = (database, modelName, schema) => {
  return database.model(modelName, schema);
}

module.exports = makeModel;