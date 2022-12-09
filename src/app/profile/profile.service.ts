import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  aboutprojects = `Unfortunatly, most of my professional work is tucked safely away behind corporate firewalls. However, here are a few of the public facing projects
  I did durring my time as a Web Developer at Getfused. Using the power of the waybackmachine (archive.org) we can go back to the good ol' days circa 2017.`

  projects:any = [
    {
      id: 1,
      title: 'harpoonbrewery.com',
      desc: 'For harpoon brewery, I did mostly social media integration with the likes of instagram and facebook. I also worked on their loyalty program integration and shop (shopify).',
      link: 'https://web.archive.org/web/20170705104444/https://www.harpoonbrewery.com/',
      imgUrl: 'assets/images/001.png',
    },
    {
      id: 2,
      title: 'bostonprivate.com',
      desc: `I worked on the website itself and putting content into the CMS. I also did integration work with salesforce APIs for lead generation. 
      I also wrote a find ATM app using google maps APIs.`,
      link: 'https://web.archive.org/web/20180117170150/https://www.bostonprivate.com/',
      imgUrl: 'assets/images/002.png',
    },
    {
      id: 3,
      title: 'patriots365.com',
      desc: 'Patriots365 is a loyalty program for New England Patriots season ticket holders. Did various integration with the vendors on the program including Visa, Ticketmaster, and Uber',
      link: 'https://web.archive.org/web/20170622125141/https://www.patriots365.com/',
      imgUrl: 'assets/images/003.png',
    },

  ]
  about = ""
  about2 = `Professional Software Developer with a rekindled passion for technology. An analytical thinker; Compatible member of any team.
Often called upon to be a team leader, SME, and teacher. Looking for exciting opportunities and self-actualization.`
  resumeurl = "https://github.com/tdelamater1/documents/blob/main/resume.pdf"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'Java/Spring',
      'progress': '90%'
    },
    {
      'id': '2',
      'skill': 'Linux',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'Javascript/Typescript',
      'progress': '50%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'Python',
      'progress': '60%'
    },
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2007',
      'education': 'Bachelor\'s Degree',
      'stream': 'Computer Science',
      'info': `Graduated Cum Laude with an emphasis in data science`,
      'institution': 'Olivet Nazarene University'
    },
  ];

  exprienceData: any = [
    {
      id: 1,
      company: 'DXC Technology',
      location: 'American Airlines DFW HDQ',
      timeline: '10/2019 to Present',
      role: 'Software Developer',
      work: `Developed and maintained a critical application used in the airline industry, to ensure operations follows Federal Aviation Administration (FAA) and Union rules regarding crew member scheduling and utilization.
    Java/Spring development on GigaSpaces’ in-memory data grid, XAP. OLTP with IBM MQ Streams. Angular/JS front end, REST webservices.`

    },
    {
      id: 2,
      company: 'Edaris Health',
      location: 'Irving Texas',
      timeline: '04/2018 - 02/2019',
      role: 'Software Developer/Lead',
      work: `Java/J2EE development in a cloud based (AWS) multi-tenant web application. The application is a healthcare portal for making appointments, accessing medical records, and communicating with your healthcare provider.
    Developed front end using Apache Freemarker templates  
    Utilized existing technologies used by the organization (Intersystems Ensemble and MUMPS) to pull data from the hospital EMR into the portal application.
    Worked on streamlining the registration process for new patients into the system from account creation, compliance forms, and the scheduling of appointments.
    Provided tier-2 support for production issues.
    Developed new features and bug fixes; Oversaw the deployment to the production environment.`
    },
    {
      id: 3,
      company: 'Get Fused',
      location: 'Grapevine Texas',
      timeline: '02/2017 - 03/2018',
      role: 'Web Developer',
      work: `Web development in Coldfusion for many public facing websites attracting thousands of unique visitors a day including harpoonbrewery.com and bostonprivate.com
    Integrations in Java and Coldusion with Visa, Ticketmaster, Uber, social media platforms like instagram, google maps and places, salesforce
    Developed on a proprietary CMS platform using MySQL databases and Coldspring IoC framework.`
    },
  ]

  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

}
