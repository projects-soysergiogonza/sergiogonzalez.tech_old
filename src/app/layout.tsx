import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';
import { Inter } from '@assets/fonts';
import { Provider } from '@store/provider';
import { Header } from '@storybook/components';

export const metadata: Metadata = {
  title: 'Sergio González Sánchez',
  description: 'Frontend Developer',
  applicationName: 'Sergio González Sánchez',
  icons: {
    icon: '/assets/images/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Provider>
      <html lang='en'>
        <body className={Inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </Provider>
  );
}
