import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
     public miUser:User
     constructor(){
      this.miUser = new User(77091890, "Jesus", "Rondon", "rondonbautista@gmail.com", "https://img.freepik.com/foto-gratis/acogedor-retrato-mujer-joven-sueter-azul-punto-sombrero-rosa-maquillaje-brillante-sosteniendo-lupa-jugando-divirtiendose_343596-7383.jpg?w=740&t=st=1692645163~exp=1692645763~hmac=65d8a54b044ad075e48638a70c3e2e868cca68e123762e744f36d9bbf81e3bf5", "Jesus098*" );
     }
     public cambiar(newName:HTMLInputElement, newLast_name:HTMLInputElement, newEmail:HTMLInputElement, newPhoto:HTMLInputElement){
          this.miUser.name = newName.value;
          this.miUser.last_name = newLast_name.value;
          this.miUser.email = newEmail.value;
          this.miUser.photo = newPhoto.value;
     }
}
