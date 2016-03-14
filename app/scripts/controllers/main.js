'use strict';

/**
 * @ngdoc function
 * @name testDaterangeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testDaterangeApp
 */
angular.module('testDaterangeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	 $scope.date = {
        startDate: moment().subtract(1, "days"),
        endDate: moment()
    };
    $scope.date2 = {
        startDate: moment().subtract(1, "days"),
        endDate: moment()
    };
    $scope.opts = {
        locale: {
            applyClass: 'btn-green',
            applyLabel: "Použít",
            fromLabel: "Od",
            toLabel: "Do",
            cancelLabel: 'Zrušit',
            customRangeLabel: 'Vlastní rozsah',
            daysOfWeek: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
            firstDay: 1,
            monthNames: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září',
                'Říjen', 'Listopad', 'Prosinec'
            ]
        },
        ranges: {
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()]
        }
    };
    $scope.setStartDate = function () {
        $scope.date.startDate = moment().subtract(4, "days");
    };
    $scope.setRange = function () {
        $scope.date = {
            startDate: moment().subtract(5, "days"),
            endDate: moment()
        };
    };
    //Watch for date changes
    $scope.$watch('date', function(newDate) {
        console.log('New date set: ', newDate);
    }, false);

  });
