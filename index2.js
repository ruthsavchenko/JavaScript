console.log(fields)

//1. Необходимо сформировать массив который будет содержать только те поля которые имеют permissions.view: true

//#1 for
let result = [];
for (let i = 0; i < fields.length; i++){
    if (fields[i].permissions.view === true){
        result.push(fields[i]);
    }
}

console.log(result)

//#2 filter
const permissionsTrue = fields.filter(item => item.permissions.view === true)
console.log(permissionsTrue)


//2. Необходимо сформировать массив который будет содержать только те поля которые имеют все ключи пермиссий false

//#1 for
let result = [];
for (let i = 0; i < fields.length; i++){
    if(Object.values(fields[i].permissions).every(item => item === false)) {
        result.push(fields[i])
    }
}

console.log(result)

//#2 filter
let permissionsFalse = fields.filter(item => Object.values(item.permissions).every(item => item === false))
console.log(permissionsFalse)


// 3. Необходимо сформировать массив полей и заменить полям которые имеют objectRelation.objectId c айдишника объекта на полный объект данных об объекте. Взаимодействуем со вторым массивом

//#1 for
const arrays = [...objects, ...fields]; 

//#1 for
let result = [];
for (let i = 0; i < arrays.length; i++){
    if (arrays[i].objectRelation){
        let indexRelation = arrays[i].objectRelation.objectId;
        arrays[i].objectRelation.objectId = arrays[indexRelation - 1];
        result.push(arrays[i]);
    }
}

console.log(result)

//#2 map
let result = fields.map(item => {
    if(item.objectRelation) {
        let obj = objects.find(x => x.id === item.objectRelation.objectId)
        return {
            ...item, objectRelation: {objectId: obj} 
        }
    } else {
        return item
    }
})

console.log(result)


/* 4. Необходимо сформировать массив полей с проставленными пермиссиями в зависимости от того, что: 
- если у поля нет objectRelation, то пермиссии поля оставляем без изменений 
- если у поля есть objectRelation, то ставим все пермисии
true, если объект objectRelation имеет enabled: true. Если
же enabled: false, то ставим все пермиссии false */

let result = []
for (let valueFields of fields) {
    if (!valueFields.objectRelation) {
        valueFields
    } else {
        for (let valueObjects of objects) {
            if (valueFields.objectRelation.objectId === valueObjects.id && valueObjects.enabled) {
                Object.values(valueFields.permissions).every(item => item === true)
            } else if (valueFields.objectRelation.objectId === valueObjects.id) {
                Object.values(valueFields.permissions).every(item => item === false)
            }
        }
    }
}

console.log(fields)


//5. Необходимо сформировать массив объектов только тех у которых есть поля 

let result = []
for (let val of fields) {
    if (val.objectRelation) {
        for (let value of objects) {
            if (val.objectRelation.objectId === value.id) {
                result.push(value)
            }
        }
    }
}

console.log(result)


//6 Необходимо сформировать объект 

let result = fields.reduce((acc, item) => {
    if(item.objectRelation) {
        let objectId = item.objectRelation.objectId
        let fieldId = {}
        fieldId[item.id] = item.permissions
        if(acc[objectId]) {
            return {
                ...acc, [objectId]: [...acc[objectId], fieldId]
            }
        } else {
            return {
                ...acc, [objectId]: [fieldId]
            }
        }
    }
    return acc
}, {})

console.log(result)


//7. Необходимо сформировать массив полей в котором будет изменен ключ edit на true, в том случае когда у нас view тоже true

// #1 for
for (let i = 0; i < fields.length; i++) {
    if(fields[i].permissions.view === true) {
        fields[i].permissions.edit = true
    }
}

// #2 map
let result = fields.map((item) => {
    if(item.permissions.view) {
        return {
            ...item, permissions: {
                ...item.permissions, edit: true
            }
        }
    }
    return item
})

console.log(result)


// 8. Необходимо сформировать массив полей который будетсодержать только те поля у которых есть objectRelation и проставить всем этим полям дополнительный ключ relations: true

//#1 for
let result = [];
for(let i = 0; i < fields.length; i++) {
    if(fields[i].objectRelation) {
        fields[i].relations = true
        result.push(fields[i])
    }
}

console.log(result)

//#2 reduce
let result1 = fields.reduce((acc, item) => {
    if(item.objectRelation) {
        item.relations = true;
        acc.push(item)
    }
    return acc
}, [])

console.log(result1)


//9. Необходимо получить массив полей отсортированных по fieldName 

const sortName = fields.sort((a, b) => {
    a = a.fieldName
    b = b.fieldName
    return a > b ? 1 : a < b ? -1 : 0;
});

console.log(sortName)


// 10. Необходимо получить ответ на понимание того есть ли у нас хоть одно поле у которого все пермиссии true

// #1 for 
for (let i = 0; i < fields.length; i++) {
    if(fields[i].permissions.view === true && fields[i].permissions.edit === true && fields[i].permissions.remove === true) {
        console.log(true)
    }
}

// #2 some
let arePermissionsTrue = fields.some(item => Object.values(item.permissions).every(item => item === true))
console.log(arePermissionsTrue)
