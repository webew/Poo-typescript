class Form {

}
class ContactForm extends Form{
    private objet: string;
    private email: string;
    private message: string;
    
    constructor(objet: string, email: string, message: string) {
        super();
        this.objet = objet;
        this.email = email;
        this.message = message;
    }

    /**
     * Getter $objet
     * @return {string}
     */
	public get $objet(): string {
		return this.objet;
	}

    /**
     * Getter $email
     * @return {string}
     */
	public get $email(): string {
		return this.email;
	}

    /**
     * Getter $message
     * @return {string}
     */
	public get $message(): string {
		return this.message;
	}

    /**
     * Setter $objet
     * @param {string} value
     */
	public set $objet(value: string) {
		this.objet = value;
	}

    /**
     * Setter $email
     * @param {string} value
     */
	public set $email(value: string) {
		this.email = value;
	}

    /**
     * Setter $message
     * @param {string} value
     */
	public set $message(value: string) {
		this.message = value;
	}

}


interface Formatter {
    formatToCsv(form:Form):string;
    formatToHtml(form:Form): string;
    formatToJson(form:Form): string;
}

class ContactFormatter implements Formatter {
    formatToCsv(contactForm: ContactForm):string {
        return contactForm.$email + " - " + contactForm.$objet + " - " + contactForm.$message;
    }
    formatToHtml(contactForm: ContactForm): string{
        return contactForm.$email + " - " + contactForm.$objet + " - " + contactForm.$message;
    }
    formatToJson(contactForm: ContactForm): string{
        return contactForm.$email + " - " + contactForm.$objet + " - " + contactForm.$message;
    }
}

class SignInFormatter implements Formatter{
    formatToCsv(form:Form):string{return ""}
    formatToHtml(form:Form): string{return ""}
    formatToJson(form:Form): string{return ""}
}

const formatter = new ContactFormatter();
const contactForm = new ContactForm("toto", "hi", "ça va ?");

const messageCsv = formatter.formatToCsv(contactForm);
const messageHtml = formatter.formatToHtml(contactForm);
const messageJson = formatter.formatToJson(contactForm);

console.log(messageCsv);
console.log(messageHtml);
console.log(messageJson);
