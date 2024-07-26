import ReportFacade from "./src/ReportFacade.js";

const [cmd, filename, format] = process.argv;

const facade = new ReportFacade("./data/cidades-2.json", format);
facade.report();
