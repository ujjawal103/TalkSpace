const express = require("express");
const app = express();

const dotenv = require('dotenv');

//load everything from dot env
dotenv.config();

let PORT = process.env.PORT || 8080;

const mongoose = require('mongoose');

const Chat = require("./models/chats.js");


var methodOverride = require('method-override')
app.use(methodOverride('_method'))

const path = require("path");

app.set("views" , path.join(__dirname , "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended : true})); //for form data

main()
.then((res) => console.log("Connection Successful"))
.catch((err)=> console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
  }


//setup completed

// NOTE:- models are declared in model folder always.



//____________________________________________________________________________________________________________________________________

// let chat1 = new Chat({                   //done in init file (coz that file we run only once if need)
//     from : "Anika",
//     to : "Akhand",
//     msg : "We will met early na ...",
//     created_at : new Date()
// });

// chat1.save().then(res => console.log(res)).catch(err => console.log(err));
//____________________________________________________________________________________________________________________________________





app.get("/" , (req,res) =>{
    res.send("working");
})


// app.get("/chats" , async (req,res) =>{          //as we are working with database so aur functions is asyncs and await.
//     let chats = await Chat.find();             //extracting data from database (also then,catch can be used , but here we use async and await so no need).
   
//     res.render("allChats.ejs" , {chats});
    
// });


app.get("/chats", async (req, res) => {
    try {
      let chats = await Chat.find();
      res.render("allChats.ejs", { chats });
    } catch (err) {
      console.error(err);
      res.status(500).send("Error fetching chats");
    }
  });
  



//new
app.get("/chats/new" , (req , res)=>{
    res.render("new.ejs");
})
app.post("/chats" , (req,res)=>{
    let {from , to , msg} = req.body;
    // console.log(from,to,msg);
    let newChat = new Chat({      //saving to database.
        from : from,
        to : to,
        msg : msg,
        created_at : new Date(),
    })
    newChat.save().catch(err => console.log(err))
    res.redirect("/chats");
})



//edit
app.get("/chats/:id/edit",async (req,res)=>{
    let { id } = req.params;
    let chat = await Chat.findById(id);
    // console.log(chat);                      //don't know why but , then catch not working properly.
    res.render("edit.ejs" , {chat});
})
app.put("/chats/:id",async (req,res)=>{
    let { id } = req.params;
    let { msg } = req.body;
    // console.log(msg);
    await Chat.findByIdAndUpdate(id , {msg : msg} , {runValidators : true});                  
    res.redirect("/chats");
})


//delete
// app.get("/chats/:id/" , async(req,res)=>{
//     let { id } = req.params;
//     let deleteChat = await Chat.findByIdAndDelete(id );
//     res.redirect("/chats");
// })
app.get("/chats/:id/", async (req, res) => {
    try {
      let { id } = req.params;
      await Chat.findByIdAndDelete(id);
      res.redirect("/chats");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error deleting chat");
    }
  });
  












app.listen(PORT , ()=>{
    console.log("app listen to port :",PORT);
});