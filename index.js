// console.log(objects)

//1 Необходимо получить отсортированный массив объектов по дате.

// const sortDate = objects.sort((a, b) => {
//     a = a.date.split('-').reverse().join('');
//     b = b.date.split('-').reverse().join('');
//     return a > b ? 1 : a < b ? -1 : 0;
// });

// console.log(sortDate)


//2 Необходимо получить массив объектов которые имеют enabled: true

//for
// let result = [];
// for (let i = 0; i < objects.length; i++){
//     if (objects[i].enabled === true){
//         result.push(objects[i]);
//     }
// }

// console.log(result)

//filter
// const enabledTrue = objects.filter(item => item.enabled === true)
// console.log(enabledTrue)


//3 Необходимо получить объект объектов собранных по месяцам и годам.

// reduce
// const result = objects.reduce((acc, item) => {
//     const [, mm, yyyy] = item.date.split('-')

//     if (acc[yyyy]) {
//         if(acc[yyyy][mm]) { 
//             return {
//                 ...acc, [yyyy]: {...acc[yyyy], [mm]: [...acc[yyyy][mm], item]}
//             }
//         } else {
//             return {
//                 ...acc, [yyyy]: {...acc[yyyy], [mm]: [item]}
//             }
//         }
//     } else {
//         return {
//             ...acc, [yyyy]: {[mm]: [item]}
//         }
//     }
// }, {})

// console.log(result)


////for 
// let result = {}
// for (let i = 0; i < objects.length; i++) {
//     let year = objects[i].date.split('-')[2]
//     result[year] = {};
//     for (let j = 0; j < objects.length; j++) {
//         if (objects[j].date.split('-')[2] === year) {
//             let month = objects[j].date.split('-')[1]
//             result[year][month] = [];
//             for (let k = 0; k < objects.length; k++) {
//                 if (objects[k].date.split('-')[2] === year && objects[k].date.split('-')[1] === month) {
//                     result[year][month].push(objects[k])
//                 }
//             }
//         }
//     }
// }

// console.log(result)


//4 Необходимо получить массив объектов которым необходимо заменить relationId на полный объект данных.

//for
// let result = [];
// for (let i = 0; i < objects.length; i++){
//     if (objects[i].relation){
//         objects[i].relation.relationId = objects[objects[i].relation.relationId - 1];
//         result.push(objects[i]);
//     } else {
//         result.push(objects[i])
//     }
// }

// console.log(result)


//map
// let result = objects.map(item => {
//     if(item.relation) {
//         const obj = objects.find(x => x.id === item.relation.relationId)
//         return {
//             ...item, relation: obj
//         }
//     } else {
//         return item
//     }
// })

// console.log(result)


//5 Необходимо получить массив объектов у которых есть relation.

//for
// let result = [];
// for (let i = 0; i < objects.length; i++){
//     if (objects[i].relation){
//         result.push(objects[i]);
//     }
// }

// console.log(result)

//filter
// const relationObj = objects.filter((item) => item.relation)


//6 Необходимо получить объект в котором сформировать данные по relation объектам.

// for
// let result = {}
// for (let i = 0; i < objects.length; i++) {
//     if (objects[i].relation) {
//         const realtionId = objects[i].relation.relationId;
//         let relationObj = result[realtionId]

//         if(relationObj) {
//             result[realtionId].push(objects[i])
//         } else {
//             result[realtionId] = [objects[i]];
//         }
//     }
// }

// console.log(result)

//reduce
// const result = objects.reduce((acc, item) => {
//     if (item.relation) {
//         const realtionId = item.relation.relationId;
//         const relationObj = acc[item.relation.relationId]

//         if(relationObj) {
//             return {
//                 ...acc, [realtionId]: [...acc[realtionId], item]
//             }
//         } else {
//             return {
//                 ...acc, [realtionId]: [item]
//             } 
//         }
//     }
//     return acc
// }, {})

// console.log(result)


//7 

// let result = []
// for(let i = 0; i < objects.length; i++) {
//     if (objects[i].date.split('-')[2] === '2020') {
//         objects[i].enabled = true;
//         result.push(objects[i])
//     }
// }

// console.log(result)

//map
// let result = []
// objects.map(item => {
//     if (item.date.split('-')[2] === '2020') {
//         result.push(item)
//         return (item.enabled = true)
//     } else {
//         return item
//     }
// })

// console.log(result)


//reduce
// let result = objects.reduce((acc, item) => {
//     if (item.date.split('-')[2] === '2020') {
//         return [...acc, {...item, enabled: true}]
//     }
//     return acc
// }, [])

// console.log(result)

//8 

//for
// const array = (objects) => {
//     let result = [];

//     for (let i = 0; i < objects.length; i++) {
//         if (objects[i].relation) {
//             const obj = objects.find(x => x.id === objects[i].relation.relationId);
//             objects[i].enabled = obj.enabled
//             result.push(objects[i])
//         } else {
//             objects[i].enabled = false;
//             result.push(objects[i])
//         }
//     }
//     return result
// }

// console.log(array(objects))

//map
// const result = objects.map((item) => {
//     if(item.relation) {
//         const obj = objects.find(x => x.id === item.relation.relationId)
//         return {...item, enabled: obj.enabled} 
//     }
//     return {...item, enabled: false}
// })

// console.log(result)



//9 Необходимо получить понимание того, что есть ли у всех объектов relation или нет

////#1
// let result;
// for (let i = 0; i < objects.length; i++){
//     if (objects[i].relation){
//         result = true;
//     }
//     else {
//         result = false;
//         break;
//     }
// }

// console.log(result);

////#2
// let isRelationExist = objects.every(item => item.relation)
// console.log(isRelationExist)


//10 Необходимо получить понимание есть ли объекты с enabled: true

// //#1
// for (let i = 0; i < objects.length; i++) {
//     if(objects[i].enabled == true) {
//         console.log(true)
//     }
// }

// //#2
// let isRelationExist = objects.some(item => item.enabled)
// console.log(isRelationExist)