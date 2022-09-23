import { Form } from "./Form";

export class ContactForm extends Form{
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