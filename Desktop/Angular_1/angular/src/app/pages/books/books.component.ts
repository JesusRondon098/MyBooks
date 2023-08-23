import { Component } from '@angular/core';
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
      // new Book(123,12,"El cuervo","Dura","Edgar Allan Poe",30, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0eHefIwgHZt0U-lCKSf46AxwHetT0ICZTHMmXYKfK9Gwiavx4HNyD4ey0nwCjUqKD7M"),
      
    ]
  }
  public nuevoLibro(id_book:number, id_user:number, title:string, type:string, author:string, price:number, photo:string){
    let libro = new Book(id_book,id_user,title,type,author,price,photo)
    this.books.push(libro)
    console.log(this.books)
  }
}
