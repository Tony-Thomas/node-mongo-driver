const mongoClient = require('mongodb').MongoClient;

//Connection URL
const url = 'mongodb://localhost:27017/myproject';

mongoClient.connect(url, function(err, db){
    if(err){
        return console.dir(err);

    }
    console.log("connected to mongoDB");
    /*
    InsertDocument(db, function(){
        db.close();
    });

    InsertDocuments(db, function(){
        db.close();
    });
    */

    FindDocuments(db, function(){
        db.close();
    });
});

//Insert Single Doc
/*const InsertDocument = function(db, callback){
    //get collection
    const collection = db.collection('users');
    //Insert some docs
    collection.insert({
        name: 'Tony Thomas',
        email: 'tonyt@email.com'
    }, function(err, result){
        if(err){
            return console.log(err);
        }
        console.log("Inserted Document");
        console.log(result);
        callback(result);
    });
};*/

//Insert multiple documents
const InsertDocuments = function(db, callback){
    //Get collection
    const collection = db.collection('users');
    collection.insertMany([
        {
            name:'John Doe',
            email: 'john@test.com'
        },
        {
            name:'Sam Smith',
            email: 'sam@test.com'
        },
        {
            name:'Billy Joe',
            email: 'bj@test.com'
        }
    ],
    function(err, result){
        if(err){
            return console.log(err);
        }
        console.log("Inserted "+result.ops.length+" documents");
        callback(result);
    });
};

const FindDocuments = function(db, callback){
    //Get collection
    const collection = db.collection('users');

    collection.find({}).toArray(function(err, docs){
        if(err){
            return console.log(err);
        }
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
};
