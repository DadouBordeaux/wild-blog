import moment from 'moment';

let navbar = {
    templateUrl: 'js/components/common/navbar.html',
    controller: ['UsersService', '$state', '$interval', function(UsersService, $state, $interval) {
        'use strict'

        this.addHour = () => {
            //declare hour to be reuse in template with two way data binding
            this.hour = moment();
        }
        //Call the function that declare hour each 1 second
        $interval(this.addHour, 1000, [0]);




        angular.extend(this, {
            $onInit() {
                UsersService.getCurrent().then((user) => {
                    this.user = user
                }).catch((err) => {

                })
            },
            disconnect() {
                UsersService.disconnect().then(() => {
                    Materialize.toast('Disconnected', 4000, 'toast-warning')
                    this.user = null
                    $state.reload()
                })
            }

        })
    }]
}

export default navbar
