import { expect } from "chai";
import * as sinon from "sinon";

import {
  DataMiner,
  DocDataMiner,
  ExcelDataMiner,
  PdfDataMiner,
} from "./../../../src/template/data_miner/main";

describe("Test the Tempalte: Data Miner ", () => {
  it("Do Doc Data Mining", () => {
    let docDataMiner = new DocDataMiner();
    let docExtractData = sinon.spy(docDataMiner, "extractData");
    docDataMiner.dataminingSteps();
    expect(docExtractData.calledOnce).to.be.true;
  });

  it("Do Excel Data Mining", () => {
    let excelDataMiner = new ExcelDataMiner();
    let excelExtractData = sinon.spy(excelDataMiner, "parseData");
    excelDataMiner.dataminingSteps();
    expect(excelExtractData.calledOnce).to.be.true;
  });

  it("Do Pdf Data Mining", () => {
    let pdfDataMiner = new PdfDataMiner();
    let pdfExtractData = sinon.spy(pdfDataMiner, "extractData");
    pdfDataMiner.dataminingSteps();
    expect(pdfExtractData.calledOnce).to.be.true;
  });
});
