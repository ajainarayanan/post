var pTemplate = require("./scripts/post");

module.exports = Post;

function Post() {
    return new pTemplate();
}