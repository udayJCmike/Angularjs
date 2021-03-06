/**
 * Created by deemsys on 4/3/14.
 */
/**
 * Created by deemsys on 4/3/14.
 */
/**
 * Created by deemsys on 4/3/14.
 */

/**
 * Created by deemsys on 4/3/14.
 */
var app = angular.module('plunker', ['ezfb', 'hljs'])

    .config(function ($FBProvider) {
        $FBProvider.setInitParams({
            appId: '449584368475409',
            ChannelUrl:"http:8888/Angular/web/index.html#/intro"
        });
    })

app.controller('hello', function($scope, $FB, $window, $location) {

    updateLoginStatus(updateApiMe);

    $scope.login = function () {
        $FB.login(function (res) {
            /**
             * no manual $scope.$apply, I got that handled
             */
            if (res.authResponse) {
                updateLoginStatus(updateApiMe);
            }
        }, {scope: 'email,user_likes'});
    };

    $scope.logout = function () {
        $FB.logout(function () {
            updateLoginStatus(updateApiMe);
        });
    };

    $scope.share = function () {
        $FB.ui(
            {
                method: 'feed',
                name: 'angular-easyfb API demo',
                picture: 'http://plnkr.co/img/plunker.png',
                link: 'http://plnkr.co/edit/qclqht?p=preview',
                description: 'angular-easyfb is an AngularJS module wrapping Facebook SDK.' +
                    ' Facebook integration in AngularJS made easy!' +
                    ' Please try it and feel free to give feedbacks.'
            },
            null
        );
    };

    var autoToJSON = ['loginStatus', 'apiMe'];
    angular.forEach(autoToJSON, function (varName) {
        $scope.$watch(varName, function (val) {
            $scope[varName + 'JSON'] = JSON.stringify(val, null, 2);
        }, true);
    });

    function updateLoginStatus (more) {
        $FB.getLoginStatus(function (res) {
            $scope.loginStatus = res;

            (more || angular.noop)();
        });
    }

    function updateApiMe () {
        $FB.api('/me', function (res) {
            $scope.apiMe = res;
        });
    }
});
/**
 * Created by deemsys on 4/3/14.
 */
/**
 * Created by deemsys on 5/3/14.
 */
