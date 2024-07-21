import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage {
  officer = {
    name: 'JESUS ADRIAN TRAVIESO FERNANDEZ',
    badge: '(2022-0066)',
    quote: '"La vigilancia efectiva no solo protege, sino que también inspira confianza en la comunidad. Al servir con integridad y dedicación, cada acción contribuye a un entorno más seguro y a una sociedad más justa. La seguridad es un compromiso constante, y cada operación realizada con precisión y cuidado fortalece el tejido de nuestra comunidad y asegura el bienestar de todos."'
  };
}
