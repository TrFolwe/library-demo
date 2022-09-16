const bookCategories = [{
    _id: 1,
    name: "Roman"
}, {
    _id: 2,
    name: "Bilim Kurgu"
}];
const books = [{
    _categorie_id: 1,
    _books: {
        1: "Roman kitap1",
        2: "Roman kitap2",
        3: "Roman kitap3"
    }
}, {
    _categorie_id: 2,
    _books: {
        1: "Kurgu kitap1",
        2: "Kurgu kitap2",
        3: "Kurgu kitap3"
    }
}];

$(() => { //LIBRARY ACTIONS

    //Elements
    const categoriesElement = $('.book-categories');
    const booksElement = $('.books');

    //fill categories method
    const fillCategories = () => bookCategories.forEach(categorie => categoriesElement.append(new Option(categorie.name, categorie._id)));
    
    //fill books method
    const fillBooks = categorieId => {
        booksElement.empty();
        $.each(books.find(i => i._categorie_id.toString() === categorieId)._books, (bookId, bookName) => booksElement.append(new Option(bookName, bookId)));
    };

    //fill default the category books
    $.each(books.find(i => i._categorie_id.toString() === "1")._books, (bookId, bookName) => $('.books').append(new Option(bookName, bookId)));

    fillCategories();

    //categorie select action
    categoriesElement.on('change', action => fillBooks($(action.target).find("option:selected").val()));
    booksElement.on('change', action => alert(`Selected book name: ${$(action.target).find("option:selected").text()}`));
});