import React from 'react';
import './index.scss';
import Layout from './components/Layout';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}
