import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public miUser: User

    constructor(){
      this.miUser = new User(923618509, "Jesus", "Rondon", "JesusRondon@gmail.com", "https://img.freepik.com/vector-gratis/cool-hotdog-gafas-sombrero-icono-dibujos-animados-ilustracion-icono-moda-alimentos-aislado-estilo-dibujos-animados-plana_138676-3114.jpg?w=740&t=st=1691495705~exp=1691496305~hmac=32775278de3854d924db769bb82784232be3633ab9f2d01a32aad85ca4a52b4b", "77091890")
    }

    public cambiarDatos(newName:HTMLInputElement, newLastName:HTMLInputElement, newEmail:HTMLInputElement,newPhoto:HTMLInputElement){
      console.log(this.miUser.name);
      
      this.miUser.name = newName.value;
      this.miUser.last_name = newLastName.value;
      this.miUser.email = newEmail.value;
      this.miUser.photo = newPhoto.value
  }
}
