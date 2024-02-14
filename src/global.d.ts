export {};

declare global {
  export type User = {
    id: string,
    firstname: string,
    lastname: string,
    email: string
    phone: string,
    image: string,
    dob: string;
    about: string,
    street: string,
    streetNumber: string;
    postalCode: string,
    city: string,
    country: string,
    github: string,
    linkedin: string,
    instagram: string,
    facebook: string
  };

  export type Project = {
    name: string;
    url: string;
    imageURL: string;
  };
};
