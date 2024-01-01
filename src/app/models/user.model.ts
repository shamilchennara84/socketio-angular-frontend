export class User {
  id!: number;
  name!: string;
  phone!: string;
  image!: string;
  roomId!: Partial<Record<number, string>>;
}
