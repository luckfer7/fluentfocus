import './globals.css';
import { Inter, Nunito, Raleway } from 'next/font/google';

export const metadata = {
  title: "FluentFocus",
  description: "Improve your English conversation skills with questions, texts, and interactive resources.",
  icons: {
    icon: '/favico.png',
  }
};

const inter = Inter({ subsets:['latin'], variable: '--font-inter' });
const nunito = Nunito({ subsets:['latin'], variable: '--font-nunito' });
const raleway = Raleway ({ subsets:['latin'], variable: '--font-raleway' });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${nunito.variable} ${raleway.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
