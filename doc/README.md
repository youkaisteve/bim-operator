[bim-operator - v1.0.15](README.md) › [Globals](globals.md)

# bim-operator - v1.0.15

# Bim-Operator

bim 轻量化模型操作接口

## Install

```shell
npm i bim-operator --save
```

## Usage

```js
import getProvider, { ProviderType } from 'bim-operator';

const provider = getProvider(ProviderType.BIMFACE);
// 获取3D模型操作对象
this.bim3DModel = provider.bim3DModel;
// 获取3D模型操作对象
this.bimDrawing = provider.bimDrawing;

// 加载模型
await this.bim3DModel.loadModel({
    viewToken: '<your view token>',
    domId: '<html dom id>',
    viewConfig: {
        // 支持hover
        enableHover: true,
        // 右键
        enableToggleContextMenuDisplay: true
    }
});

// 加载图纸
await this.bimDrawing.load({
    viewToken: '<your view token>',
    domId: '<html dom id>'
});
```

## 支持的供应商

bimface
