var bootstrap = require("bootstrap")
    pTemplate = require("./scripts/GPost");

module.exports = Post;

function Post() {
    return new pTemplate();
}