interface ExperienceDataType {
  title: string;
  date: string;
  details: string[];
}

export const ExperienceData: ExperienceDataType[] = [
  {
    title: 'SAWO Labs | Software Developer Intern',
    date: ' Jul, 2021 – Sep, 2021',
    details: [
      'Increased the pub points from 80/130 to 130/130 of the sawo flutter package with additional improvements',
      'Revamped the whole UI of the website using React and Tailwind CSS with a Lighthouse score of 96',
      'Fixed bugs, added new reusable components to the Client Dashboard and WebSDK using React and Redux',
      'Built SAWO sample apps from scratch using React, Vue.js, Node.js and React Native',
    ],
  },
  {
    title: 'Fivefalcon Private Limited | Flutter Developer Intern',
    date: 'Mar, 2021 – Apr, 2021',
    details: [
      'Developed the interactive and animated UI from scratch of a booking app named Extacy Extacy, using Flutter',
      'Added Phone, Email and Google authentication using Firebase and Backend features like adding clubs, bars, and parties from Admin side and showing them on the Client side using Firestore CRUD operations',
    ],
  },
];
