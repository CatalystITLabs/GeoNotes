'use strict';
function loadScript(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

function loadReqs() {
    loadScript('js/external/backbone.js');
    loadScript('js/external/jquery-1.11.1.min.js');
    loadScript('js/external/underscore-min.js');
}

//Login Model
var login = {};

login.authentication = Backbone.Model.extend({
    defaults: {
        UserName: '',
        Password: '',
        LoginFailed: false,
        LoginSuccess: false
    },
    url: 'what ever it is'
});

//View Interaction
var LoginView = Backbone.View.extend({
    model: login.authentication(),
    el: ('#login-form'),
    events: {
        'click #login': 'login'
    },
    login: function () {
        this.model.save({username: this.$el.find('#username'),
                password: this.$el.find('#password')},
            {
                success: function () {
                    //empty
                },
                error: function () {
                    //empty
                }
            });
    }
});