var Vue = require('vue');
Vue.use(require('vue-resource'));
Vue.http.options.emulateJSON = true;

const ApiService = {
    API_DOMAIN: 'http://api.fictitious.local',

    getClientList: function(onSuccess, onFailure) {
        var endpoint = this.API_DOMAIN + '/client';
        Vue.http.get(endpoint).then(onSuccess).catch(onFailure);
    },

    getContactListForClient: function(id, onSuccess, onFailure) {
        var endpoint = this.API_DOMAIN + '/client/' + id + '/contact-list';
        Vue.http.get(endpoint).then(onSuccess).catch(onFailure);
    },
    
    createNewClient: function(postData, onSuccess, onFailure) {
        var endpoint = this.API_DOMAIN + '/client/add';
        Vue.http.post(endpoint, postData).then(onSuccess).catch(onFailure);
    },

    getClientDetails: function(id, onSuccess, onFailure) {
        var endpoint = this.API_DOMAIN + '/client/' + id;
        Vue.http.get(endpoint).then(onSuccess).catch(onFailure);
    },

    updateClient: function(id, postData, onSuccess, onFailure) {
        var endpoint = this.API_DOMAIN + '/client/update/' + id;
        Vue.http.post(endpoint, postData).then(onSuccess).catch(onFailure);
    },

    deleteClient: function(id, onSuccess, onFailure) {
        var endpoint = this.API_DOMAIN + '/client/delete/' + id;
        Vue.http.delete(endpoint).then(onSuccess).catch(onFailure);
    },

    createNewContact: function(postData, onSuccess, onFailure) {
        var endpoint = this.API_DOMAIN + '/contact/add';
        Vue.http.post(endpoint, postData).then(onSuccess).catch(onFailure);
    },

    updateContact: function(id, postData, onSuccess, onFailure) {
        var endpoint = this.API_DOMAIN + '/contact/update/' + id;
        Vue.http.post(endpoint, postData).then(onSuccess).catch(onFailure);
    },

    deleteContact: function(id, onSuccess, onFailure) {
        var endpoint = this.API_DOMAIN + '/contact/delete/' + id;
        Vue.http.delete(endpoint).then(onSuccess).catch(onFailure);
    },

    getContactConversations: function(id, onSuccess, onFailure) {
        var endpoint = this.API_DOMAIN + '/conversation/contact/' + id;
        Vue.http.get(endpoint).then(onSuccess).catch(onFailure);
    },

    createNewMessage: function(postData, onSuccess, onFailure) {
        var endpoint = this.API_DOMAIN + '/conversation/add';
        Vue.http.post(endpoint, postData).then(onSuccess).catch(onFailure);
    }
};

module.exports = ApiService;