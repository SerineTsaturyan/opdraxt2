const person = [
    {
        name: 'Jon',
        age: 15,
        mail: 'Jon@hotmail.com',
        sity: 'Brussel',
        tel: '02358554744',
    },
    {
        name: 'Ben',
        age: 85,
        mail: 'Ben@gmail.com',
        sity: 'Brussel',
        tel: '02358554744',
    },
    {
        name: 'kim',
        age: 26,
        mail: 'Kim@yandex.com',
        sity: 'Brussel',
        tel: '02358554744',
    },
    {
        name: 'Bin',
        age: 45,
        mail: 'Binbon@yandex.com',
        sity: 'Stanbul',
        tel: '02358554744',
    },
    {
        name: 'Don',
        age: 31,
        mail: 'Don@hotmail.com',
        sity: 'Gent',
        tel: '02358554744',
    },
    {
        name: 'Bush',
        age: 32,
        mail: 'Bush@gmail.com',
        sity: 'Brussel',
        tel: '02358554744',
    },
    {
        name: 'Ani',
        age: 29,
        mail: 'Ani@yandex.com',
        sity: 'Gent',
        tel: '02358554744',
    },
    {
        name: 'Bonbon',
        age: 45,
        mail: 'Bon@hotmail.com',
        sity: 'Stanbul',
        tel: '02358554744',
    },
    {
        name: 'Irina',
        age: 71,
        mail: 'Irina@gmail.com',
        sity: 'Gent',
        tel: '02358554744',
    },
    {
        name: 'Ann',
        age: 45,
        mail: 'Ann@hotmail.com',
        sity: 'Stanbul',
        tel: '023565454244',
    },
]
let resulOne = person.filter(function (item, index, array) {
    return item.age < 30;
});
console.log(resulOne);

let resultwee = person.filter(function (item, index, array) {
    return item.sity === 'Gent';
});
console.log(resultwee);

let resultdrie = person.filter(function (item, index, array) {
    return item.sity === 'Stanbul';
});
console.log(resultdrie);

let resultvier = person.filter(function (item, index, array) {
    return item.sity === 'Brussel';
});
console.log(resultvier);

let personmail = person.filter(function (item) {
    return item.mail.endsWith("@gmail.com")
});

personmail.forEach( p => console.log(p.name +": \t"+p.mail));
let personmail2 = person.filter(function (item) {
    return item.mail.endsWith("@hotmail.com")
});

personmail2.forEach( p => console.log(p.name +": \t"+p.mail));

let personmail3 = person.filter(function (item) {
    return item.mail.endsWith("@yandex.com")
});

personmail3.forEach( p => console.log(p.name +": \t"+p.mail));

