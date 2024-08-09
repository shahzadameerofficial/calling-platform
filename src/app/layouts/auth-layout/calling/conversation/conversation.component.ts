import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss'
})
export class ConversationComponent {
  myId = 2
  chats = [
    {
      avatar: '../../../../assets/images/Conversation.png',
      message: 'Im talking with customer about faulty router need replace',
      timeStamp: '1:30 - 1:30',
      userId: 1
    },
    {
      avatar: '../../../../assets/images/Avatar.png',
      message: 'I want you to tell him',
      timeStamp: '1:30 - 1:30',
      userId: 2
    },
    {
      avatar: '../../../../assets/images/Conversation.png',
      message: 'Ok',
      timeStamp: '1:30 - 1:30',
      userId: 1
    },
    {
      avatar: '../../../../assets/images/Avatar.png',
      message: 'I’m talking with customer support about my faulty router that needs replacement.',
      timeStamp: '1:30 - 1:30',
      userId: 2
    },
    {
      avatar: '../../../../assets/images/Conversation.png',
      message: 'I understand Let’s get this sorted out for you.',
      timeStamp: '1:30 - 1:30',
      userId: 1
    },
    {
      avatar: '../../../../assets/images/Avatar.png',
      message: 'I want you to tell him',
      timeStamp: '1:30 - 1:30',
      userId: 2
    },
    {
      avatar: '../../../../assets/images/Conversation.png',
      message: 'Ok',
      timeStamp: '1:30 - 1:30',
      userId: 1
    },
    {
      avatar: '../../../../assets/images/Avatar.png',
      message: 'I’m talking with customer support about my faulty router that needs replacement.',
      timeStamp: '1:30 - 1:30',
      userId: 2
    },
    {
      avatar: '../../../../assets/images/Conversation.png',
      message: 'I understand Let’s get this sorted out for you.',
      timeStamp: '1:30 - 1:30',
      userId: 1
    },
  ]
  
}
