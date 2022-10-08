import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="ツイッターの文字をプリコネRのミヤコの口癖のなのに変換するChrome拡張なの" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@JADENgygo" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="プリコネなの" />
        <meta property="og:description" content="ツイッターの文字をプリコネRのミヤコの口癖のなのに変換するChrome拡張なの" />
        <meta property="og:url" content="https://priconne-nano.vercel.app" />
        <meta property="og:image" content="https://priconne-nano.vercel.app/img/card.webp" />
        <link rel="icon" href="/peko.png" />
      </Head>
      <body>
        <script src="/script.js" async />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
