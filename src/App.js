import React from 'react';
import './index.scss';
import MainContainer from './components/MainContent/MainContainer';
import Layout from './Layout';

export default function App() {
  return (
    <>
      <Layout>
        <MainContainer />
      </Layout>
    </>
  );
}
