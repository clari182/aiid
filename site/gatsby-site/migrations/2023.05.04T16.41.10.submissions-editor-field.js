const config = require('../config');

/** @type {import('umzug').MigrationFn<any>} */
exports.up = async ({ context: { client } }) => {
  const submissionsCollection = client
    .db(config.realm.production_db.db_name)
    .collection('submissions');

  await submissionsCollection.updateMany({ editor: { $exists: false } }, { $set: { editor: '' } });
};

/** @type {import('umzug').MigrationFn<any>} */
exports.down = async ({ context: { client } }) => {
  const submissionsCollection = client
    .db(config.realm.production_db.db_name)
    .collection('submissions');

  await submissionsCollection.updateMany({ editor: '' }, { $unset: { editor: '' } });
};
