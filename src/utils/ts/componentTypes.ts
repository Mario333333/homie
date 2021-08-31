export type UserData = {
  aboutMe: {
    es: string;
    en: string;
  };
  birthDate: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
  };
  firstName: string;
  lastName: string;
  picture: string;
};

export type InformationElementData = {
  dateEnd: string;
  dateStart: string;
  description?: {
    es: string;
    en: string;
  };
  id: number;
  location?: string;
  school?: string;
  company?: string;
  title?: { es: string; en: string };
};

export type LicensesCertificationsData = {
  description: {
    es: string;
    en: string;
  };
  id: number;
  key: string;
  registred: string;
  title: {
    es: string;
    en: string;
  };
};

export type SlideData = {
  id: number;
  label: { es: string; en: string };
  percentage: number;
};

export type PortfolioData = {
  date: string;
  description: {
    es: string;
    en: string;
  };
  id: number;
  image: string;
  title: { es: string; en: string };
};
