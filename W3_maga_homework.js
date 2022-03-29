const { faker } = require('@faker-js/faker');
const randomName = faker.name.findName(); // Rowan Nikolaus
const randomstreet = faker.address.streetAddress();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.iyzc5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('Connected to Mongodb')
  



 let result = await client.db('Week03').collection('companies').insertOne({
        name:randomName,
        address:{
            street:randomstreet,
            
        },
    })
    console.log({
        "name":randomName},'\n',
        {"street":randomstreet},'\n',
       
        )
    console.log(result);
});