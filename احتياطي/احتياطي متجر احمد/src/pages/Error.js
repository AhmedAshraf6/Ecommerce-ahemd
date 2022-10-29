import React, { useEffect } from 'react';
const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>Error</div>;
};

export default Error;
