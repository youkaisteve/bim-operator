import { decorate } from 'yk-aspect';
function handleDescriptor(target, key, descriptor) {
    const fn = descriptor.value;
    return {
        ...descriptor,
        value() {
            let methodCallResult = fn.apply(this, arguments);
            if (methodCallResult && methodCallResult.constructor.name === 'Promise') {
                return methodCallResult.then((result) => {
                    this.render();
                    return result;
                });
            } else {
                this.render();
                return methodCallResult;
            }
        },
    };
}

/**
 * bim操作需要render，为method打上标签后，会调用自身的render方法
 */
export default function needRender() {
    return decorate(handleDescriptor);
}
