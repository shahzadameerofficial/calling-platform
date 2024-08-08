import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AudioPlayerComponent } from "../../../components/common/audio-player/audio-player.component";

@Component({
  selector: 'app-calling',
  standalone: true,
  imports: [CommonModule, AudioPlayerComponent],
  templateUrl: './calling.component.html',
  styleUrl: './calling.component.scss'
})
export class CallingComponent {
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
  transcripts = [
    {
      avatar: '../../../../assets/images/Transcript 1.png',
      name: 'Mike',
      message: 'This is Make speaking. How can I help you?',
      timeStamp: '1:30 - 1:33',
      userId: 1
    },
    {
      avatar: '../../../../assets/images/Transcript 2.png',
      name: 'Alex',
      message: 'I hope youre doing well.Im calling to follow up on your recent inquiry about our cloud storage services. Do you have a few minutes to discuss this?',
      timeStamp: '1:33 - 1:34',
      userId: 2
    },
    {
      avatar: '../../../../assets/images/Transcript 1.png',
      name: 'Mike',
      message: 'This is Make speaking. How can I help you?',
      timeStamp: '1:30 - 1:33',
      userId: 1
    },
    {
      avatar: '../../../../assets/images/Transcript 2.png',
      name: 'Alex',
      message: 'I hope youre doing well.Im calling to follow up on your recent inquiry about our cloud storage services. Do you have a few minutes to discuss this?',
      timeStamp: '1:33 - 1:34',
      userId: 2
    },
    {
      avatar: '../../../../assets/images/Transcript 1.png',
      name: 'Mike',
      message: 'This is Make speaking. How can I help you?',
      timeStamp: '1:30 - 1:33',
      userId: 1
    },
    {
      avatar: '../../../../assets/images/Transcript 2.png',
      name: 'Alex',
      message: 'I hope youre doing well.Im calling to follow up on your recent inquiry about our cloud storage services. Do you have a few minutes to discuss this?',
      timeStamp: '1:33 - 1:34',
      userId: 2
    },
    {
      avatar: '../../../../assets/images/Transcript 1.png',
      name: 'Mike',
      message: 'This is Make speaking. How can I help you?',
      timeStamp: '1:30 - 1:33',
      userId: 1
    },
    {
      avatar: '../../../../assets/images/Transcript 2.png',
      name: 'Alex',
      message: 'I hope youre doing well.Im calling to follow up on your recent inquiry about our cloud storage services. Do you have a few minutes to discuss this?',
      timeStamp: '1:33 - 1:34',
      userId: 2
    },
    {
      avatar: '../../../../assets/images/Transcript 1.png',
      name: 'Mike',
      message: 'This is Make speaking. How can I help you?',
      timeStamp: '1:30 - 1:33',
      userId: 1
    },
    {
      avatar: '../../../../assets/images/Transcript 2.png',
      name: 'Alex',
      message: 'I hope youre doing well.Im calling to follow up on your recent inquiry about our cloud storage services. Do you have a few minutes to discuss this?',
      timeStamp: '1:33 - 1:34',
      userId: 2
    },
    {
      avatar: '../../../../assets/images/Transcript 1.png',
      name: 'Mike',
      message: 'This is Make speaking. How can I help you?',
      timeStamp: '1:30 - 1:33',
      userId: 1
    },
    {
      avatar: '../../../../assets/images/Transcript 2.png',
      name: 'Alex',
      message: 'I hope youre doing well.Im calling to follow up on your recent inquiry about our cloud storage services. Do you have a few minutes to discuss this?',
      timeStamp: '1:33 - 1:34',
      userId: 2
    },
    {
      avatar: '../../../../assets/images/Transcript 1.png',
      name: 'Mike',
      message: 'This is Make speaking. How can I help you?',
      timeStamp: '1:30 - 1:33',
      userId: 1
    },
    {
      avatar: '../../../../assets/images/Transcript 2.png',
      name: 'Alex',
      message: 'I hope youre doing well.Im calling to follow up on your recent inquiry about our cloud storage services. Do you have a few minutes to discuss this?',
      timeStamp: '1:33 - 1:34',
      userId: 2
    },
    {
      avatar: '../../../../assets/images/Transcript 1.png',
      name: 'Mike',
      message: 'This is Make speaking. How can I help you?',
      timeStamp: '1:30 - 1:33',
      userId: 1
    },
    {
      avatar: '../../../../assets/images/Transcript 2.png',
      name: 'Alex',
      message: 'I hope youre doing well.Im calling to follow up on your recent inquiry about our cloud storage services. Do you have a few minutes to discuss this?',
      timeStamp: '1:33 - 1:34',
      userId: 2
    },
    {
      avatar: '../../../../assets/images/Transcript 1.png',
      name: 'Mike',
      message: 'This is Make speaking. How can I help you?',
      timeStamp: '1:30 - 1:33',
      userId: 1
    },
    {
      avatar: '../../../../assets/images/Transcript 2.png',
      name: 'Alex',
      message: 'I hope youre doing well.Im calling to follow up on your recent inquiry about our cloud storage services. Do you have a few minutes to discuss this?',
      timeStamp: '1:33 - 1:34',
      userId: 2
    },
    {
      avatar: '../../../../assets/images/Transcript 1.png',
      name: 'Mike',
      message: 'This is Make speaking. How can I help you?',
      timeStamp: '1:30 - 1:33',
      userId: 1
    },
    {
      avatar: '../../../../assets/images/Transcript 2.png',
      name: 'Alex',
      message: 'I hope youre doing well.Im calling to follow up on your recent inquiry about our cloud storage services. Do you have a few minutes to discuss this?',
      timeStamp: '1:33 - 1:34',
      userId: 2
    },
    {
      avatar: '../../../../assets/images/Transcript 1.png',
      name: 'Mike',
      message: 'This is Make speaking. How can I help you?',
      timeStamp: '1:30 - 1:33',
      userId: 1
    },
    {
      avatar: '../../../../assets/images/Transcript 2.png',
      name: 'Alex',
      message: 'I hope youre doing well.Im calling to follow up on your recent inquiry about our cloud storage services. Do you have a few minutes to discuss this?',
      timeStamp: '1:33 - 1:34',
      userId: 2
    }
  ]
  // 
}
