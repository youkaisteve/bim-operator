[@yzw/bim-operator - v1.7.1](README.md) › [Globals](globals.md)

# @yzw/bim-operator - v1.7.1

# Bim-Operator

bim 轻量化模型操作接口

## Install && Useage

```shell
npm i bim-operator --save
```

- [document](./doc/globals.md)
- [changelog](./CHANGELOG.md)

## Usage

```js
import getProvider, { ProviderType } from 'bim-operator';

const provider = getProvider(ProviderType.BIMFACE);
// 获取3D模型操作对象
const bim3DModel = provider.bim3DModel;
// 获取3D模型操作对象
const bimDrawing = provider.bimDrawing;

// 加载模型
bim3DModel
    .load({
        viewToken: '<your view token>',
        domId: '<html dom id>',
        viewConfig: {
            // 支持hover
            enableHover: true,
            // 右键
            enableToggleContextMenuDisplay: true
        }
    })
    .then(() => {
        //help your self
    });

// 加载图纸
bimDrawing
    .load({
        viewToken: '<your view token>',
        domId: '<html dom id>'
    })
    .then(() => {
        //help your self
    });
```

## 支持的供应商

- bimface —— [示例](https://github.com/youkaisteve/bimface-demo)
