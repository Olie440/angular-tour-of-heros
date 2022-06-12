import { Component, OnInit } from "@angular/core";
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"],
})
export class MessagesComponent implements OnInit {
  constructor(
    public messageService: MessageService,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.heroService.getHeroes().subscribe((heros) => console.log(heros));
  }
}
