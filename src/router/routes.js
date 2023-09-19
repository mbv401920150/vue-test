const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/IndexPage.vue') },
    ],
  },
  {
    path: '/lending',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'helloWorld', name: 'Lending-HelloWorld', component: () => import('pages/Lending/HelloWorld.vue') },
      { path: 'admin', name: 'Lending-Admin', component: () => import('pages/Lending/Admin.vue') },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
