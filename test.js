show dbs

use baseDeDato

db.createUser({
  user: 'auz',
  pwd: '123',
  roles: ['readWrite', 'dbAdmin']
});

db.createCollection('clientes')

show collections

db.clientes.insert(
  {
    firstName: 'Luis',
    lastName: 'Auz'
  }
)

db.clientes.find().pretty()

db.clientes.insert(
  [
    {firstName: 'Geoconda', lastName: 'Garcia'},
    {firstName: 'Gabriel', lastName: 'Auz'},
    {firstName: 'Luis Jr', lastName: 'Auz'}
  ]
)

db.clientes.find();
db.clientes.find({firstName: 'Geoconda'}, {firstName: true, lastName:false});


db.clientes.update(
  {firstName: 'Geoconda'}, 
  {
    firstName: 'Geoconda',
    lastName: 'Garcia',
    gender: 'male'
  }
);


db.clientes.update(
  {firstName: 'Luis Jr'},
  {
    $set: {gender: 'male'}
  }
);

db.clientes.update(
  {firstName: 'Luis Jr'},
  {
    $set: {age: 45}
  }
);
db.clientes.update(
  {firstName: 'Luis Jr'},
  {
    $inc: {age: 5}
  }
);

db.clientes.update(
  {firstName: 'Luis Jr'},
  {
    $unset:  {age: 1}
  }
)

db.clientes.update(
  {firstName: 'Gabriel'} ,
  {
    firstName: 'Gabriel',
    lastName: 'Auz'
  },
  { upsert: true}
)

db.clientes.update(
  {firstName: 'Luis Jr'},
  {
    $rename: {"gender": "sex"}
  }
)

db.clientes.remove({firstName: "Luis Jr"})
db.clientes.remove({firstName: "Luis Jr"}, {justOne: true})

db.clientes.find({firstName: "Gabriel"});
db.clientes.find({$or: [{firstName: "Gabriel"}, {firstName: "Luis Jr"}]})
db.clientes.fid({gender: "male"})

db.clientes.find({age: {$lt: 40}})
db.clientes.find({age: {$gt: 40}})
db.clientes.find({age: {$gt: 30, $lt: 90}});

db.clientes.find({"address.city": "Boston"})

db.clientes.find({name: {$regex: 'ston'}});

// sorting
db.clientes.find().sort({lastName: 1});
db.clientes.find().sort({lastName: -1});
db.clientes.find().count()
db.clientes.find({gender: "male"}).count()
db.clientes.find().limit(4)
db.clientes.find().limit(4).sort({lastName: -1})

db.clientes.find().forEach(function(doc) {
  print("Customer Name" + doc.firstName);
});