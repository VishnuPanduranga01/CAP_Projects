namespace vishnu.db;
using {cuid} from '@sap/cds/common';

@cds.persistence.exists  // this is for not creating table again
entity Books : cuid {
    bookName:String;
    quanity:Integer;
    author: Association to Author;
};

@cds.persistence.exists 
entity Author : cuid {
    authorName:String;
    books: Association to many Books on books.author = $self;
}

