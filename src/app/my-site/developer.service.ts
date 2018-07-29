import { Injectable } from '@angular/core';
import { Developer } from './Models/Developer';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  derveloper: Developer;
  stack = [];

  constructor() {
    this.stack = [
      'devicon-angularjs-plain colored',
          'devicon-java-plain-wordmark colored',
          'devicon-csharp-line-wordmark colored',
          'devicon-css3-plain-wordmark colored',
          'devicon-sass-original colored',
          'devicon-html5-plain-wordmark colored',
          'devicon-jquery-plain-wordmark colored',
          'devicon-python-plain-wordmark colored',
          'devicon-mysql-plain-wordmark colored',
          'devicon-mongodb-plain-wordmark colored',
          'devicon-ubuntu-plain-wordmark colored',
          'devicon-windows8-original colored'
    ];
    this.derveloper = new Developer(
      'Allen Higgins',
      'https://github.com/AllenHiggins',
      'https://www.linkedin.com/in/allen-higgins-8b8064115',
      'I have recently completed a BSc (Hons) in Software Development from IT Carlow this\
      May 2018, achieving a 2.1 degree (GPR: 68). During this time I produced verus applications using\
      technologies such as Python, RESTful API"s, Angular, Ionic, Java, C#, Web and Cloud Development, Full Stack Development,\
      SQL, MongoDB, Data Analytics, Software Engineering and IOT. I am familiar with Windows\
      and Ubuntu Operating Systems and use Git source control in my projects.',
      this.stack,
      'interests...',
      'Software Developer'
    );
  }

  getDeveloperInfo() {
    return this.derveloper;
  }

  getDeveloperStack() {
    return this.stack;
  }
}

