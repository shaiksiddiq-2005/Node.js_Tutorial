

const { MongoClient } = require('mongodb');

const url = "mongodb+srv://ShaikSiddiq:siddiqshaik@shaiksiddiq.poghlgv.mongodb.net/";
const client = new MongoClient(url);

const dbName = 'Family';



async function main() {

  await client.connect();
  console.log('Connected successfully to server!');
  const db = client.db(dbName);
  const collection = db.collection('Persons');

  // to insert the data into the Family 
  const data = {
                name: "Parveen",
                position: "Mother",
                age: "40",
                city: "Vizag"
  }

//   const result = await collection.insertMany([data]);
//   console.log("Data Inserted..", result);


  //To read the data from the Family (DataBase) -> Persons (collection) which is saved at the databases of MongoDB Atlas.
  const read = await collection.find({}).toArray();
  console.log("Data==> ", read);

  // Count of the collection..
  const count = await collection.countDocuments();
  console.log("count=>>> ", count);


  return 'done.';
}



main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

