function stringifyJSON(obj) {
    // your code goes here
    if (typeof obj === "string") return `"${obj}"`;
    if (typeof obj === "function" || obj === undefined) return undefined;

    if (Array.isArray(obj)) {
        const result = [];
        obj.map((el) => {
            result.push(stringifyJSON(el));
        });
        return "[" + result.join(",") + "]";
    }

    if (typeof obj === "object" && obj !== null) {
        const result = [];
        for (const [key, value] of Object.entries(obj)) {
            if (stringifyJSON(obj[key]) === undefined) continue;
            result.push(`${stringifyJSON(key)}:${stringifyJSON(obj[key])}`);
        }
        return "{" + result.join(",") + "}";
    }

    return `${obj}`;
}