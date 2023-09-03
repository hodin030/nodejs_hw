const express = require('express');
const router = express.Router();
const BookController = require('../controllers/book-controller');

router.get('/', BookController.findAllBooks);   
router.get('/:bookNo', BookController.findBookByBookNo);
router.post('/', BookController.registNewBook);

/* 함수 호출 시 매개변수 입력할 필요 없는 이유: 
    router에서 알아서 기본 매개변수 (req, res, next) 생성해준다!! */

module.exports = router;