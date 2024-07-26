import * as fs from "node:fs";

export default class Reader {
  constructor(path) {
    this.path = path;
  }

  read() {
    return fs.readFileSync(this.path).toString();
  }
}
