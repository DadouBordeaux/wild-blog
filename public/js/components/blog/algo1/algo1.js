let algoItem = {
    bindings: {
        post: "<",
        editable: "<"
    },
    templateUrl: '/js/components/blog/algo1/algo1.html',
    controller: ['UsersService', 'PostsService', '$stateParams', '$state', function(UsersService, PostsService, $stateParams, $state) {
        'use  strict'


            let names = ["Love", "Your", "Face", "1"];
            this.namesSorted = [];
    
            names.forEach((name) => {
                if (name.length === 4) {
                    this.namesSorted.push(name);
                }
            })
            console.log(this.namesSorted);



        /*
        Recevant un tableau de prénoms, 
        vous devez en extraire vos amis. 
        Vos amis sont tous les prénoms contenant exactement 4 lettres. 
        Affichez la liste d’amis ainsi récupérés dans le template de la route /algo1 à partir du tableau : 
        ["Ryan", "Kieran", "Mark"] Attention, un simple « return » de la solution ne sera pas accepté ! 
        (On n’acceptera pas : return ["Ryan", "Mark"])


        */

    }]
}

export default algoItem