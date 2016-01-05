/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
"use strict";
var serviceModule = angular.module('birokrazyApp.constant', [])
    .constant('$constant', {
        apiVersion: {
            public: 'api/v1/public',
            protected: 'api/v1/protected'
        },
        oauth:{
            authorize: '/oauth/authorize',
            token: '/oauth/token'
        },
        module: {
            service: {
                path: 'pelayanan',
                templates: 'js/module/service/templates/'
            },
            department: {
                path: 'instansi',
                templates: 'js/module/departement/templates/'
            },
            administration: {
                path: 'administration',
                templates: 'js/module/administration/templates/'
            }
        },
        templates: {
            login: 'templates/login.tpl.html',
            include: 'templates/include.tpl.html',
            error401: 'templates/401.tpl.html',
            error403: 'templates/403.tpl.html',
            error404: 'templates/404.tpl.html',
            error500: 'templates/500.tpl.html',
            error520: 'templates/520.tpl.html'
        },
        duration: {
            jam: 'Jam',
            hari: 'Hari',
            minggu: 'Minggu',
            bulan: 'Bulan',
            units: ['Jam', 'Hari', 'Minggu', 'Bulan']
        },
        routes: {
            index: '/',
            login: '/login'
        },
        roles: {
            admin: 'ADMINISTRATOR',
            user: 'USER',
            official: 'OFFICIAL'
        },
        authorised: {
            loginRequired: 'LOGIN_REQUIRED',
            notAuthorised: 'NOT_AUTHORISED',
            authorised: 'AUTHORISED'
        }
    });
