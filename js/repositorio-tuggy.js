document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

const fetchData = async() => {
    try {
        const resultado = await fetch('productos.json');
        const data = await resultado.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}