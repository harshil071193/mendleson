import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  toAbout(){
    document.getElementById("About")?.scrollIntoView({ behavior:"smooth"});
  }
  toServices(){
    document.getElementById("Services")?.scrollIntoView({ behavior:"smooth"});
  }
  toTeam(){
    document.getElementById("Team")?.scrollIntoView({ behavior:"smooth"});
  }
  toClients(){
    document.getElementById("Clients")?.scrollIntoView({ behavior:"smooth"});
  }
  toContact(){
    document.getElementById("Contact")?.scrollIntoView({ behavior:"smooth"});
  }
}
