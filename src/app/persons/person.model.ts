

export class Person {
	public firstName: string;
	public lastName:  string;
	public email: string;
	public phoneNo: string;
	public city: string;
	public country: string;
    public imagePath: String;


    constructor(firstName: string,lastName:  string,email: string,phoneNo: string,city: string,country: string,imagePath: String) {

     this.firstName=firstName;
     this.lastName=lastName;
     this.email=email;
     this.phoneNo=phoneNo;
     this.city=city;
     this.country=country;
     this.imagePath=imagePath;

    }

}