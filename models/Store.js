const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// url friendly
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a store name!'
    },
    slug: String,
    description: {
        type: String,
        trim: true
    },
    tags: [String]
});

storeSchema.pre('save', function(next) {
    // Only trigger when name changed
    if(this.isModified(this.name)) {
        next();
        return;
    }
    // generate slug JIT
    this.slug = slug(this.name);
    next();
});

module.exports = mongoose.model('store', storeSchema);