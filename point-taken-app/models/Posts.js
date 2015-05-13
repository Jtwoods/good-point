/**
 * Created by James on 5/13/2015.
 */
var mongoose = require('mongoose');

var PostSchema;

PostSchema = new mongoose.Schema({
    name: String
});

mongoose.model('Post', PostSchema);