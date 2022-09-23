import { Form } from "./Form";

export interface Formatter {
    formatToCsv(form:Form):string;
    formatToHtml(form:Form): string;
    formatToJson(form:Form): string;
}