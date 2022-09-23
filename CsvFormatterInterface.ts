import { Form } from "./Form";

export interface CsvFormatterInterface {
    formatToCsv(form:Form):string;
    
}