//Ejercicio 8 Opcional

interface Book{
    title: string,
    isRead: boolean,
};

const booksTS: Book[] = [
    {title:"Harry Potter y la piedra filosofal", isRead:true},
    {title:"Canción de hielo y fuego", isRead:false},
    {title:"Devastación", isRead:true}
];

function isBookReadTS(books: Book[], titleToSearch: string): boolean{
    const [first] = books.filter(x => x.title === titleToSearch)
    return first ? first.isRead : false;
}

console.log(isBookReadTS(booksTS, "Devastación"));
console.log(isBookReadTS(booksTS, "Canción de hielo y fuego"));
console.log(isBookReadTS(booksTS, "Los Pilares de la Tierra"));