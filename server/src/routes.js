const UserController = require('./controllers/UserController.js');
const UserAuthenController = require('./controllers/UserAuthenController');
const isAuthenController = require('./authen/isAuthenController')
const tabletController = require('./controllers/tabletController');


let multer = require("multer")

// upload section
let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./public/uploads");
    },
    filename: function (req, file, callback) {
        // callback(null, file.fieldname + '-' + Date.now());
        console.log(file);
        callback(null, file.originalname);
    }
})
let upload = multer({ storage: storage }).array("userPhoto", 10)


module.exports = (app) => {
    app.post('/user', UserController.create)
    app.put('/user/:userId', UserController.put)
    app.delete('/user/:userId', UserController.remove)
    app.get('/user/:userId', UserController.show)
    app.get('/users', isAuthenController, UserController.index)

    //login
    app.post('/login', UserAuthenController.login)

    // get tablet by id
    app.get("/tablet/:tabletId", tabletController.show);

    // create tablet
    app.post("/tablet", tabletController.create);

    // edit tablet
    app.put("/tablet/:tabletId", tabletController.put);

    // delete tablet
    app.delete("/tablet/:tabletId", tabletController.delete);

    // get all tablet
    app.get("/tablets", tabletController.index, tabletController.index);

}