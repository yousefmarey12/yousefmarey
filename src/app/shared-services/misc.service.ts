import { ElementRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProjectDescription } from '../shared-interfaces/project-description.interface';
import { Skills } from '../shared-interfaces/skills.interface';

@Injectable({
  providedIn: 'root',
})
export class MiscService {
  fragments: any[] = [
    {fragment: "projects", el: null},
    {fragment: "resume", el: null},
    {fragment: "testimonials", el: null},
  ]

  projectDescriptions: ProjectDescription[] = [
    {title: 'Finance Frontend Mentor Challenge', description: 'Implemented a guru design on frontend mentor using dynamic components such as an SVG based doughnut chart that takes an array of numbers as an input or even building my own pipes for automatically writing commas in numbers. I absolutely had fun working on this project.', photoURL: 'https://res.cloudinary.com/dnvjn55ti/image/upload/v1739120501/yousef_marey/g1lxmymvdk6x0y3sorch.png', projectLink: "https://github.com/yousefmarey12/Finance-Frontend-Mentor", id: 0},
    {title: 'Netflix-like Streaming Service', description: `Designed and prototyped a UI for a Netflix-like application using UX techniques such as competitive analysis, user personas and UI concepts such as wireframing and prototyping`, photoURL: "https://res.cloudinary.com/dnvjn55ti/image/upload/c_crop,g_auto,h_300,w_500/yousef_marey/ajtiuugsuopgavedizun", projectLink: 'https://www.figma.com/design/Nt1NYOAtkegTsxiPOZZ6cu/Figma-Book-Project?node-id=1-54&t=YiIEbi5yrxiP4bPS-1', id: 1},
    {title: 'Easybank Frontend Mentor', description: "One of my first challenges was to build a website in pure HTML/CSS/JS, and I managed to overcome it. I have managed to implement a design from frontend mentor, learn how to ask appropriate questions on Stack Overflow, and gained a better understanding of how the DOM works.", photoURL: "https://res.cloudinary.com/dnvjn55ti/image/upload/yousef_marey/lr5ulbaeh0fttceimf4y.jpg", projectLink: "https://github.com/yousefmarey12/custom-easybank-frontend-mentor", id: 3},
    {title: 'FitnessHub-AI', description: `2 bored students in their summer wanted to test an idea. Abdulmalik Alshammari and I have developed a web application that prompts the user to enter information on their body and goals such as height, age, weight, goal weight, etc. Using OpenAI's API, we have developed hundreds of dietary & fitness consultations in Arabic for Middle Eastern users, and we will not stop!`, photoURL: "https://res.cloudinary.com/dnvjn55ti/image/upload/yousef_marey/Project1.jpg", projectLink: 'https://fitnesshub-ai.com/ar/home', id: 0},
    {title: 'Open Source Contribution', description: `Contributing on Forem gave me the opportunity to gain technical skills such as reading the docs of frameworks you've never heard about, unit testing, etc. While tackling some GitHub issues can take 15 minutes to solve, other GitHub issues can take 15 days to solve, but I always have to learn something in each issue.`, photoURL: "https://res.cloudinary.com/dnvjn55ti/image/upload/yousef_marey/mpkpinlilm1blp2yqtok.jpg" , projectLink: 'https://github.com/yousefmarey12', id: 2},
    {title: 'Even & Odd Angular', description: "I have come so far in Angular, and my first even or odd game in Angular felt like yesterday. Overall, it was satisfying that I demonstrated how to use components and how to share data between components.", photoURL: 'https://res.cloudinary.com/dnvjn55ti/image/upload/c_crop,g_auto,h_800,w_800/c_scale,h_100,w_100/yousef_marey/uu0vajary2x0haymzjiy', projectLink: 'https://github.com/yousefmarey12/even-and-odd/', id: 4}
  ]

  skills: Skills[] = [
    {
      skill: 'Frontend Development', 
      description: `I would confidently say that over 20% of my my search history is angular.dev and MDN docs. From my large portion of my search history being solely frontend development, I have managed to build projects such as FitnessHub AI and open source contributions. Having built these projects required high levels of understanding JavaScript, its frameworks, and just building stuff with it.`,
      code: 'angular'
    },
    {
      skill: 'Version Control Systems',
      description: 'Having read a good portion of a textbook solely on Git, I have been able to control my projects effectively with Git. Alongside with learning Git commands, I also learned a lot of Bash that helped me automate tasks so my projects can be up and ready as soon as possible.',
      code: 'git'
    },
    {
      skill: 'Object-Oriented Programming',
      description: 'Object-Oriented Design, Analysis, and Programming are distinct but related concepts. I have been able to master them and implement them and their principles in my projects. A simple example from my FitnessHub-AI website would be separating Firebase user authentication with UI and OpenAI API calls.',
      code: 'oop'
    },
    {
      skill: 'Solid Foundations of a software engineer',
      description: 'I have a solid foundation in data structures and algorithms, computer networks, assembly, and other computer-related topics. While I rarely use these topics in my work, I have a visual representation of what actually what goes on in RESTful API calls. I can explain why Arabic can be a difficult language to work with on jsPDF due to how many bytes each character takes up.',
      code: 'dsa'
    },
    {
      skill: 'Website Administration',
      description: 'While this website is a small website and it wouldn\'t make a difference on whether it is client-side rendered or server-side rendered, other websites will benefit from consultation on certain cache configurations, managing user cookies, and other configurations. I have theoretical knowledge in consulting in this area in how the website should be administrated, and I know I will be able to apply this knowledge.',
      code: 'webadmin'
    },
    {
      skill: 'Open Source Contribution',
      description: 'I have never worked with Ruby in my life nor with markdown configurations nor with Liquid code nor with unit testing. Yet, with all these concepts together, I have managed to solve an issue on GitHub by just reading, playing around, and finding out what works and what is best. Some issues take weeks. Some take hours.  ',
      code: 'opensource'
    }
  ]

  getSkills() {
    return this.skills;
  }

  getFragments() {
    return this.fragments
  }

  getProjectDescriptions() {
    return this.projectDescriptions
  }

  setFragments(key: string, value: ElementRef) {
    this.fragments.forEach((obj) => {
        if (obj.fragment == key) {
            obj.el = value
        }
    })
  }
}
