import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {

  Help=["Technical","NonTechnical","System Related"];

  help={
    technical:"TheoryLevel",
    technical1:"PracticleLevel",
    nonTechnical:"Support",
    systemRelated:"Installation"

  }
}
