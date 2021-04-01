const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(
    ('MongoDB Connected: ' + conn.connection.host).cyan.underline.bold
  );
};

module.exports = connectDB;


/*
NODE_ENV=development
PORT=5000

MONGO_URI=mongodb+srv://admin_0:admin_0123456@engidocs.yrzk7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

GEOCODER_PROVIDER=mapquest
GEOCODER_API_KEY=

FILE_UPLOAD_PATH= ./public/uploads
MAX_FILE_UPLOAD=1000000

JWT_SECRET=
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30

SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_EMAIL=
SMTP_PASSWORD=
FROM_EMAIL=
FROM_NAME=
*/