using { vishnu.db } from '../db/dataModel';

service customService {
    @readonly
    entity GetBooks as projection on db.Books;

    @insertonly
    entity AddBooks as projection on db.Books;

    entity UpdateBooks as projection on db.Books;
    
    entity DeleteBooks as projection on db.Books;

    function getDate() returns DateTime;

    function getMoreStockBook() returns array of GetBooks;
    
    action decreaseQuanity(ID:String) returns String;

}
