(function() {
    'use strict';

    angular
        .module('app.quiz')
        .controller('QuizController', QuizController);

    QuizController.$inject = ['$scope', '$http', '$sce'];

    function QuizController($scope, $http, $sce) {
        var vm = this;

        vm.score = 0;
        vm.activeQuestion = -1;
        vm.activeQuestionsAnswered = 0;
        vm.percentage = 0;

	    $http.get('api/quiz.json').then(function(quizData){
	        	vm.myQuestions = quizData.data;
	        	vm.totalQuestions = vm.myQuestions.length;
	        });

        vm.selectAnswer = function(qIndex, aIndex) {
        	
        	var questionState = vm.myQuestions[qIndex].questionState;

        	if ( questionState != answered ) {

        		vm.myQuestions[qIndex].selectedAnswer = aIndex;

        		var correctAnswer = vm.myQuestions[qIndex].correct;

            	if ( aIndex === correctAnswer ) {

            		vm.myQuestions[qIndex].corectness = 'correct';
            		
                        vm.score += 1;

            	} else {
            		
                  vm.myQuestions[qIndex].correctness = 'incorrect';

            	}
         	      vm.myQuestions[qIndex].questionState = 'answered';
         	
        }

        vm.isSelected = function(qIndex, aIndex) {
            return vm.myQuestions.[qIndex].selectedAnswer === aIndex;
        }

        vm.isCorrect = function(qIndex, aIndex) {
            return vm.myQuestions.[qIndex].correctAnswer === aIndex;
        }























    }
})();



















