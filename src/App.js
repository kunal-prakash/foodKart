import React from 'react';
import './index.css';
import Layout from './components/Layout';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from './utils/appStore';

export default function App() {
  return (
    <Provider store={appStore}>
      <Layout>
        <Outlet />
      </Layout>
    </Provider>
  );
}
