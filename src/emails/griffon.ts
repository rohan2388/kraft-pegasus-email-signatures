import data, { Griffon } from "../data/griffon";
import {
  readFileSync,
  existsSync,
  rmdirSync,
  mkdirSync,
  writeFileSync,
} from "fs";
import { resolve } from "path";
import mjml from "mjml";
import hb from "handlebars";

function getTemplate() {
  const template = readFileSync(
    resolve(__dirname, "../templates/griffon-signature.mjml"),
    "utf8"
  );

  return template.toString();
}

function insertData(template: string, data: Griffon) {
  try {
    const compiled = hb.compile(template);
    const result = compiled(data);
    return result;
  } catch (e) {
    console.log(e);
    return "Error";
  }
}

function render(template: string) {
  try {
    const result = mjml(template);
    if (result.errors.length > 0) {
      result.errors.forEach(error => console.error(error.formattedMessage));
      return "Error";
    } else {
      return result.html;
    }
  } catch (e) {
    console.log(e);
    return "Error";
  }
}

function createEmail(data: Griffon) {
  const template = getTemplate();
  const email = insertData(template, data);
  const html = render(email);
  return html;
}

export default async function generate() {
  const path = resolve(__dirname, "../../emails/griffon");
  if (existsSync(path)) {
    rmdirSync(path, { recursive: true });
  }
  mkdirSync(path);

  const emails = data.map(item => ({
    name: item.name,
    email: createEmail(item),
  }));
  // Save emails to file

  emails.forEach((item, index) => {
    const filePath = resolve(
      path,
      `${item.name
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "")}.html`
    );
    writeFileSync(filePath, item.email);
  });

  return emails.map(item => item.email);
}
