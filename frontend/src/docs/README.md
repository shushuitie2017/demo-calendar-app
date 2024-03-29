## 開発の進め方

1. 開発用にプロジェクトを立ち上げるためにコンテナを起動させる
```bash
docekr compose up
```

## 開発方針

このプロジェクトはAtomicDesignの手法に準ずる

## 1. Atoms

責務：UIとしての機能だけを提供する

“これ以上分けられない”＝機能性を破壊しないとされるUIの最小要素.
ex) ボタン・リンク・インプット

機能としての情報以外は、Atomsの関心から分離する

ボタンは「何かを押す」ためのだけの機能を提供
従って, そのボタンは
- [ ] 何かを削除するための機能なのか?,
- [ ] 追加するための機能なのか？,
- [ ] このボタンを押すことは危険そうなのか?,
- [ ] 安全そうなのか？"
といったことを知る必要はない

ex) ボタンは, "投稿"という文字と、緑色の安全そうな見た目で、カーソルを当てるとクリッカブルになる．
uSerは, "このボタンを押すことによって, 今操作しているものを投稿する"
のだと理解する
この関心ごとは"ユーザーの動機"にあたるため,上の階層からprops経由で渡す

:technologist:
- [ ] コンテキストとつないではいけない
- [ ] API通信処理を行ってはいけない

## 2. Molecules

責務: ユーザーの関心に関わるUIを提供する

1つのAtomsと追加の要素 or 2つ以上のAtomsから作られる要素を扱う小さなコンポーネント

MoleculesとAtomsの違いはモジュールか単体か？ということではなく,
"機能にユーザーの動機を追加する"ところにある．

Moleculesでは"何のためにボタンをクリックするのか", "何のために"テキストを入力するのか", 機能を組み合わせてユーザーの具体的な動機に応える機能の単位でUIをコンポーネント化する

つまりユーザーがやりたいこと自体を行う機能を提供するコンポーネント群になる

ex) 検索フォームには、インプットタグと、虫眼鏡アイコンもしくは"検索"と書かれたボタンがあるユーザーは「このUIでは、検索」のだと理解するがこのMoleculesコンポーネントは検索フォームの処理がどのように行われているのか知る必要はなく
ただ検索できることをユーザーへ伝えるためのものである

AtomsとMoleculesについてユーザーの関心は自分自信がやりたいことだからユーザーの関心に強く影響するのはMoleculesでありユーザーがAtomsを意識することはない

:technologist:
コンテキストとつないではいけません。
API通信処理を行ってはいけません。

## 3. Organisms

責務: ロジックに関心を持つ責務 + UIを提供する責務

コンポーネントで解決する独立したコンポーネント群を指す
独立したコンポーネント = そのコンポーネントを見るだけで機能の意図や役割がわかるようになる単位

独立したコンポーネントの中に独立したコンポーネントが入る場合もあるからOrganismsは別のOrganismsを含んでも構わない

Moleculesはユーザーの関心事に対して機能を提供したがOrganismsはコンポーネントで完結する機能を提供する

ex1) インスタのカードをイメージしたとき, ユーザーのアイコンや名前, フォローボタン, 写真, 本文などで１投稿記事に関する情報をまとめて1つのコンテンツとして独立することができる.

Organismsは独立してコンテンツを提供するから, この単位で切り取って画面に配置が可能
ヘッダー・ヒーローイメージ・投稿リスト・フッターなど

ex2) 記事一覧を表示するコンポーネントでは、記事の一覧を表示することができる
ユーザー情報を表示するコンポーネントでは ユーザーの簡易的な情報を閲覧したりユーザーのフォローをすることができる

MoleculesとOrganismsの違いについて
どちらも複数のAtomsやMoleculesを合わせて使うことやUIを提供する責務という点で似ているが, Moleculesが独立して存在できるコンポーネントではなく他のコンポーネントの機能を助けるヘルパー的な役割のコンポーネントであるのに対してOrganismsは独立して存在できるコンポーネントであるという点が異なる

ex) "フォロー数を表示するコンポーネント"はそれだけではどのように機能するかわからないのでMoleculesとなる
このコンポーネントがOrganismsであるユーザー情報を示すコンポーネント
の中にあることによってはじめて "ユーザーをフォローしている数もしくはフォローされている数だ" と役割を知ることができるためである

:technologist:
- [ ] コンテキストとつなぐ OK
- [ ] API通信処理を行う OK


---

ここからは開発者外とのコミュニケーションで使用するもの

Pagesはユーザーが実際に触れるプロダクトのUIそのもの

## 4. Templates

ページの雛形
具体的なデータは持たないが
Organisms,
Molecules,
Atomsを実際のサービスページ同様に配置

Templatesの目的はコンポーネントがページ上で正しくレイアウトされるか確認することである
具体的なコンテンツが無いのでレイアウト構造のものものの良し悪しに集中して確認が可能である

レイアウトのほかにもTemplatesが含むコンポーネントがページ全体で適切に連携して動作するかを確認可能
特定のコンテンツに依存した作りになっていないかを確認するために重要
コンテンツとプロダクトのUIを分離するための大事な層

## 5. Pages
Templatesに実際のコンテンツを流し込んだもの
実際のコンテンツに影響されるためカプセル化はできず再利用もできないのでコンポーネントと言えるかも微妙

Pagesの役割はTemplatesを介してコンテンツやルーティングをコンポーネントに接続することである
PagesとTemplatesを分離することでレイアウトデザインをコンテンツから分離できるためレイアウトテストを効率良く行うことができる

<img width="745" alt="Screenshot 0004-08-02 at 1 00 55" src="https://user-images.githubusercontent.com/83538851/182191162-19af0b37-a76f-4874-94ad-b13b73f5b5fd.png">
<img width="745" alt="Screenshot 0004-08-02 at 1 01 15" src="https://user-images.githubusercontent.com/83538851/182191599-88669341-c6d2-4503-a2de-c1f96aa8ad62.png">

### Atomic Designについては以下を読んでみてください
- [ ] https://atomicdesign.bradfrost.com/table-of-contents/
- [ ] https://zenn.dev/takepepe/articles/atomic-redesign