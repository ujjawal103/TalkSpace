//for dealing with large data in starting

const mongoose = require('mongoose');

const Chat = require("./models/chats.js");

main()
.then((res) => console.log("Connection Successful"))
.catch((err)=> console.log(err));

async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}




let chat1 = new Chat(
    {
    from : "Anika",
    to : "Akhand",
    msg : "We will met early na ...",
    created_at : new Date()
    }
);

chat1.save().then(res => console.log(res)).catch(err => console.log(err));




//an array of chats(initially) ,for multiple insertion
let allChats = [
    {
        from : "Akhand",
        to : "Anika",
        msg : "OffCourse we will...",
        created_at : new Date()
    },
    {
        from : "Anika",
        to : "Akhand",
        msg : "it's gonna a very long time ",
        created_at : new Date()
    },
    {
        from : "Akhand",
        to : "Anika",
        msg : "i Know But We Have to face it",
        created_at : new Date()
    },
    {
        from : "Anika",
        to : "Akhand",
        msg : "Yeah ! i'am Trying but its complicated",
        created_at : new Date()
    }, 
    {
        from : "Akhand",
        to : "Anika",
        msg : "But we can did it Don't Worry",
        created_at : new Date()
    },
    {
        from : "Anika",
        to : "Akhand",
        msg : "I hope too",
        created_at : new Date()
    },            
] 


Chat.insertMany(allChats);



//to insert these all texts
// node init.js (apart from index.js)