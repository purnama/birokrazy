/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
"use strict";
var oldModule = angular.module('birokrazyApp.oldModule', ['birokrazyApp.constant'])
    .config(['$routeProvider', '$constant',
        function ($routeProvider, $constant) {
            $routeProvider.
            when('/'+$constant.module.old.path+'/e-ktp', {
                templateUrl: $constant.module.old.templates+'e-ktp.tpl.html',
                controller: 'oldModule.EKtpController'
            }).
            when('/'+$constant.module.old.path+'/e-ktp/review', {
                templateUrl: $constant.module.old.templates+'e-ktp.tpl.html',
                controller: 'oldModule.EKtpController'
            }).
            when('/'+$constant.module.old.path+'/e-ktp/trend', {
                templateUrl: $constant.module.old.templates+'e-ktp.tpl.html',
                controller: 'oldModule.EKtpController'
            }).
            when('/'+$constant.module.old.path+'/e-ktp/proses', {
                templateUrl: $constant.module.old.templates+'e-ktp.tpl.html',
                controller: 'oldModule.EKtpController'
            }).
            when('/'+$constant.module.old.path+'/imb', {
                templateUrl: $constant.module.old.templates+'imb.tpl.html',
                controller: 'oldModule.ImbController'
            }).
            when('/'+$constant.module.old.path+'/imb/proses', {
                templateUrl: $constant.module.old.templates+'imb.tpl.html',
                controller: 'oldModule.ImbController'
            }).
            when('/'+$constant.module.old.path+'/imb/review', {
                templateUrl: $constant.module.old.templates+'imb.tpl.html',
                controller: 'oldModule.ImbController'
            }).
            when('/'+$constant.module.old.path+'/imb/trend', {
                templateUrl: $constant.module.old.templates+'imb.tpl.html',
                controller: 'oldModule.ImbController'
            }).
            when('/'+$constant.module.old.path+'/imb/listDokumen', {
                templateUrl: $constant.module.old.templates+'imb.tpl.html',
                controller: 'oldModule.ImbController'
            }).
            when('/'+$constant.module.old.path+'/paspor', {
                templateUrl: $constant.module.old.templates+'paspor.tpl.html',
                controller: 'oldModule.PasporController'
            }).
            when('/'+$constant.module.old.path+'/paspor/proses', {
                templateUrl: $constant.module.old.templates+'paspor.tpl.html',
                controller: 'oldModule.PasporController'
            }).
            when('/'+$constant.module.old.path+'/paspor/review', {
                templateUrl: $constant.module.old.templates+'paspor.tpl.html',
                controller: 'oldModule.PasporController'
            }).
            when('/'+$constant.module.old.path+'/paspor/trend', {
                templateUrl: $constant.module.old.templates+'paspor.tpl.html',
                controller: 'oldModule.PasporController'
            }).
            when('/'+$constant.module.old.path+'/izin-usaha', {
                templateUrl: $constant.module.old.templates+'izin-usaha.tpl.html',
                controller: 'oldModule.IzinUsahaController'
            }).
            when('/'+$constant.module.old.path+'/izin-usaha/review', {
                templateUrl: $constant.module.old.templates+'izin-usaha.tpl.html',
                controller: 'oldModule.IzinUsahaController'
            }).
            when('/'+$constant.module.old.path+'/izin-usaha/trend', {
                templateUrl: $constant.module.old.templates+'izin-usaha.tpl.html',
                controller: 'oldModule.IzinUsahaController'
            }).
            when('/'+$constant.module.old.path+'/izin-usaha/proses', {
                templateUrl: $constant.module.old.templates+'izin-usaha.tpl.html',
                controller: 'oldModule.IzinUsahaController'
            }).
            when('/'+$constant.module.old.path+'/ptsp', {
                templateUrl: $constant.module.old.templates+'ptsp.tpl.html',
                controller: 'oldModule.PTSPController'
            }).
            when('/'+$constant.module.old.path+'/ptsp/:name*', {
                templateUrl: function (subPage) {
                    return $constant.module.old.templates+'ptsp.tpl.html';
                },
                controller: 'oldModule.PTSPController'
            }).
            when('/'+$constant.module.old.path+'/walikota', {
                templateUrl: $constant.module.old.templates+'walikota.tpl.html',
                controller: 'oldModule.WalikotaController'
            }).
            when('/'+$constant.module.old.path+'/walikota/:name*', {
                templateUrl: function (subPage) {
                    return $constant.module.old.templates+'walikota.tpl.html';
                },
                controller: 'oldModule.WalikotaController'
            }).
            when('/'+$constant.module.old.path+'/kecamatan', {
                templateUrl: $constant.module.old.templates+'kecamatan.tpl.html',
                controller: 'oldModule.KecamatanController'
            }).
            when('/'+$constant.module.old.path+'/kecamatan/:name*', {
                templateUrl: function (subPage) {
                    return $constant.module.old.templates+'kecamatan.tpl.html';
                },
                controller: 'oldModule.KecamatanController'
            }).
            when('/'+$constant.module.old.path+'/search/pelayanan', {
                templateUrl: $constant.module.old.templates+'search.result.tpl.html',
                controller: 'oldModule.SearchResultController'
            }).
            when('/'+$constant.module.old.path+'/search/instansi', {
                templateUrl: $constant.module.old.templates+'search.result.tpl.html',
                controller: 'oldModule.SearchResultController'
            }).
            when('/'+$constant.module.old.path+'/official', {
                templateUrl: $constant.templates.include,
                controller: 'oldModule.OfficialController',
                access: {
                    requiresLogin: true,
                    permissions: [$constant.roles.admin, $constant.roles.official],
                    atLeastOne: true
                }
            }).
            when('/'+$constant.module.old.path+'/user', {
                templateUrl: $constant.templates.include,
                controller: 'oldModule.UserController',
                access: {
                    requiresLogin: true,
                    permissions: [$constant.roles.admin]
                }
            }).
            when('/'+$constant.module.old.path+'/user/application', {
                templateUrl: $constant.module.old.templates+'user.application.list.tpl.html',
                controller: 'oldModule.UserController',
                access: {
                    requiresLogin: true,
                    permissions: [$constant.roles.admin, $constant.roles.user],
                    atLeastOne: true
                }
            });
        }]);
