import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BooksComponent } from 'src/app/pages/books/books.component';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() libro:Book;
  @Input() even: boolean;

  @Output() eliminar = new EventEmitter<Book>();
 
  borrar(libro:Book){
    this.eliminar.emit(this.libro);
  }
}
