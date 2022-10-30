import './globals.css';
import { FC } from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Main</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;