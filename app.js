var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    User = require('./models/user.js'),
    Task = require('./models/task.js');


mongoose.connect('mongodb://localhost:27017/tsaWebApp', {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(require("express-session")({
  secret: "tsaWebsite87938021",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/login');
}

app.listen(80, function(){
  console.log("Web App Up!");
});

app.get('/', function(req, res){
  res.render("index.ejs", {currentUser: req.user});
});

app.get("/login", function(req, res){
  res.render("login.ejs", {currentUser: req.user});
});
app.post("/login", passport.authenticate("local", {
  successRedirect: "/home",
  failureRedirect: "/login"
}), function(req, res){
  res.redirect("/home");
});

app.get('/register', function(req, res){
  res.render("register.ejs", {currentUser: req.user});
});
app.post('/register', function(req, res){
  var newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user){
    if(err){
      console.log(err);
      return res.render("/register");
    }
    passport.authenticate("local")(req, res, function(){
      res.redirect('/home');
    });
  });
});

app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
});


app.get('/home', isLoggedIn, function(req, res){
  Task.find({userId: req.user.username}, function(err, task){
    if(err){
      console.log(err);
    }else{
      console.log('Ha: ' + task[0].dueDate);
      res.render("home.ejs", {currentUser: req.user,task: task});
    }
  }).sort('dueDate');
});

app.get('/home/newTask', isLoggedIn, function(req, res){
  res.render('newTask.ejs', {currentUser: req.user});
});
app.post('/home/newTask', isLoggedIn, function(req, res){
  Task.create(req.body.task, function(err, task){
    if(err){
      console.log(err);
    }else{
      task.userId = req.user.username;
      task.title = req.body.title;
      task.description = req.body.description;
      task.dueDate = req.body.dueDate;
      task.timeDue = req.body.time;
      task.importance = req.body.importance;
      task.save();
      res.redirect('/home');
    }
  });
});
app.get('/home/viewTask/:taskId', isLoggedIn, function(req, res){
  Task.find({_id: req.params.taskId}, function(err, task){
    if(err){
      console.log(err);
    }else{
      res.render('viewTask.ejs',{currentUser: req.user,task: task});
    }
  });
});
app.post('/home/viewTask/deleteTask/:taskId', isLoggedIn, function(req, res){
  Task.findOneAndRemove({_id: req.params.taskId}, function(err){
    if(err){
      console.log(err);
    }
    res.redirect('/home');
  });
});

app.get('/home/viewTask/editTask/:taskId', isLoggedIn, function(req, res){
  Task.find({_id: req.params.taskId}, function(err, task){
    if(err){
      console.log(err);
    }else{
      res.render('editTask.ejs',{currentUser: req.user,task: task});
    }
  });
});
app.post('/home/viewTask/editTask/:taskId', isLoggedIn, function(req, res){
  Task.find({_id: req.params.taskId}, function(err, task){
    if(err){
      console.log(err);
    }else{
      if(req.body.title){
        task[0].title = req.body.title;
      }
      if(req.body.description){
        task[0].description = req.body.description;
      }
      if(req.body.dueDate){
        task[0].dueDate = req.body.dueDate;
      }
      if(req.body.dueTime){
        task[0].timeDue = req.body.time;
      }
      if(req.body.importance){
        task[0].importance = req.body.importance;
      }
      task[0].save();
    }
    res.redirect('/home/viewTask/' + req.params.taskId);
  });
});
