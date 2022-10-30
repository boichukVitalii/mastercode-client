import './globals.css';
import { FC } from 'react';
import Navbar from './Navbar';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Main</title>
      </head>
      <body className='bg-main-blue'>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;