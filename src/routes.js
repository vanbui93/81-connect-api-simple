import React from 'react';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProductActionPage from './pages/ProductActionPage';
import ProductListPage from './pages/ProductListPage';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomePage />
  },
  {
    path: '/product/list',
    exact: false,
    main: () => <ProductListPage />
  },
  {
    path: '/product/add',
    exact: false,
    main: () => <ProductActionPage />
  },
  {
    path: '/product/:id/edit',
    exact: false,
    main: (match) => <ProductActionPage match={match} />
  },
  {
    path: '',
    exact: true,
    main: () => <NotFoundPage />
  }
]

export default routes;