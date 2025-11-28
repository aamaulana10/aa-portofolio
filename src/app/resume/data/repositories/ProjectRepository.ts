import { Project, ProjectCategory } from '../../domain/models/Project';

export class ProjectRepository {
   private projects: Project[] = [
    {
      id: '1',
      image: 'https://play-lh.googleusercontent.com/lBHzP8BTXKtnYSunHK1-B9XQ4LOIjaDCg8_ya-7PUQRFlAN2yAQTXyuNwgxtYjQESw=w5120-h2880-rw',
      title: 'Tyr Rewards - Android',
      description: 'The ultimate app for earning incredible rewards while enjoying your favorite games! Turn every gaming session into a chance to collect gift cards, score huge rewards, and buy digital gift cards with ease.',
      link: 'https://play.google.com/store/apps/details?id=tyr.rewards',
      linkText: 'View on Play Store',
      category: ProjectCategory.MOBILE
    },
    {
      id: '2',
      image: 'https://play-lh.googleusercontent.com/fkd9SB8FqNnL8MGDIQRvNIp6ZkhDJ-5e-ywZVXGnSqR3uLTpjtofCfpjzTlPhXDPvMU=w5120-h2880-rw',
      title: 'Tyr Rewards - iOS',
      description: 'The ultimate app for earning incredible rewards while enjoying your favorite games! Turn every gaming session into a chance to collect gift cards, score huge rewards, and buy digital gift cards with ease.',
      link: 'https://apps.apple.com/us/app/id6479488889',
      linkText: 'View on App Store',
      category: ProjectCategory.MOBILE
    },
    {
      id: '3',
      image: 'https://play-lh.googleusercontent.com/KdJXhtsKbX5Ym3x0_NPMFrdViZQcUGWhGV7E3K420noUY_cQZxNRDzBEacEMqruIwA=w5120-h2880-rw',
      title: 'FIT HUB - Android',
      description: 'Largest gym App in Indonesia who wants to make a better platform and be a fully healthy tech company.',
      link: 'https://play.google.com/store/apps/details?id=com.thehub.apps&hl=en',
      linkText: 'View on Play Store',
      category: ProjectCategory.MOBILE
    },
    {
      id: '4',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/ce/5f/8d/ce5f8db8-5c8b-3fea-c5f7-0220e4158bb4/a335ec52-3db9-497b-aa8a-ce618a74e2b0_2.png/460x0w.webp',
      title: 'FIT HUB - iOS',
      description: 'Largest gym App in Indonesia who wants to make a better platform and be a fully healthy tech company.',
      link: 'https://apps.apple.com/id/app/fit-hub-indonesia/id1557619627',
      linkText: 'View on App Store',
      category: ProjectCategory.MOBILE
    },
    {
      id: '5',
      image: 'https://play-lh.googleusercontent.com/ZacAA8yg1ENZAeStW1O-VV2qFvvM_x4IdxVkec2HSzUToo0St2zJOTEfSLQEvcJ90Q=w5120-h2880-rw',
      title: 'Mister Aladin - Android',
      description: 'South east asia largest media company who wants to to scale up their Online Travel Agent App and make an E- Commerce to acquire more Users and improve their business.',
      link: 'https://play.google.com/store/apps/details?id=com.misteraladin.android&hl=id',
      linkText: 'View on Play Store',
      category: ProjectCategory.MOBILE
    },
    {
      id: '6',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/df/ef/fa/dfeffa37-2437-0c05-6823-3d115d65974a/308821df-acd7-44b1-884b-81f19e752500_Slide_4.jpg/460x0w.webp',
      title: 'Mister Aladin - iOS',
      description: 'South east asia largest media company who wants to to scale up their Online Travel Agent App and make an E- Commerce to acquire more Users and improve their business.',
      link: 'https://apps.apple.com/id/app/mister-aladin-hotel-tur/id1144403123?l=id',
      linkText: 'View on App Store',
      category: ProjectCategory.MOBILE
    },
    {
      id: '7',
      image: 'https://lh3.googleusercontent.com/d/12L3F76HU_MSIoft6zhe6u2xIjlaikY_i',
      title: 'Orchid Health - Android & iOS',
      description: 'Healthy startup from USA who want to build wellness Apps for their users to book doctors, make appointments and also want a Video Streaming feature, live chat, and in App payment.',
      link: '#',
      linkText: 'No release yet',
      category: ProjectCategory.MOBILE
    },
    {
      id: '8',
      image: 'https://play-lh.googleusercontent.com/9gfTwm_EnZf6TCnLFFQOEBRfPTV04Xp_O9jRlKKw7QrcKE8D5YUBV_R87U1UAx8QWgk=w5120-h2880-rw',
      title: 'Em-HR Mobile Attendance iOS',
      description: 'A company who want build their Attendance Apps for their users using Google map radius metric',
      link: 'https://play.google.com/store/apps/details?id=id.co.empore.emhrmobile&hl=id',
      linkText: 'View on Play Store',
      category: ProjectCategory.MOBILE
    },
    {
      id: '9',
      image: 'https://play-lh.googleusercontent.com/phawjZEDNAI-JzXU3hYlBEPjQ4sFpc1ynsdAXfUqm4cf0SR_omzWSFyCuDMWa6rlNA=w5120-h2880-rw',
      title: 'Gorrywell - Android',
      description: 'Healthy tech startup who sell food with various types and give Users calories calculation based on activities. They want to make their App better because they use agents to create their first App and it causes many problems in production.',
      link: 'https://play.google.com/store/apps/details?id=com.gorry.monjar&hl=en',
      linkText: 'View on Play Store',
      category: ProjectCategory.MOBILE
    },
    {
      id: '10',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/69/10/60/691060bc-9566-de12-f373-d59360479a7a/57f69929-d4f6-4013-85c9-e805b6cb3f3e_Iphone_Pro_Max_6.5_Inch.png/460x0w.webp',
      title: 'Gorrywell - iOS',
      description: 'Healthy tech startup who sell food with various types and give Users calories calculation based on activities. They want to make their App better because they use agents to create their first App and it causes many problems in production.',
      link: 'https://apps.apple.com/id/app/gorrywell/id1187825930?l=id',
      linkText: 'View on App Store',
      category: ProjectCategory.MOBILE
    },
    {
      id: '11',
      image: 'https://lh3.googleusercontent.com/d/1j7ypiO6wFjpxt0Q6pPj26nkopbne2nXg',
      title: 'Hasanahku - Android & iOS',
      description: 'BUMN from Indonesia who wants to build an E Money Application and implement Chat Bot and improve their in-house project.',
      link: 'https://www.apkmonk.com/app/id/id.co.bnisyariah.haku/',
      linkText: 'View on APK Monk',
      category: ProjectCategory.MOBILE
    },
    {
      id: '12',
      image: 'https://lh3.googleusercontent.com/d/1d8aTJhAjxryFTlHdo-YuzJP-3ZDDhJLN',
      title: 'Lenna Chat - iOS',
      description: 'AI startup who focus on selling Speech to text features, they want to focus on B2B products instead of B2C.',
      link: 'https://apps.apple.com/id/app/lenna-chat/id6445840405',
      linkText: 'View on App Store',
      category: ProjectCategory.MOBILE
    },
    {
      id: '13',
      image: 'https://fakeimg.pl/400x500',
      title: 'Cangkir - Android & iOS',
      description: 'A Company from Jakarta who wants to build some in-house projects for the R & D team to help the company tackle some issues.',
      link: '#',
      linkText: 'Not release yet',
      category: ProjectCategory.MOBILE
    },
    {
      id: '14',
      image: 'https://fakeimg.pl/400x500',
      title: 'Trade2gov - Android & iOS',
      description: 'A Company from Jakarta who wants to build some in-house projects for the R & D team to help the company tackle some issues.',
      link: '#',
      linkText: 'Not release yet',
      category: ProjectCategory.MOBILE
    },
    {
      id: '15',
      image: 'https://play-lh.googleusercontent.com/0i-wXB8caHT0ANmIrPwb6IP7eImEhjJJhzynolSTVlKaesc9N45BFfyFLB19kzbQoQ=w5120-h2880-rw',
      title: 'Kopkar BSM ESS - Android',
      description: 'A Company from Jakarta who wants to build mobile and web app using Ionic, react native, angular and laravel.',
      link: 'https://play.google.com/store/apps/details?id=com.kopkarbsm.mykopkar',
      linkText: 'View on Play Store',
      category: ProjectCategory.MOBILE
    },
    {
      id: '16',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/cc/e2/e9/cce2e9cf-6585-7a46-f152-be52a982158d/dad06fc7-e5ec-4aa5-b904-0a28223e5305_1290x2796_2.jpg/460x0w.webp',
      title: 'Kopkar BSM ESS - iOS',
      description: 'A Company from Jakarta who wants to build mobile and web app using Ionic, react native, angular and laravel.',
      link: 'https://apps.apple.com/id/app/mykey-by-kopkarsyahbsi/id1583696374',
      linkText: 'View on App Store',
      category: ProjectCategory.MOBILE
    },
    {
      id: '17',
      image: '',
      title: 'FIT HUB - Website',
      description: 'FIT HUB main website built with modern web technologies. Features include membership page, class scheduling, and Landing Page Free Trial.',
      link: 'https://fithub.id/',
      linkText: 'Visit Website',
      category: ProjectCategory.FRONTEND
    },
    {
      id: '18',
      image: '',
      title: 'Tyr Rewards - Website',
      description: 'Tyr rewards web app built with Next JS',
      link: 'https://tyrrewards.com/',
      linkText: 'Visit Website',
      category: ProjectCategory.FRONTEND
    },
    {
      id: '19',
      title: 'FIT HUB - Backend Services',
      description: 'Backend services for FIT HUB platform including recaptcha, class scheduling, and user management.',
      category: ProjectCategory.BACKEND
    },
    {
      id: '20',
      title: 'LG SM - Backend Services',
      description: 'Backend services for SCM Project.',
      category: ProjectCategory.BACKEND
    },
    {
      id: '21',
      title: 'Tyr Rewards - Backend Services',
      description: 'Backend services for Tyr Rewards API.',
      category: ProjectCategory.BACKEND
    },
  ]; 

  getAll(): Project[] {
    return this.projects;
  }

  getById(id: string): Project | undefined {
    return this.projects.find(project => project.id === id);
  }
}