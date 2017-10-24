import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
//引入组件
import Login from '../views/login.vue'
import Home from '../views/home.vue'
import myCom001 from '../components/myCom01/myCom001.vue'
import myCom002 from '../components/myCom01/myCom002.vue'
import myCom003 from '../components/myCom01/myCom003.vue'

import myCom021 from '../components/myCom02/myCom021.vue'
import myCom022 from '../components/myCom02/myCom022.vue'
import myCom023 from '../components/myCom02/myCom023.vue'

import homePage from '../components/myCom03/homePage.vue'
import aboutMe from '../components/myCom03/homePageItems/about-me.vue'
import mySkills from '../components/myCom03/homePageItems/my-skills.vue'
import workExperience from '../components/myCom03/homePageItems/work-experience.vue'
import myWorks from '../components/myCom03/homePageItems/my-works.vue'
import contactMe from '../components/myCom03/homePageItems/contact-me.vue'

const routes = [
  {
    path: '/login',
    component: Login,
    name: 'login',
    hidden: true
  },
  {
    path: '/',
    name: '',
    component: Home,
    iconType: 'fa fa-home',
    leaf: true,
    children: [
      {
        path: '/homePage',
        component: homePage,
        name: '首页',
        children:[
          {
            path: '/about-me',
            component: aboutMe,
            name: '关于我',
            iconType: 'fa fa-user-circle',
          },
          {
            path: '/my-skills',
            component: mySkills,
            name: '技术栈',
            iconType: 'fa fa-wrench',
          },
          {
            path: '/work-experience',
            component: workExperience,
            name: '经历',
            iconType: 'fa fa-file-text-o',
          },
          {
            path: '/my-works',
            component: myWorks,
            name: '作品',
            iconType: 'fa fa-bars',
          },
          {
            path: '/contact-me',
            component: contactMe,
            name: '联系我',
            iconType: 'fa fa-envelope',
          },
          {
            path: '/homePage',
            hidden: true,
            redirect: {path: '/about-me'}
          }
        ]
      },
    ]
  },
  {
    path: '/',
    name: '组件模块一',
    component: Home,
    iconType: 'fa fa-align-justify',
    children: [
      {path: '/myCom001', name: '组件01', component: myCom001},
      {path: '/myCom002', name: '组件02', component: myCom002},
      {path: '/myCom003', name: '组件03', component: myCom003},
    ]
  },
  {
    path: '/',
    name: '组件模块二',
    component: Home,
    iconType: 'fa fa-book',
    children: [
      {path: '/myCom021', name: '组件21', component: myCom021},
      {path: '/myCom022', name: '组件22', component: myCom022},
      {path: '/myCom023', name: '组件23', component: myCom023},
    ]
  },

  {
    path: '*',
    hidden: true,
    redirect: {path: '/login'}
  }
];

const router = new Router({
  routes,
});
export default router;



