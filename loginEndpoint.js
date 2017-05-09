module.exports = function(router) {
    router.post('/rest/login', function(req, res) {

        var username = req.body.username;
        var password = req.body.password;

        // need to create database, but for test cases
        var loggedIn = false;
        if (username === 'dpawlush' && password === 'test123') {
            loggedIn = true;
        }
        console.log("login request from " + username + " is " + loggedIn);
        res.json({'loggedIn' : loggedIn});
    });
};