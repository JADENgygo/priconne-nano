import type { NextPage } from 'next'
import Image from 'next/future/image'

const Home: NextPage = () => {
  return (
    <div className="container">
      <p>ツイッターの文字をプリコネRのミヤコの口癖のなのに変換するChrome拡張なの</p>
      <Image src="/priconne-nano.webp" className="img-fluid" width="599" height="247" alt="tweet" />
      <p className="fw-bold mt-3">対応ブラウザなの</p>
      <p>Chrome拡張をインストールできるブラウザなの</p>
      <p className="fw-bold text-danger">注意事項なの</p>
      <p>本拡張機能の利用により、ユーザーが何らかの被害・損害を被ったとしても、開発者は一切の責任を負いませんなの</p>
      <p className="mt-3 fw-bold">インストール方法なの</p>
      <p>
        1. リンクから拡張をダウンロードして、zipファイルを解凍しろなの
        <br />
        <a href="/priconne-nano.zip" className="link">&gt;&gt; 拡張をダウンロード</a>
      </p>
      <p>
        2. ブラウザの拡張機能の画面で、デベロッパーモードをオンにして、パッケージ化されていない拡張機能を読み込むをクリックしろなの<br />
        (画像はChromeの画面だけど、他のブラウザでもだいたい同じなの)
        <Image src="/extensions_setting.webp" className="img-fluid" width="837" height="108" alt="setting" />
      </p>
      <p>3. 1.で解凍してできたフォルダを選択すると拡張がインストールされるの</p>
    </div>
  )
}

export default Home
