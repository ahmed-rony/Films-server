const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const { default: mongoose } = require("mongoose");
require('dotenv').config();
const authRoute = require('./routes/auth.route');
const userRoute = require('./routes/user.route');
const projectRoute = require('./routes/project.route');
const commentRoute = require('./routes/comment.route');
const conversationRoute = require('./routes/conversation.route');
const messageRoute = require('./routes/message.route');

const app = express()
const port = 30000;

// ===========================================
app.use(bodyParser.json());
app.use(cors(
    { origin: "http://localhost:5173", credentials: true }
));
app.use(cookieParser());
// ===========================================
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('mongoDB connected');
    } catch (error) {
        throw error;
    }
}
// ===========================================
app.use('/api/auths', authRoute);
app.use('/api/users', userRoute);
app.use('/api/projects', projectRoute);
app.use('/api/comments', commentRoute);
app.use('/api/conversatons', conversationRoute);
app.use('/api/messages', messageRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";

    return res.status(errorStatus).send(errorMessage);
});

app.get('/', (req, res) => {
    res.send('filming..');
})

// ===========================================
app.listen(port, () => {
    connect();
    console.log('running..')
})

