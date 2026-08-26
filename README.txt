受付回数・調剤基本料 ○×クイズ
==============================

【内容】
保険調剤Q&A Q005〜Q018をもとに、クイズ用に言い換えた全14問です。

【GitHubへアップロードするファイル】
index.html
style.css
script.js
config.js

※結果をGoogleスプレッドシートへ送る場合のみ、apps_script.gsも使用します。

【GitHubでのアップロード】
1. 作成済みの「uketukekaisu-quiz」リポジトリを開く
2. Add file → Upload files
3. index.html / style.css / script.js / config.js をまとめて選択
4. Commit changes
5. Settings → Pages
6. Deploy from a branch / main / root を選択して保存

【Googleスプレッドシートへ結果を送る場合】
1. スプレッドシートで Apps Script を開く
2. apps_script.gs の内容を貼る
3. ウェブアプリとしてデプロイ
4. 発行された /exec のURLを config.js の GAS_WEB_APP_URL に貼る
5. config.js をGitHubへ再アップロード

送信先シート名：受付回数回答
