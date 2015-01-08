function Plugin(app, chat, options)
{
    if(!options) {
        throw new Error('No options specified for plugin.');
    }

    if(!options.name) {
        throw new Error('No name specified for plugin');
    }

    this.name = options.name;
    if(!options.version) {
        throw new Error('No version specified for plugin ' + this.name);
    }

    this.version = options.version;
    if(options.models) {
        this.models = options.models;
    }

    this.app = app;
    this.chat = chat;
}

Plugin.prototype.init = function(callback) {
    callback();
};

Plugin.prototype.enable = function(callback) {
    callback();
};

Plugin.prototype.disable = function() {
};

module.exports = Plugin;
