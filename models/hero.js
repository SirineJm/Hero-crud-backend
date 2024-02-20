const mongoose = require('mongoose');


const Hero = mongoose.model( 'Hero' , {

    name: String,
    description: String,
    image: String

} );

module.exports = Hero;