export class User {

  /*1*/   public id: any;
  /*2*/   public name: string;
  /*3*/   public lastName: string;
  /*4*/   public email: string;
  /*5*/   public password: string;
  /*6*/   public birthday: string;
  /*7*/   public registrationDate: Date;
  /*8*/   public gender: number;
  /*9*/   public imgProfile: string;

  constructor(user?: any) {
    this.id = user? (user._id || user.id) : null;
    this.name = user? user.name : null;
    this.lastName = user? user.lastName : null;
    this.email = user? user.email : null;
    this.password = user? user.password : null;
    this.birthday = user? user.birthday : null;
    this.registrationDate = user? user.registrationDate : null;
    this.gender = user? user.gender : null;
    this.imgProfile = user? user.imgProfile : null;
  }
}
