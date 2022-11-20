# react-app002

## 構成

### フロントエンド

- typescript: 4.8.4
- react: 18.2.0
- react-dom: 18.2.0
- next: 12.3.1
- @fortawesome/react-fontawesom: 0.2.0
- @fortawesome/free-solid-svg-icons: 6.2.0

### バックエンド

- nestjs: 9.0.0
- prisma: 4.4.0
- typescript: 4.3.5

### その他

- docker
- MySQL: 8.0

## 仕様

- 画面

  - トップ画面
  - 新規作成画面
  - 編集画面

- 処理
  - 一覧表示
  - 検索処理
  - 新規登録処理
  - 詳細表示
  - 編集処理
  - 削除処理

## 環境構築

### 1. docker image を作成

```
docker-compose build
```

### 2. コンテナを起動

```
// フロントエンド、バックエンド、DBのコンテナを起動する
docker-compose up -d
```

### 3. マイグレーション、シーディング (テーブル、データ作成)

```
make db-setup
```

### 4. ブラウザで表示

```
url: http://localhost
```

注: Todo のデータが表示されない場合は、少し待ってからリロードすること
バックエンドのアプリケーションの立ち上げに少し時間がかかるため

<br >

## 補足

### DB 接続情報

```
DBMS: mysql: 8.0
host: 127.0.0.1
database: react002
user: user
password: pass
port: 3306
```

### 停止する場合

以下のコマンドで docker のコンテナごと削除する

```
docker-compose down -v
```
