import React from 'react';
import Loadable from 'react-loadable';
import FullLoaderUI from '../containers/FullLoaderUI';

const LoadUI = Loadable({
  loader: () => import(/* webpackChunkName: "HomeUI" */ '../containers/HomeUI'),
  loading: () => <FullLoaderUI />,
});

const Home = () => <LoadUI />;

export default Home;
