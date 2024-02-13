export {};

declare global {
  export type User = {
    id: string,
    firstname: string,
    lastname: string,
    imageURL: string,
    email: string,
    phone: string,
    sex: 'man' | 'woman',
    dob: string,
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
