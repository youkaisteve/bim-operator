import { decorate } from 'yk-aspect';
function handleDescriptor(target, key, descriptor) {
    const fn = descriptor.value;
    return {
        ...descriptor,
        value() {
            let methodCallResult = fn.apply(this, arguments);
            if (methodCallResult && methodCallResult.constructor.name === 'Promise') {
                return methodCallResult.then(result => {
                    this.viewer3D.render();
                    return result;
                });
            } else {
                this.viewer3D.render();
                return methodCallResult;
            }
        }
    };
}

export default function needRender() {
    return decorate(handleDescriptor);
}
