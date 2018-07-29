export class Developer {
  fullName: string;
  firstName: string;
  GitHub: string;
  LinkedIn: string;
  About: string;
  Stack = [];
  Interests: string;
  title: string;
  constructor(
    fullName: string,
    github: string,
    linkedIn: string,
    about: string,
    stack: string[],
    interests: string,
    title: string) {
    this.fullName = fullName;
    this.GitHub = github;
    this.LinkedIn = linkedIn;
    this.About = about;
    this.Stack = stack;
    this.Interests = interests;
    this.title = title;
    this.firstName = 'Allen';
  }
}
