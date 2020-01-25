// Ejercicio 8


const books = [
    {title:"Harry Potter y la piedra filosofal", isRead:true},
    {title:"Canción de hielo y fuego", isRead:false},
    {title:"Devastación", isRead:true}
];

function isBookRead(books, titleToSearch){
    const [first] = books.filter(x => x.title === titleToSearch)
    return first ? first.isRead : false;
}

console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));
