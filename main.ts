import {ContactForm} from "./ContactForm";
import { ContactFormatter } from "./ContactFormatter";
import fs from 'fs';

const contactForm = new ContactForm("toto", "toto@toto.fr", "ça va ?");
const formatter = new ContactFormatter(contactForm);

const messageCsv = formatter.formatToCsv();
const messageHtml = formatter.formatToHtml();
const messageJson = formatter.formatToJson();

console.log(messageCsv);
fs.writeFile("./test.csv", messageCsv, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
});
console.log(messageHtml);
fs.writeFile("./test.html", messageHtml, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
});
console.log(messageJson);
fs.writeFile("./test.json", messageJson, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
});

const jsonParsedMessage = JSON.parse(messageJson);

console.log(jsonParsedMessage);

console.log(jsonParsedMessage.email);

