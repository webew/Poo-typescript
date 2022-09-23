import { ContactForm } from "./ContactForm";
import { CsvFormatterInterface } from "./CsvFormatterInterface";
import { Formatter } from "./FormInterface";

export class ContactFormatter implements Formatter,CsvFormatterInterface {
    private contactForm:ContactForm;

    constructor(contactForm:ContactForm){
        this.contactForm = contactForm;
    }
    
    formatToCsv():string {
        return "objet,email,message\n"
         + this.contactForm.$objet + "," + this.contactForm.$email + "," + this.contactForm.$message;
    }
    formatToHtml(): string{
        return `<h1>${this.contactForm.$email}</h1><p>${this.contactForm.$objet}</p><p>${this.contactForm.$message}</p>`;
    }
    formatToJson(): string{
        return `{"email":"${this.contactForm.$email}",
                "objet":"${this.contactForm.$objet}",
                "message":"${this.contactForm.$message}"}`;
    }
}