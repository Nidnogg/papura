import Head from 'next/head';
import Layout from './components/layout';
import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Papura Cadernos</title>
      </Head>
      <section className="main grid">

        <div className="product-square col">
      
        </div>

        <div className="product-square col">
      
        </div>

        <div className="product-square col">
          
        </div>

      </section>
    </Layout>
  );
}

/*
interesting approach for rendering products -
const pids = ['id1', 'id2', 'id3']
{
  pids.map((pid) => (
    <Link href="/post/[pid]" as={`/post/${pid}`}>
      <a>Post {pid}</a>
    </Link>
  ))
}
*/
export default Home;