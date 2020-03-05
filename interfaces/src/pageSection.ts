export interface IContactInfo {
  street: string;
  zipCode: string;
  city: string;
  country: string;
  email: string;
}

export interface IProject {
  title: string;
  imageUrl: string;
  description: string;
  index: number;
}

export interface ISkill {
  title: string;
  description: string;
}

export interface IStep {
  title: string;
  description: string;
  index: number;
}

export interface IBaseSection {
  role: string;
  order: number;
  publishable: boolean;
  backdropPath?: string;
  children: any;
}

export type IFooterSection = {
  siteName: string;
  contactInfo: IContactInfo;
};

export type IHeroSection = IBaseSection & {
  role: "HeroSection";
  title: string;
  description: string;
};

export type IContactSection = IBaseSection & {
  role: "ContactSection";
  title: string;
  callToAction: string;
  form: any;
};

export type IProjectsSection = IBaseSection & {
  role: "ProjectsSection";
  title: string;
  description: string;
  projects: IProject[];
};

export type IProfileSection = IBaseSection & {
  role: "ProfileSection";
  title: string;
  description: string;
  skills: ISkill[];
};

export type IProcessSection = IBaseSection & {
  role: "ProcessSection";
  title: string;
  description: string;
  steps: IStep[];
};

export type IPageSection =
  | IContactSection
  | IHeroSection
  | IProjectsSection
  | IProcessSection
  | IProfileSection;
