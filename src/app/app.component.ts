import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { userList } from './models/user-data';
import { ChatService } from './services/chat/chat.service';
import { Message } from './models/message.type';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private roomId!: string;
  public messageText!: string;
  public messageArray: Message[] = [];

  public phone!: string;
  public currentUser!: User;
  public selectedUser!: User;

  public userList:User[] = userList;

  constructor(private chatService: ChatService) {
    this.chatService.getMessage().subscribe({
      next: (data: Message) => {
        this.messageArray.push(data);
      },
      
    });
  }
  ngOnInit(): void {
    this.currentUser = this.userList[0]
  }
}
