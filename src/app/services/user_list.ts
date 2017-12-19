import {Injectable} from "angular2/core";

@Injectable()
export class UserListService {
  users:any[] = [
    {img: 'https://fashionz.co.nz/wp-content/uploads/2016/11/Evelyn-circle-1.jpg', name: 'Nina Jones', message: 'Hey you! its me again :) i attached new (..)', time: '5 minutes ago', replyIcon: 'fa-reply', settingsIcon: 'fa-cog', select: 'selected'},
    {img: 'https://fashionz.co.nz/wp-content/uploads/2016/11/Evelyn-circle-1.jpg', name: 'Nina Jones', message: 'Hey! i attached sone new PSD files for (..)', time: 'About 20 hours ago', replyIcon: 'fa-reply', settingsIcon: 'fa-cog', select: 'selected'},
    {img: 'http://foodpictures.net/wp-content/uploads/2017/03/profile_picture_300x300-circle.png', name: 'James Smith', message: 'Good Morning, you are fired!', time: '2 days ago', replyIcon: 'fa-reply', settingsIcon: 'fa-cog'},
    {img: 'https://fashionz.co.nz/wp-content/uploads/2016/11/Evelyn-circle-1.jpg', name: 'Nina Jones', message: 'Hello Could you bring me coffee please ?', time: 'About 2 weeks ago', replyIcon: 'fa-reply', settingsIcon: 'fa-cog'}
  ];

  add(value:any):void {
    this.users.push(value);
  }

  all():any[] {
    return this.users;
  }
}


