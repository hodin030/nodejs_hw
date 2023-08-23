const getConnection = require('../database/connection');
const BookRepository = require('../repositories/book-repository');

exports.registNewBook = (book) => {

    return new Promise(async (resolve, reject) => {
        
        const connection = getConnection();

        connection.beginTransaction();

        try {

            const result = await BookRepository.registNewBook(connection, book);
            console.log('result :', result.insertId);

            const insertedBook = await BookRepository.findBookByBookNo(connection, result.insertId);
            console.log('insertedBook :', insertedBook);

            connection.commit();
            console.log('commit successfully');

            resolve(insertedBook);
        } catch (err) {
            connection.rollback();
            console.log('rollback successfully');

            reject(err);
        } finally {
            connection.end();
            console.log('connection is closed successfully')
        }
    });
};

exports.findBookByBookNo = (bookNo) => {

    return new Promise(async (resolve, reject) => {

        const connection = getConnection();

        const results = BookRepository.findBookByBookNo(connection, bookNo);

        connection.end();

        resolve(results);
    });
};

exports.findAllBooks = () => {

    return new Promise(async (resolve, reject) => {

        const connection = getConnection();

        const results = BookRepository.findAllBooks(connection);

        connection.end();

        resolve(results);
    });
};