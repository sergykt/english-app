import Link from 'next/link';

const NotFound = () => {
  return (
    <html lang='en'>
      <body>
        <div>
          <h1>Not Found</h1>
          <p>Could not find requested resource</p>
          <Link href='/'>Return Home</Link>
        </div>
      </body>
    </html>
  );
};

export default NotFound;
