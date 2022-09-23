import { Form } from "./Form"
import { Formatter } from "./FormInterface"

class SignInFormatter implements Formatter{
    formatToCsv(form:Form):string{return "Format CSV du formulaire SignIn"}
    formatToHtml(form:Form): string{return "Format HTML du formulaire SignIn"}
    formatToJson(form:Form): string{return "Format JSON du formulaire SignIn"}
}