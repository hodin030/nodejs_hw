class BookDTO {

    bookNo;
    author;
    bookTitle;
    discountRate;
    regularPrice;
    sellPrice;
    publishedDate;
    publisher;

    constructor(data) {
        this.bookNo = data.bookNo;
        this.author = data.author;
        this.bookTitle = data.bookTitle;
        this.discountRate = data.discountRate;
        this.regularPrice = data.regularPrice;
        this.sellPrice = data.sellPrice;
        this.publishedDate = data.publishedDate;
        this.publisher = data.publisher;
    }
}

module.exports = BookDTO;