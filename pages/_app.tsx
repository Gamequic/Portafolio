import '../globals.css';
import type { AppProps } from 'next/app';
import type { Metadata } from "next";
import localFont from "next/font/local";

// project imports
import Border from './../components/border';

const geistSans = localFont({
  src: "./../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portafolio - Demian Calleros",
  description: "Explore the professional portfolio of Demian Calleros, a backend and fullstack developer specializing in Go and JavaScript. Innovative projects, technical expertise, and efficient solutions in web development.",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased background flex flex-col min-h-screen p-8 gap-16 sm:p-16 font-[family-name:var(--font-geist-sans)]`}
    >
      <Border>
        <Component {...pageProps} />
      </Border>
    </div>
  );
}

export default MyApp;
