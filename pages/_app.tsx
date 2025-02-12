import '../globals.css';
import type { AppProps } from 'next/app';
import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from 'next/head';
import config from './../next.config.mjs';

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
  const faviconPath = process.env.NODE_ENV === 'production' 
    ? `${config.basePath}/favicon.ico`
    : '/favicon.ico';

  return (
    <>
      <Head>
        <title>Demian Calleros - Portfolio</title>
        <link
          rel="icon"
          href={faviconPath + "?<generated>"}
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href={faviconPath + "?<generated>"}
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <div
        className={`${geistSans.variable} ${geistMono.variable} antialiased background flex flex-col min-h-screen p-8 gap-16 sm:p-16 font-[family-name:var(--font-geist-sans)]`}
      >
        <Border>
          <Component {...pageProps} />
        </Border>
      </div>
    </>
  );
}

export default MyApp;
