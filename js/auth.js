"use strict";

// https://auth0.com/docs/quickstart/spa/vanillajs

var client_id = 'aA4nezvlbC9WncfECwCNFtTQAC1al0cg';
var domain = 'lsstepo.auth0.com';

var signup = new Auth0Lock(client_id, domain, {
    auth: {
        params: {
            scope: 'openid nickname'
        }
    },
    initialScreen: 'signUp',
    loginAfterSignUp: true
});

var lock = new Auth0Lock(client_id, domain, {
    auth: {
        params: {
            scope: 'openid nickname'
        }
    }
});

lock.on('authenticated', function (authResult) {
    lock.getProfile(authResult.idToken, function (error, profile) {
        if (error) {
            // Handle error
            return false;
        }
        sessionStorage.setItem('auth0_id_token', authResult.idToken);
        sessionStorage.setItem('auth0_profile', JSON.stringify(profile));
    });
});