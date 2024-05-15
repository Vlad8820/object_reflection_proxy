// TODO: write your code here

function orderByProps(obj, order) {
    const sortedProps = [];

    order.forEach(key => {
        if (obj.hasOwnProperty(key)) {
            sortedProps.push({ key, value: obj[key] });
            delete obj[key];
        }
    });

    const remainingKeys = Object.keys(obj).sort();
    remainingKeys.forEach(key => {
        sortedProps.push({ key, value: obj[key] });
    });

    return sortedProps;
}

export { orderByProps };

function extractSpecials({ special }) {
    return special.map(({ id, name, icon, description = 'Описание недоступно' }) => ({
        id,
        name,
        description,
        icon,
    }));
}

export { extractSpecials };

import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));
