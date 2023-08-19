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
      // new Book(1,12,"Pueblo","belico","jesus",123, "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202112/15/00183180700177____1__1200x1200.jpg"),
      // new Book(2,23,"Cara","Terror","Carlos",45,"https://img.freepik.com/psd-gratis/presentacion-realista-cubierta-libro_1310-24.jpg?w=740&t=st=1691657047~exp=1691657647~hmac=40de6a199f0487db9a0ba10b46cada92eb58e2f80473be35c218298582943060"),
      // new Book(2,23,"Cara","Terror","Carlos",45,"https://img.freepik.com/psd-gratis/presentacion-realista-cubierta-libro_1310-24.jpg?w=740&t=st=1691657047~exp=1691657647~hmac=40de6a199f0487db9a0ba10b46cada92eb58e2f80473be35c218298582943060"),
      // new Book(2,23,"Cara","Terror","Carlos",45,"https://img.freepik.com/psd-gratis/presentacion-realista-cubierta-libro_1310-24.jpg?w=740&t=st=1691657047~exp=1691657647~hmac=40de6a199f0487db9a0ba10b46cada92eb58e2f80473be35c218298582943060"),
    ]
  }
  public add(id_book:number,id_user:number,title:string,type:string,author:string,price:number,photo:string){
      let libroNuevo = new Book(id_book,id_user,title,type,author,price,photo)
      this.books.push(libroNuevo)
      console.log(this.books)
  }
}
