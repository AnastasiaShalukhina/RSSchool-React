import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <>
      <div>
        About us. Go <Link to="/">home</Link>
      </div>
    </>
  );
}

export default AboutPage;
