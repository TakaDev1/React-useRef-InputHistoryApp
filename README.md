# React-useRef-InputHistoryApp

Reactの `useState` と `useRef` を使って、テキスト入力の履歴を管理する練習用アプリです。

## 📌 概要

テキストボックスに入力した文字列を送信すると、**1つ前に入力した値をコンソールへ出力**します。

* 現在の入力値 → `useState`
* 前回の入力値 → `useRef`

という役割分担で状態を管理します。

## 🛠 使用技術

* React
* TypeScript
* Vite
* Tailwind CSS
* `useState`
* `useRef`

## 📂 ディレクトリ構成

```text
src/
├── components/
│   └── HandleInputBox.tsx
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## 💡 実装内容

### 現在の入力値を管理

`useState` を使用して、テキストボックスに入力されている現在の値を管理します。

```tsx
const [text, setText] = useState<string>("");
```

入力内容が変更されるたびに `setText` で状態を更新します。

### 前回の入力値を管理

`useRef` を使用して、前回送信した入力値を保持します。

```tsx
const prevText = useRef<string | null>(null);
```

`useRef` の `.current` に値を保存することで、コンポーネントが再レンダリングされても値を保持できます。

### 入力履歴の取得

送信時に、まず `prevText.current` を確認してから、現在の入力値を保存します。

```tsx
console.log(`前回入力した値: ${prevText.current}`);
prevText.current = text;
```

この順番にすることで、**現在の入力ではなく1つ前の入力値**を取得できます。

## 🎯 学習ポイント

### 1. `useState` と `useRef` の使い分け

| Hook       | 用途                 |
| ---------- | ------------------ |
| `useState` | 画面に反映する現在の入力値      |
| `useRef`   | 再レンダリングを発生させずに値を保持 |

### 2. `useRef` の `.current`

`useRef` で保持した値は `.current` から取得・更新します。

```tsx
prevText.current
```

値を変更しても、それだけではコンポーネントの再レンダリングは発生しません。

### 3. Reactのイベント処理

`onChange` を使用して入力値を取得します。

```tsx
onChange={(e) => setText(e.target.value)}
```

### 4. TypeScriptによる型付け

入力イベントには `React.ChangeEvent<HTMLInputElement>` を指定しています。

```tsx
const handleInput = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  setText(event.target.value);
};
```

## 🚀 起動方法

依存関係をインストールします。

```bash
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで表示されたURLへアクセスしてください。

## 📝 動作例

例えば以下のように入力します。

```text
1回目：React
2回目：TypeScript
3回目：useRef
```

「送信」ボタンを押すと、コンソールには次のように表示されます。

```text
前回入力した値: 空
前回入力した値: React
前回入力した値: TypeScript
```

## 📚 このアプリで学べること

* `useState` による入力値の管理
* `useRef` による値の保持
* `.current` の使い方
* Reactのイベントハンドリング
* TypeScriptでのイベント型付け
* `useState` と `useRef` の役割の違い
* Reactコンポーネントの基本的な構成
