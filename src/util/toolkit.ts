export default {
    /**
     * 获取参数的字符串数组
     * @param args function->arguments
     */
    getArgumentsDisplayInfo(args): string[] {
        const results: string[] = [];
        for (const arg of args) {
            results.push(JSON.stringify(arg));
        }
        return results;
    },
};
