import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'English App - application for learning English',
  description: 'English App for common purpose',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return children;
};

export default RootLayout;
