// export interface IBook{
//     id: number;
//     bookAuthor: string;
//     bookTitle: string;
//     bookPrice: number;
//     bookDescription: string;
//     bookReviews: number;
//     bookImageUrl: string;
//     booksInStock: number;
//     publishedOn: Date;
//     inStock: string;
// }


//Match with the API
export interface IBook {
    id: string;
    name: string;
    productCode: string;
    releaseDate: Date
    description: string;
    author: string;
    genre: string;
    specifications: string;
    inStock: boolean;
    price: number;
    starRating: number
    imageUrl: string;
}