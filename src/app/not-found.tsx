import Link from 'next/link';

const NotFound = () => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='theme-color' content='#FFFFFF' />
        <meta name='description' content='English App for common purpose' />
        <link rel='icon' href='/favicon.ico' />
        <title>English App</title>
      </head>
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
