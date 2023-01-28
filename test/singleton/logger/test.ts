import { expect } from "chai";
import Logger from "../../../src/singleton/logger/logger";

describe("Test the Logger", () => {
  let logger1: Logger;
  let logger2: Logger;

  it("Intialize the logger1", () => {
    logger1 = Logger.getInstance();
    expect(logger1).to.be.instanceOf(Logger);
  });

  it("Intialize the logger2", () => {
    logger2 = Logger.getInstance();
    expect(logger2).to.be.instanceOf(Logger);
  });

  it("Both the logger is same", () => {
    expect(logger1).equal(logger2);
  })

  it("Log one value to logger", () => {
    logger1.log(1);
    expect(logger1.logs.length).to.be.eql(1);
  })

  it("Logger 1st element will be 1", () => {
    logger2.log(2);
    expect(logger1.logs[0]).to.be.eql(1);
  })

  it("Logger length is 2", () => {
    expect(logger1.logs.length).to.be.eql(2);
  })
});
