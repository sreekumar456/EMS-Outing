eventsApp.factory('memberData', function($resource) {
    var resource = $resource('/data/members/:id', {id:'@id'}, {"getAllmem": {method: "GET", isArray: true, params: {something: "foo"}}});
    return {
        /*getEvent: function(memId) {
            return resource.get({id:memId});
        },*/
        save: function(event) {
            event.id = 999;
            return resource.save(event);
        },
        getAllEvents:function(){

             return resource.query();
        }
    };
});