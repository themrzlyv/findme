
export interface iSocial {
  name: 'facebook' | 'instagram' | 'twitter' | 'linkedin';
  link: string;
}


export interface iRegistrationForm {
  name: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: Date | null;
  location: string;
  education: string;
  skills: string;
  job: string;
  Bio: string;
  webSite: string;
  image: string;
  joinDate: string;
  socials: iSocial[];
}