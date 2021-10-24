interface ExperienceDataType {
  title: string;
  date: string;
  details: string[];
}

export const ExperienceData: ExperienceDataType[] = [
  {
    title: 'SAWO Labs | SDE Intern',
    date: 'July 2021 – Present',
    details: [
      'Increased the pub points from 80/130 to 130/130 for the sawo flutter package with improvements.',
      'Revamped the whole UI of the landing page with a Lighthouse score of 96 in performance',
      'Fixed Bugs, added new reusable components to the Client Dashboard and WebSDK using React and Redux',
      'Built Sawo sample apps from scratch using React, Vue.js, React Native, and Node.js.',
    ],
  },
  {
    title: 'Fivefalcon Private Limited | Flutter Developer Intern',
    date: 'March 2021 – April 2021',
    details: [
      'Built the UI from scratch of a booking app named Extacy, using Flutter from Figma design',
      'Added Phone, Email and Google authentication using Firebase and Backend features like adding clubs, bars, and parties from Admin side and showing them on the Client side using Firestore CRUD operations.',
    ],
  },
];
