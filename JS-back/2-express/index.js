var express =require('express')
var app = express();
var path = require('path');
var session = require('express-session')
var bodyParser= require('body-parser')
var mongoStore = require('connect-mongo')
var mgStore=mongoStore(session)
var mongoClient=require('mongodb').MongoClient;

var url='mongodb://localhost:27017/test';

app.use(session({secret:'gerihbg',
                 store:new mgStore({url:'mongodb://localhost:27017/test'})
               }
             ));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function (req,res) {
  console.log(req.session.tasks);
  // if (  req.session.tasks != undefined) {
  //   res.render("index.ejs",{tasks:req.session.tasks});
  // }else {
  //   res.render("index.ejs",{tasks:[]});
  // }
  mongoClient.connect(url,function (err,client) {
    var db=client.db('test');
    db.collection('tasks').find().toArray(function(err,data) {
      console.log(data);
      res.render("index.ejs",{tasks:data});
    });
  })
  // res.sendFile(path.join(__dirname+'/views/index.html'));
});
app.post('/add',function (req,res) {

  console.log(req.body.taskName);
  //
  // if (req.session.tasks == undefined) {
  //   req.session.tasks=[]
  // }
  var tasks={name:req.body.taskName,done:false};
  //req.session.tasks.push({name:req.body.taskName,done:false})
  var expressRes=res;
  var maPromesse=  mongoClient.connect(url)
  var MaDeuxiemePromesse=maPromesse.then(function (err,client) {//pas de err que client , err géré par catch
    console.log("PROMESSE");

      console.log(err);
      var db=err.db('test');
      return  db.collection('tasks').insertOne(tasks);
    });
  MaDeuxiemePromesse.then(function (data) {
    console.log("final then");
    res.redirect("/")//ça prends du temps mais ça marche
  })
  //évidement on peut  chainer tout ça ;)

})

app.listen(8080);
