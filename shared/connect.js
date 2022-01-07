const {MongoClient} = require("mongodb");


module.exports =  {
db:{},
async connect(){
try{
    const client = await MongoClient.connect("mongodb+srv://aravindwickey:ptnYdO8esz1RLjAW@clusterone.3quf8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"); 
    this.db = client.db("integra");
    console.log(this.db)
}catch(err){
    console.log(err)
}
}
}