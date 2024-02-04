function Author(name,birthYear,nationality)
{
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

function Book(title,author,genre,price)
{
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
    this.getBookInfo = function()
    {
        console.log(this.title,this.author,this.genre,this.price)
    }

}
let author1 = new Author("Saurabh", 1999, "Indian");
let book1 = new Book("Crime", author1, "Unknown", 200);
let author2 = new Author("Kumar", 2000, "American");
let book2 = new Book("Comedy", author2, "Smile", 500);
let author3 = new Author("Alice", 1985, "British");
let book3 = new Book("Mystery", author3, "Secrets Unveiled", 300);
let author4 = new Author("John", 1992, "Canadian");
let book4 = new Book("Science Fiction", author4, "Galactic Adventures", 450);
let author5 = new Author("Maria", 1980, "Italian");
let book5 = new Book("Romance", author5, "Love in Venice", 250);
book1.getBookInfo();
book2.getBookInfo();
book3.getBookInfo();
book4.getBookInfo();
book5.getBookInfo();



