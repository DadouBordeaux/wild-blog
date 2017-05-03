let algoItem = {
    bindings: {
        post: "<",
        editable: "<"
    },
    templateUrl: '/js/components/blog/algo1/algo1.html',
    controller: ['UsersService', 'PostsService', '$stateParams', '$state', function(UsersService, PostsService, $stateParams, $state) {
        'use  strict'

        console.log('it works');

    }]
}

export default algoItem