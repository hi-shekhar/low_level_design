/**
 *  Data Miner for Doc, excel and pdf files
 *  1. open file
 *  2. extract data
 *  3. parse data
 *  4. analyze data
 *  5. send report
 *  6. close file
 *
 *  All steps are common except #2 and #3
 */

export abstract class DataMiner {
  constructor() {
    console.log("\n **Welcome to the data miner**");
  }

  dataminingSteps() {
    this.openFile();
    this.extractData();
    this.parseData();
    this.analyzeData();
    this.sendReport();
    this.closeFile();
  }

  

  openFile() {
    console.log("File opened");
  }

  abstract extractData(): void;
  abstract parseData(): void;

  analyzeData() {
    console.log("Analyze data");
  }

  sendReport() {
    console.log("Report Sent !");
  }

  closeFile() {
    console.log("The File Closes");
  }
}

export class DocDataMiner extends DataMiner {
  constructor() {
    super();
    console.log("Doc Data Miner");
  }

  extractData(): void {
    console.log("Extract Doc Data");
  }

  parseData(): void {
    console.log("Parse Doc Data");
  }
}

export class ExcelDataMiner extends DataMiner {
  constructor() {
    super();
    console.log("Excel Data Miner");
  }

  extractData(): void {
    console.log("Extract Excel Data");
  }

  parseData(): void {
    console.log("Parse Excel Data");
  }
}

export class PdfDataMiner extends DataMiner {
  constructor() {
    super();
    console.log("Pdf Data Miner");
  }

  extractData(): void {
    console.log("Extract Pdf Data");
  }

  parseData(): void {
    console.log("Parse Pdf Data");
  }
}
