
import { db } from '../firebase';
import { Animal } from '../Models/animal';

//get functions

export const getAnimals = async function (animal) {
    const query = await db.collection(animal).limit(20).get();

    let animals = [];

    query.docs.forEach((doc) => {
        const animal = Animal.fromFirestore(doc);
        if (animal) {
            animals.push(animal);
        }
    });
    console.log('Animals', animals);

    return animals;
};

export const getAnimalsByCity = async function (animal, city) {
    const documentToQuery = animal.toLowerCase() + "s";
    const query = await db
        .collection(documentToQuery)
        .where('location', 'array-contains', city)
        .get();

        let animals = [];

        query.docs.forEach((doc) => {
            const animal = Animal.fromFirestore(doc);
            if (animal) {
                animals.push(animal);
            }
        });

        return animals;
}

export const getAnimalsByFilter = async function (animal, city, weight, price) {
    console.log({animal, city, weight, price})
    const weightStart = !!weight ? Number(weight.split("-")[0]) : 0
    const weightEnd = !!weight ? Number(weight.split("-")[1]) : 99999999
    const priceStart = !!price ? Number(price.split("-")[0]) : 0
    const priceEnd = !!price ? Number(price.split("-")[1]) : 99999999
    const documentToQuery = animal.toLowerCase();
    
    const query = await db
        .collection(documentToQuery)
        .where('location', 'array-contains', city)
        .where('weightInKG', '>=', weightStart).where('weightInKG', '<=', weightEnd)
        .get();

        let animals = [];

        query.docs.forEach((doc) => {
            const animal = Animal.fromFirestore(doc);
            if (!!animal && animal.price >= priceStart && animal.price <= priceEnd) {
                animals.push(animal);
            }
        });

        console.log("#### animals", animals)

        return animals;
}

//add functions 

export const addAnimal = async function (animal, data) {
    await db.collection(animal).add(data);
};

export const getAnimalById = async function (animal, id) {
    const query = await db.collection(animal).doc(id).get();
    return Animal.fromFirestore(query);
};