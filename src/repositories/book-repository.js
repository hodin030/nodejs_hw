const bookQuery = require('../database/book-query');

exports.registNewBook = (connection, newBook) => {

    return new Promise((resolve, reject) => {

        connection.query(
            bookQuery.registNewBook(),
            [
                newBook.bookNo,
                newBook.author,
                newBook.bookTitle,
                newBook.discountRate,
                newBook.regularPrice,
                newBook.sellPrice,
                newBook.publishedDate,
                newBook.publisher
            ],
            (err, result) => {
                if (err) {
                    reject(err);
                } 
                console.log('repo result: ', result);

                resolve(result);
            })
    });
}

exports.findBookByBookNo = (connection, bookNo) => {

    return new Promise((resolve, reject) => {
        connection.query(
            bookQuery.findBookByBookNo(),
            [bookNo],
            (err, result) => {
                if (err) {
                    reject(err);
                }

                resolve(result);
            });
    });
};

exports.findAllBooks = (connection) => {

    return new Promise((resolve, reject) => {
        connection.query(
            bookQuery.findAllBooks(),
            (err, result) => {
                if (err) {
                    reject(err);
                }

                resolve(result);
            });
    });
};