let algo2Item = {
    bindings: {
        post: "<",
        editable: "<"
    },
    templateUrl: '/js/components/blog/algo2/algo2.html',
    controller: ['UsersService', 'PostsService', '$stateParams', '$state', function(UsersService, PostsService, $stateParams, $state) {
        'use  strict'

        let distance = 14928418679754190000;
        this.countFold = 0;
            let paper = 0.0001;
            while (distance > paper) {
                paper = paper * 2;
                this.countFold++
                }
    
   

    }]
}

export default algo2Item