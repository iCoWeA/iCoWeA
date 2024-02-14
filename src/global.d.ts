export {};

declare global {
  export type User = {
    id: string,
    firstname: string,
    lastname: string,
    email: string
    phone: string,
    imageURL: string,
    dob: string;
    about: string,
    street: string,
    postalCode: string,
    city: string,
    country: string,
    github: string,
    linkedin: string,
    instagram: string,
    facebook: string
  };
};
