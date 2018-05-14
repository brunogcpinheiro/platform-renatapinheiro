const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async signout(req, res) {
        const user = await User.create(req.body);
        
        return res.json(user);
    },
    
    async signin(req, res) {
        const users = await User.find({});
        return res.json();  
    },
};