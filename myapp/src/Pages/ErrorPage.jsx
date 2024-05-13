import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <section>
<div className="justify-center mt-6rem display" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <h1>Oops</h1>
        <h2>This page is not found!</h2>
        <Link to='/'>
          <button className="py-2 px-6 bg-red-500 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Go Home</button>
        </Link>
      </div>
    </section>
  );
}
