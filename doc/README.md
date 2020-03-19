[bim-operator - v1.0.13](README.md) › [Globals](globals.md)

# bim-operator - v1.0.13

# Bim-Operator

bim 轻量化模型操作接口

## Install

```shell
npm i bim-operator --save
```

## Usage

```js
import getProvider, { ProviderType } from 'bim-operator';
const bimface = getProvider(ProviderType.BIMFACE);

bimface
    .loadModel({
        viewToken: '<your viewtoken>',
        url: 'https://static.bimface.com/api/BimfaceSDKLoader/BimfaceSDKLoader@latest-release.js',
        domId: '<your html dom id>'
    })
    .then(async () => {
        const floors = await this.bimface.getFloors();
        console.log(floors);
        // ...
    });
```

## 支持的供应商

bimface
