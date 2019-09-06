export interface IBaseSection {
  role: string;
  publishable: boolean;
  backdropPath?: string;
}

export type IHeroSection = IBaseSection & {
  role: "hero";
  title: string;
};

export type IContactSection = IBaseSection & {
  role: "contact";
  title: string;
  callToAction: string;
  form: any;
};

interface IContactInfo {
  street: string;
  zipCode: string;
  city: string;
  country: string;
  email: string;

}

export type IFooterSection = IBaseSection & {
  role: "footer";
  contactInfo: IContactInfo;
};

export interface IProject {
  title: string;
  description: string;
}

export type IProjectsSection = IBaseSection & {
  role: "projects";
  title: string;
  description: string;
  projects: IProject[];
};

export type IPageSection = IContactSection | IHeroSection | IFooterSection | IProjectsSection;
