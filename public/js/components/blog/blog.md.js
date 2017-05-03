/*
Create Angular module app.blog and define all states
blog : parent state, is an abstrat state too with templateUrl
blog.list : nested state of state app.blog, display blog-list component
blog.item : nested state of state app.blog, display blog-item component with editable attribute value is true
*/
import blogItem from './blogItem/blogItem'
import blogItemMenu from './blogItem/blogItemMenu'
import blogList from './blogList/blogList'
import algoItem from './algo1/algo1'
import algo2Item from './algo2/algo2'
import 'angularjs-datepicker'


let blogModule = angular.module('app.blog', ['720kb.datepicker'])
    .component('blogItem', blogItem)
    .component('blogItemMenu', blogItemMenu)
    .component('blogList', blogList)
    .component('algoItem', algoItem)
    .component('algo2Item', algo2Item)
    .config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        /*
          Define a state with name 'blog' this state is abstract and url is empty (root of application)
          template is ui-view it's used to display nested views
        */
        $stateProvider
            .state('blog', {
                url: '/posts',
                abstract: true,
                templateUrl: 'js/components/blog/blog.html'
            })
            .state('algo1', {
                url: '/algo1',
                template: '<algo-item></algo-item>'
            })
            .state('algo2', {
                url: '/algo2',
                template: '<algo2-item></algo2-item>'
            })
            .state('blog.list', {
                url: '/',
                template: '<blog-list></blog-list>'
            })
            .state('blog.item', {
                url: '/:id',
                template: '<blog-item editable="true"></blog-item>'
            })
    }])
    .name

export default blogModule
