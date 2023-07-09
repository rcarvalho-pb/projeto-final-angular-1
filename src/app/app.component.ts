import { Component } from '@angular/core';
import { AppData } from './models/app-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'projeto-final-angular-1';

  public data: AppData = {
    contact: {
      job: "Developer",
      address: "Ria Grande do Sul, Brasil",
      email: "outlook@ibest.com",
      cellphone: 83999999999
    },
    skills: [
      {
        name: "Java",
        percentage: 90
      },
      {
        name: "Angular",
        percentage: 80
      },
      {
        name: "Adobe Photoshop",
        percentage: 50
      },
      {
        name: "Illustrator",
        percentage: 45
      }
    ],
    languages: [
      {
        name: "Português",
        percentage: 75
      },
      {
        name: "Inglês",
        percentage: 60
      },
      {
        name: "Espanhol",
        percentage: 90
      }
    ],
    workExperience: [
      {
        title: "Front End Developer / w3schools.com",
        date: "Jan 2015 - Current",
        description: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
      },
      {
        title: "Web Developer / something.com",
        date: "Mar 2012 - Dec 2014",
        description: "Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
      },
      {
        title: "Graphic Designer / designsomething.com",
        date: "Jun 2010 - Mar 2012",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      }
    ],
    education: [
      {
        school: "W3Schools.com",
        date: "Forever",
        description: "Web Development! All I need to know in one place"
      },
      {
        school: "London Business School",
        date: "2013 - 2015",
        description: "Master Degree"
      },
      {
        school: "School of Coding",
        date: "2010 - 2013",
        description: "Bachelor Degree"
      }
    ]
  }
}
