var Backbone = require("backbone");
var template = require("../tmpl/GPostTemplate")();
module.exports = Backbone.View.extend({
    attributes:{
        "class": "post"
    },
    initialize: function() {
        this.render();
        return this;
    },
    render: function() {
        this.$el.append(template);
        return this;
    }
})