const express = require('express');
const morgan = require('morgan');
const BookController = require('./src/controllers/book-controller');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

const bookRouter = require('./src/routes/book-route');
app.use('/books', bookRouter);

app.listen(8888, () => console.log('Listening on port 8888!'));

// BookController.registNewBook({
//     author: '강수의',
//     bookTitle: '맛있는 육회 고르는법',
//     discountRate: 10,
//     regularPrice: 20000,
//     sellPrice: 18000,
//     publishedDate: '2020-01-01',
//     publisher: '메타출판사',
// });

// BookController.findBookByBookNo(4);

// BookController.findAllBooks();

/* api와 연동하는 경우 router에서 함수를 실행하기 때문에 app.js에서 함수 호출할 필요 없음!! */
