const toggleData = (array: [], item: string) => array.includes(item) ? array.filter(i => i !== item) : [...array, item];

export {
    toggleData
};
