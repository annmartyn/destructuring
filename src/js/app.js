'use strict';

export default function getAttacks(character) {
    let newArr = [];

    character.special.forEach((obj) => {
        let newObj = {};
        const { id, name, icon, description = 'Описание недоступно' } = obj;
        newObj['id'] = id;
        newObj['name'] = name;
        newObj['icon'] = icon;
        newObj['description'] = description;
        newArr.push(newObj);
    });

    return newArr;
}