const HttpStatus = require('http-status');
const BookDTO = require('../dto/book-dto')
const BookService = require('../services/book-service');

exports.registNewBook = async (req, res, next) => {

    const result =  await BookService.registNewBook(new BookDTO(req.body));

    console.log('result.bookNo', result.bookno);
    if(result) {
        res.status(HttpStatus.CREATED).send({
            status:HttpStatus.CREATED,     //201
            message: 'CREATED',
            result: {
                bookNo: result
            },
            contentLocation: `/books/${result.bookNo}`,
        });
    } else {
        res.status(HttpStatus.BAD_REQUEST).send({
            status:HttpStatus.BAD_REQUEST,    //400
            message: 'BAD REQUEST',
            code: -888888,
            results: [],
            links: [
                {
                    rel: 'bookRegist',
                    method: 'POST',
                    href: 'https://api.ohgiraffers.com/api/v1/books'
                }
            ]
        });
    }
}

exports.findBookByBookNo = async (req, res, next) => {

    console.log(req.params.bookNo);
    const book =  await BookService.findBookByBookNo(req.params.bookNo);

    if(book && book.length > 0) {
        res.status(HttpStatus.OK).send({
            status:HttpStatus.OK,   //200
            message: 'OK',
            results: book
        });
    } 

    if(book && book.length === 0) { 

        res.status(HttpStatus.NOT_FOUND).send({
            status:HttpStatus.NOT_FOUND,    //404
            message: 'NOT FOUND',
            code: -999999,
            results: [],
            links: [
                {
                    rel: 'bookRegist',
                    method: 'POST',
                    href: 'https://api.ohgiraffers.com/api/v1/books'
                }
            ]
        });
    }
}

exports.findAllBooks = async (req, res, next) => {

    const books =  await BookService.findAllBooks();

    res.status(HttpStatus.OK).send({
        status:HttpStatus.OK,
        message: 'OK',
        results: books
    });
    
}