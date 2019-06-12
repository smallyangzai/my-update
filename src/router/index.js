import Vue from 'vue'
import Router from 'vue-router'
import sort from '@views/sort/Sort'
import details from '@views/details/Details'
import Home from '@views/home/Home'
import mine from "@views/mine/Mine"
import loginone from '@views/loginone/LoginOne'
import logintwo from "@views/logintwo/LoginTwo"
import help from '@views/help/Help'
import businessjoin from "@views/businessjoin/BusinessJoin"
import City from '@components/Homelist/Citylist'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home
    },
    {
      path: '/home',
      name: 'home',
      component:Home
    },
    {
      path:"/sort",
      name:"sort",
      component:sort
    },
    {
      path:"/details",
      name:"details",
      component:details
    },
    {
      path:"/mine",
      name:"mine",
      component:mine
    },
    {
      path:"/loginone",
      name:"loginone",
      component:loginone
    },
    {
      path:"/logintwo",
      name:"logintwo",
      component:logintwo
    },
    {
      path:"/help",
      name:"help",
      component:help
    },
    {
      path:"/businessjoin",
      name:"businessjoin",
      component:businessjoin
    },
    {
      path:"/City",
      name:"Citylist",
      component:City
    }
  ]
})
