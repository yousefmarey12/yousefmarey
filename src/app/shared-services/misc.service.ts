import { ElementRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProjectDescription } from '../shared-interfaces/project-description.interface';

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
    {title: 'FitnessHub-AI', description: `2 bored students in their summer wanted to test an idea. Abdulmalik Alshammari and I have developed a web application that prompts the user to enter information on their body and goals such as height, age, weight, goal weight, etc. Using OpenAI's API, we have developed hundreds of dietary & fitness consultations in Arabic for Middle Eastern users, and we will not stop!`, photoURL: "../../../public/project3.png", projectLink: 'https://fitnesshub-ai.com/ar/home', id: 0},
    {title: 'Netflix-like Streaming Service', description: `Designed and prototyped a UI for a Netflix-like application using UX techniques such as competitive analysis, user personas and UI concepts such as wireframing and prototyping`, photoURL: "../../../public/project1.png", projectLink: 'https://www.figma.com/design/Nt1NYOAtkegTsxiPOZZ6cu/Figma-Book-Project?node-id=1-54&t=YiIEbi5yrxiP4bPS-1', id: 1},
    {title: 'Open Source Contribution', description: `Contributing on Forem gave me the opportunity to gain technical skills such as reading the docs of frameworks you've never heard about, unit testing, etc. While tackling some GitHub issues can take 15 minutes to solve, other GitHub issues can take 15 days to solve, but I always have to learn something in each issue.`, photoURL: "../../../public/project2.png" , projectLink: 'https://github.com/yousefmarey12', id: 2},
    {title: 'Easybank Frontend Mentor', description: "One of my first challenges was to build a website in pure HTML/CSS/JS, and I managed to overcome it. I have managed to implement a design from frontend mentor, learn how to ask appropriate questions on Stack Overflow, and gained a better understanding of how the DOM works.", photoURL: "../../../public/project2.png", projectLink: "https://github.com/yousefmarey12/custom-easybank-frontend-mentor", id: 3},
    {title: 'Even & Odd Angular', description: "I have come so far in Angular, and my first even or odd game in Angular felt like yesterday. Overall, it was satisfying that I demonstrated how to use components and how to share data between components.", photoURL: '../../../public/project5.png', projectLink: 'https://github.com/yousefmarey12/even-and-odd/', id: 4}
  ]

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
