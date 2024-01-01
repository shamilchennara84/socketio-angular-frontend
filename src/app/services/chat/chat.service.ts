import { EnvironmentInjector, Injectable } from '@angular/core';
import { Socket, io } from 'socket.io-client';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user.model';
import { Observable, Observer } from 'rxjs';
import { Message } from '../../models/message.type';
@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private socket!: Socket;
  private API_URL = environment.API_URL;
  constructor() {
    this.socket = io(this.API_URL);
  }

  joinRoom(data: any): void {
    this.socket.emit('join', data);
  }

  sendMessage(data: any): void {
    this.socket.emit('message', data);
  }

  getMessage(): Observable<Message> {
    return new Observable<Message>(
      (observer: Observer<Message>) => {
        this.socket.on('new message', (data) => {
          observer.next(data);
        });

        return () => {
          this.socket.disconnect();
        };
      }
    );
  }
}
