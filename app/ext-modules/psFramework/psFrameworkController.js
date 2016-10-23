"use strict";

psFramework.controller("psFrameworkController",
    ['$scope', '$window', '$timeout',
        function ($scope, $window, $timeout, eventData) {

            $scope.isMenuVisible = true;
            $scope.isMenuButtonVisible = true;
            $scope.isMenuVertical = true;
            $scope.upVoteCount1 = 0;
            $scope.upVoteCount2 = 0;
            $scope.upVoteCount3 = 0;
            $scope.upVoteCount4 = 0;
            $scope.total = 0;
            $scope.started = false

            $scope.$on('ps-menu-item-selected-event', function (evt, data) {
                $scope.routeString = data.route;
            });

            $scope.$on('ps-menu-orientation-changed-event', function (evt, data) {
                $scope.isMenuVertical = data.isMenuVertical;
            });

            $($window).on('resize.psFramework', function () {
                $scope.$apply(function () {
                    checkWidth();
                });
            });
            $scope.$on("$destroy", function () {
                $($window).off("resize.psFramework"); // remove the handler added earlier
            });

             $scope.resetEvent = function() {
                 $scope.total = 0;
                  $scope.upVoteCount1 = 0;
                $scope.upVoteCount2 = 0;
                 $scope.upVoteCount3 = 0;
                $scope.upVoteCount4 = 0;
                 return total;
                
                 
            };

            $scope.upVoteSession1 = function(inc) {
                 $scope.total += inc;
                 $scope.upVoteCount1 ++;
                 
            };
            $scope.upVoteSession2 = function(inc) {
                $scope.total += inc;
                $scope.upVoteCount2 ++;
                
            };
              $scope.upVoteSession3 = function(inc) {
                $scope.total += inc;
                 $scope.upVoteCount3 ++;
                
                
            };
              $scope.upVoteSession4 = function(inc) {
                 $scope.total += inc;
                 $scope.upVoteCount4 ++;
               
                
            };

            $scope.downVoteSession1 = function(dec) {
                  $scope.total -= dec;
                 $scope.upVoteCount1 --;
                
                  
            };

            $scope.downVoteSession2 = function(dec) {
                 $scope.total -= dec;
                 $scope.upVoteCount2 --;                
                  
            };

            $scope.downVoteSession3 = function(dec) {
                 $scope.total -= dec;
                 $scope.upVoteCount3 --;                 
                  
            };

            $scope.downVoteSession4 = function(dec) {
                 $scope.total -= dec;
                 $scope.upVoteCount4 --;
                 
                  
            };

            var checkWidth = function () {
                var width = Math.max($($window).width(), $window.innerWidth);
                $scope.isMenuVisible = (width >= 768);
                $scope.isMenuButtonVisible = !$scope.isMenuVisible;
            };

            $timeout(function () {
                checkWidth();
            }, 0);

             $scope.event = {};

        $scope.saveEvent = function(event, newEventForm) {
            if(newEventForm.$valid) {
                eventData.save(event)
                    .$promise
                    .then(function(response) { console.log('success', response)})
                    .catch(function(response) { console.log('failure', response)});
            }
        };

        $scope.cancelEvent = function() {
            window.location = '#/events';
        }
      

       $scope.start = function(){
            // $scope.buttonText = "Clicked!";
             $scope.start=true;
        }
        }
    ]);