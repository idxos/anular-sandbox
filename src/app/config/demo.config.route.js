// route-config.js
angular
    .module('app')
    .config(config);

function config($routeProvider) {
    


    $routeProvider
        .when('/', {
            controller: 'formController'
        })
        .when('/quiz', {
            templateUrl: 'app/layout/quiz.html',
            controller: 'QuizController'
        })
        .when('/demo', {
            templateUrl: 'app/demo/demo.directive.html',
            controller: 'DemoController'
        })
        .when('/game', {
            templateUrl: 'app/demo/game.directive.html',
            controller: 'GameController'
        });

        //.when('/game', {
            //templateUrl: 'app/game/game.directive.html',
            //controller: 'GameController'
       // });
}





