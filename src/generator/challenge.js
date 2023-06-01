const API = 'https://api.escuelajs.co/api/v1';
const urlApi = API;

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data =  await response.json();
    return data;
}

async function* iterData(urlApi) {
    try { 
        const products = await fetchData(`${urlApi}/products`);
        yield products;


        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        yield product.title;

        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        yield category.name;
    } catch (error) {
        console.error(error);
    }
}

const iD = iterData(API);
iD.next().then(({value, done}) => console.log(value))
iD.next().then(({value, done}) => console.log(value))
iD.next().then(({value, done}) => console.log(value))