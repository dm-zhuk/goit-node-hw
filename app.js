import express from "express";
import cors from "cors";
import contactsRouter from "./routes/contactsRouter.js";
const app = express();

app.listen(3000, () => console.log("Server running on 3000 PORT"));
    
app.get("/"(request, response)=> {
    response.send("<h1>, Home page</h1>");
});

app.get("/users"(request, response)=> {
    response.send("<h1>, User's list page</h1>");
});

app.use((req, res) => {
    res.status(404).json({ message: `${req.url} not found` })
});