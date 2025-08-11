How to Setup BACKEND

# ==========  Telegram Bot ================= #

Create Telegram Bot 
Get Bot Token 
Create Telegram Private Chanle 
Add the Telegram Bot in Channel as Admin
Get the Telegram Channel ID 

Update the Both in .ENV file

BOT TOKEN and CHANNEL ID

# ================= Wallet Address ===============#

update your wallet address in LINE #138 


# ============ Run it Locally ====== #

open the souce code in VsCode 

# goto backend directory 
 cd backend

# Run command
 npm install
 npm start

# goto frontend directory

 cd frontend

# Run command
 npm install
 npm run dev

For locally you dont need to setup Api link in frontend side 

if you go live then update the backend url in .env 

# VITE_API_URL=http://localhost:3000  




# ============ Connect Frontend with Backend when LIve =============#

Remove the // in server.js file 

// const corsConfig = {
//     origin: 'Paste here your frontend Link', 
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], 
//     credentials: true, 
//   };

// app.use(cors(corsConfig));


Update the backend link at Frontend .env file 






How to setup FRONTEND