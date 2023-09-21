export interface User {
  _id: string;
  name: string;
}

export type SessionUser =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;
