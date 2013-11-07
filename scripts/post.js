var Backbone = require("backbone");
var template = require("../tmpl/template")();
module.exports = Backbone.View.extend({
    initialize: function() {
        this.render();
        return this;
    },
    render: function() {
        this.$el = $(template);
        return this;
    }
})