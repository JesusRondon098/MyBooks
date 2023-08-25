import { Component,Input } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public books:Book[]
  constructor(){
    this.books=[
      
    ]
  }
  public nuevoLibro(id_book:number, id_user:number, title:string, type:string, author:string, price:number, photo:string){
    let libro = new Book(id_book,id_user,title,type,author,price,photo)
    this.books.push(libro)
    console.log(this.books)
  }
  borrar(book:Book){
    this.books = this.books.filter(prueba => prueba.id_book != book.id_book);
  }
}
