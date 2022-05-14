var MongoClient = require("mongodb").MongoClient;
var url = process.env.MONGO;

const client = new MongoClient(url, { useNewUrlParser: true });

let dbConnection = null;

module.exports = {
    connect: function() {
        return new Promise((resolve, reject) => {
            client.connect(async function(err, db) {
                if (err) {
                    reject(err);
                } else {
                    console.log('Successfully connected.');
                    dbConnection = db.db('todos');
                    const collections = await dbConnection
                        .listCollections({ name: 'todos'})
                        .toArray();
                    if(collections.length === 0) {
                        dbConnection.createCollection('todos', function(err, res) {
                            if(err) {
                                reject(err);
                            } else {
                                resolve(db);
                            }
                        }) 
                    } else {
                        resolve(db);
                    }
                }
            });
        });
    },
    getDb: function() {
        return dbConnection;
    },
};