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

export type IPageSection = IContactSection | IHeroSection;
