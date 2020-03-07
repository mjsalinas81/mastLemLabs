import Router, { RouteConfig } from 'vue-router';
import { MemberTable, DetailsMember } from './components';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: MemberTable
  },
  {
    path: '/:organization',
    component: MemberTable,
    props: true
  },
  {
    path: '/member/:login',
    component: DetailsMember,
    props: true
  }
];

export const router = new Router({
  routes
});
