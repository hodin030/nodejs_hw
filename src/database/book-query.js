exports.registNewBook = () => {

    return `
        INSERT 
        INTO TBL_BOOK
        (BOOK_NO, AUTHOR, BOOK_TITLE, DISCOUNT_RATE, REGULAR_PRICE, SELL_PRICE, PUBLISHED_DATE, PUBLISHER)
        VALUES
        (?,?,?,?,?,?,?,?)
        `;
};

exports.findBookByBookNo = () => {

    return `
        SELECT *
        FROM TBL_BOOK
        WHERE BOOK_NO = ?
    `;
};

exports.findAllBooks = () => {

    return `
        SELECT *
        FROM TBL_BOOK
    `;
};