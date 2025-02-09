

---

# 🗨️ TalkSpace – Chat with Your Imagination!  

🚀 **TalkSpace** is a simple yet engaging chat application built using **Node.js, Express.js, and MongoDB**.  
It allows users to send and view messages, either as an **anonymous** conversation or by addressing someone specific.  

This project marks the **first use of a database (MongoDB)** in the TalkSpace journey, enabling real-time chat storage and retrieval!  

---

## 📌 Features  

✅ **Send Messages** – Share your thoughts with anyone, real or imaginary!  
✅ **View All Chats** – See a list of all conversations stored in the database.  
✅ **Edit Messages** – Modify any chat message after sending.  
✅ **Delete Chats** – Remove any unwanted messages from the system.  
✅ **Dynamic Rendering** – Uses **EJS** for beautiful and responsive UI.  
✅ **MongoDB Integration** – Chats are stored and managed efficiently in a database.  

---

## 🚀 Tech Stack  

🔹 **Backend** – [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)  
🔹 **Database** – [MongoDB](https://www.mongodb.com/) (via [Mongoose](https://mongoosejs.com/))  
🔹 **Templating Engine** – [EJS](https://ejs.co/)  
🔹 **Middleware** – Method-Override (for handling form methods like PUT & DELETE)  
🔹 **Environment Variables** – [Dotenv](https://www.npmjs.com/package/dotenv)  

---

## 📂 Project Structure  

```
📂 talkspace
 ┣ 📂 models
 ┃ ┗ 📜 chats.js   # Mongoose schema for chats
 ┣ 📂 views
 ┃ ┣ 📜 allChats.ejs  # Displays all chats
 ┃ ┣ 📜 new.ejs       # Form for adding a new chat
 ┃ ┣ 📜 edit.ejs      # Form for editing a chat
 ┣ 📂 public          # Static files (CSS, images, etc.)
 ┣ 📜 .env            # Stores environment variables (MongoDB URI)
 ┣ 📜 index.js        # Main server file
 ┣ 📜 package.json    # Project metadata & dependencies
 ┣ 📜 README.md       # Documentation (this file)
```

---

## 🔧 Installation & Setup  

### **1️⃣ Prerequisites**  
Ensure you have the following installed:  
🔹 **Node.js** (Download from [here](https://nodejs.org/))  
🔹 **MongoDB** (Locally or via **MongoDB Atlas**)  

### **2️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-username/talkspace.git
cd talkspace
```

### **3️⃣ Install Dependencies**  
```sh
npm install
```

### **4️⃣ Set Up Environment Variables**  
Create a **`.env`** file in the root folder and add:  
```env
MONGO_URI=your-mongodb-connection-string
PORT=3000
```

### **5️⃣ Start the Server**  
```sh
node index.js
```
Or, if you have **nodemon** installed for auto-restarts:  
```sh
nodemon index.js
```

The app will now be running at:  
🌐 `http://localhost:3000/`

---

## 🔗 API Endpoints  

| Method | Endpoint             | Description |
|--------|----------------------|-------------|
| **GET**  | `/`                  | Basic test route (returns "working"). |
| **GET**  | `/chats`             | Displays all stored chat messages. |
| **GET**  | `/chats/new`         | Form for adding a new chat message. |
| **POST** | `/chats`             | Saves a new chat message to the database. |
| **GET**  | `/chats/:id/edit`    | Form to edit an existing message. |
| **PUT**  | `/chats/:id`         | Updates a chat message. |
| **GET**  | `/chats/:id/`        | Deletes a chat message. |

---

## 📝 How It Works  

1️⃣ **Visit** `/chats` to see all stored conversations.  
2️⃣ **Add a new chat** using the `/chats/new` page.  
3️⃣ **Edit** an existing chat via `/chats/:id/edit`.  
4️⃣ **Delete** a message with a single click.  

---

## 🔑 Database Integration  

- The app uses **MongoDB** to store chat messages.  
- Mongoose schema for chats (`models/chats.js`):  

```js
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from: String,
    to: String,
    msg: String,
    created_at: { type: Date, default: Date.now }
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
```

---

## 🛠️ Future Enhancements  

🚀 Implement **real-time messaging** with **Socket.io**.  
🚀 Add **User Authentication** to create personal chat rooms.  
🚀 Improve **UI/UX** with a modern frontend framework.  
🚀 Add a **like/react system** for messages.  

---

## 👨‍💻 Author  

**Ujjawal Kumar Jaiswal**  

📬 Feel free to contact me for suggestions or contributions!  
⭐ If you like this project, consider **starring** the repository!  

---