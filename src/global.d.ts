export {};

declare global {
  export type User = {
    firstname: string,
    lastname: string,
    email: string
    phone: string,
    imageURL: string,
    dob: string;
    about: string,
    street: string,
    streetNumber: string;
    postalCode: string,
    city: string,
    country: string,
    githubURL: string,
    linkedinURL: string,
    instagramURL: string,
    facebookURL: string
  };

  export type Project = {
    name: string;
    url: string;
    imageURL: string;
    order: string;
    creationDate: string;
    lastModificationDate: string;
  };

  export type Message = {
    name: string;
    email: string;
    subject: string;
    message: string;
    unread: boolean;
    creationDate: string;
    lastModificationDate: string;
  };
};
