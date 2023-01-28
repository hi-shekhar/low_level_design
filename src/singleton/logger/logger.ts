export default class Logger {
  private static instance: Logger = null;
  logs: any[];
  private constructor() {
    this.logs = [];
  }

  public static getInstance() {
    if (Logger.instance === null) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(value: any) {
    this.logs.push(value);
  }

  printLog() {
    console.log("\n **Printing Log** \n");
    for (let i = 0; i < this.log.length; i++) {
      console.log(this.logs[i]);
    }

    console.log("\n **End** \n");
  }
}
