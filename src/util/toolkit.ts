export default {
    /**
     * 获取参数的字符串数组
     * @param args function->arguments
     */
    getArgumentsDisplayInfo(args): Array<String> {
        const results: Array<String> = [];
        for (let i = 0; i < args.length; i++) {
            results.push(JSON.stringify(args[i]));
        }
        return results;
    },
};
