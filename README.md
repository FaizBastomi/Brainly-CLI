## Brainly CLI

> just another brainly cli

## Cara pasang / How to Install

### Termux
1. via curl
```bash
pkg install curl -y
sh -c "$(curl -fsSL https://github.com/FaizBastomi/Brainly-CLI/raw/bljr/install.sh)"
```

2. via git `clone`
```bash
pkg install nodejs git -y
git clone https://github.com/FaizBastomi/Brainly-CLI.git 'brainly'
cd brainly
npm i
npm start
```

### Laptop or PC

- Windows
1. pastikan [nodejs](https://nodejs.org/downloads) dan [git](https://git-scm.com) sudah terinstall. Bila belum silahkan download (click pada kata yang berwarna biru)
2. cloning project and install
```bash
git clone https://github.com/FaizBastomi/Brainly-CLI.git 'brainly'
cd brainly
npm i
npm start
```

- Linux (Ubuntu)
1. pastikan [nodejs](https://nodejs.org/en/) dan [git](https://git-scm.com) sudah terinstall. Bila belum silahkan ikuti langkah berikut:
```bash
apt-get install nodejs git -y
```
2. lalu instalasi
```bash
git clone https://github.com/FaizBastomi/Brainly-CLI.git 'brainly'
cd brainly
npm i
npm start
```
3. bisa juga memakai `curl`
```bash
apt-get install curl -y
sh -c "$(curl -fsSL https://github.com/FaizBastomi/Brainly-CLI/raw/bljr/install.sh)"
```