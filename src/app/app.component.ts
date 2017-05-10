import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
      <nav class="nav-wrapper indigo darken-3">
          <img src="http://www.uni7setembro.edu.br/wp-content/uploads/2017/01/uni7-hor-red-vazado.svg">
          <h4 class="brand-logo text-white">Carreiras</h4>
      </nav>
      <div class="col s12 m12">
        <vagas></vagas>
      </div>`,
})
export class AppComponent {
  titulo: string = 'UNI7 Carreiras';
}
