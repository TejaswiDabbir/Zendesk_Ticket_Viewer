# Zendesk_Ticket_Viewer

1. Create a new file named ‘.env’ in the server folder and enter the following details : 
- AUTH_ID = <your_mail_id>/token 
- AUTH_TOKEN = <your_zendesk_api_token> 
- PORT = 5000 

2. Open 2 terminals at the location of the project. 

3. Terminal 1   
- cd server 
- npm install 
- npm run dev (this will start the back end server) 

4. Terminal 2 
- cd client 
- npm install 
- npm run serve (this will start front end client) 

5. Open a web browser and visit http://localhost:8080/ 

6. To build for production, in Client 
npm run build 
Then move the dist folder created to server. 

7. To run tests, in Server 
npm test
