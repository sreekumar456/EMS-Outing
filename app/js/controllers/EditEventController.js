'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData,$routeParams, memberData) {

        $scope.event = {};

         $scope.events = memberData.getAllEvents();

      /*  memberData.getEvent($routeParams.eventId)
            .$promise
            .then(function(event) { $scope.event = event; })
            .catch(function(response) { console.log(response);}
        );*/


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

    }
);