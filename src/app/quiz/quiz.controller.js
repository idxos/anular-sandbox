(function() {
    'use strict';

    angular
        .module('app.quiz')
        .controller('QuizController', QuizController);

    QuizController.$inject = ['$timeout', '$scope'];

    /* @ngInject */
    function QuizController($timeout, $scope) {
        var vm = this;
        vm.title = 'QuizController';

        $scope.oneAtATime = true;

        $scope.beginning = "index.html";


        $scope.quiz = [
        {
          title: 'q1',
          icon: 'app/content/images/icons/quiz-01-demo.svg',
          question: 'What’s your favorite snack?',
          answers: ['Oats', 'Apple', 'Calzone'],
          value:  "activist_100:creative_100"
        },
        {
          title: 'q2',
          icon: 'app/content/images/icons/quiz-02-demo.svg',
          question: 'What is your favorite item to deliver?',
          answers: ['Mail', 'Boots', 'Kittens'],
          value:  "risk-taker_100"
        },
        {
        title: 'q3',
          icon: 'app/content/images/icons/quiz-03-demo.svg',
          question: 'Famous horse you admire most?',
          answers: ['Tigger', 'Seabiscuit', 'Silver'],
          value:  "creative_100"
        },
        {
        title: 'q4',
          icon: 'app/content/images/icons/quiz-04-demo.svg',
          question: 'What’s your favorite one-horse town?',
          answers: ['Uncertain, Texas', 'Burnt Corn, Alabama', 'Handsome Eddy, New York'],
          value:  "activist_100:creative_100"
        },
        {
        title: 'q5',
          icon: 'app/content/images/icons/quiz-05-demo.svg',
          question: 'What’s your favorite song?',
          answers: ['Horse with No Name', 'Dont Fence Me In', 'The Wells Fargo Wagon from The Music Man'],
          value:  "activist_100:creative_100"
        },
        {
        title: 'q6',
          icon: 'app/content/images/icons/quiz-06-demo.svg',
          question: 'What’s a great gift for a gift horse?',
          answers: ['Blanket', 'Horese Shoes', '"Mr. Ed" dvd set'],
          value:  "activist_100:creative_100"
        },
        {
        title: 'q7',
          icon: 'app/content/images/icons/quiz-07-demo.svg',
          question: 'Who’s your dog in your dog and pony show?',
          answers: ['Rover', 'Spot', 'Jack'],
          value:  "activist_100:creative_100"
        },
        {
        title: 'q8',
          icon: 'app/content/images/icons/quiz-08-demo.svg',
          question: 'What’s your favorite western?',
          answers: ['Stagecoach', 'Wells Fargo', 'Paint your wagon'],
          value:  "activist_100:creative_100"
        },
        {
        title: 'q9',
          icon: 'app/content/images/icons/quiz-09-demo.svg',
          question: 'How do you handle tumbleweed?',
          answers: ['Go over', 'Go around', 'Roll with it'],
          value:  "activist_100:creative_100"
        },
        {
        title: 'q10',
          icon: 'app/content/images/icons/quiz-10-demo.svg',
          question: 'If you were a horse of a different color, what would it be?',
          answers: ['Blue', 'Orange', 'Taupe'],
          value:  "activist_100:creative_100"
        }
        ];



        $scope.groups = [
        {
          title: 'Dynamic Group Header - 1',
          content: 'Dynamic Group Body - 1'
        },
        {
          title: 'Dynamic Group Header - 2',
          content: 'Dynamic Group Body - 2'
        }
        ];

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    };
})();