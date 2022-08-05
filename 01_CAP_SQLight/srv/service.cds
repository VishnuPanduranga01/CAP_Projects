using { vishnu.db as DB } from '../db/dataModel';

service BookShop {
    entity Books as projection on DB.Books;
    entity Author as select from DB.Author;
    function getFullName() returns String;
}
 
