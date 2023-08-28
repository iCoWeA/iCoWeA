export {};

declare global {
  export interface Message {
    name: string;
    email: string;
    message: string;
    date: string;
    isRead: boolean;
  }
};
