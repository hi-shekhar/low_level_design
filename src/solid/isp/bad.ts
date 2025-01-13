export interface MultiFunctionPrinter {
    print(): void;
    scan(): void;
    fax(): void;
}

export class AllInOnePrinter implements MultiFunctionPrinter {
    print(): void {
        console.log("Printing...");
    }
    scan(): void {
        console.log("Scanning...");
    }
    fax(): void {
        console.log("Faxing...");
    }
}

export class SimplePrinter implements MultiFunctionPrinter {
    print(): void {
        console.log("Printing...");
    }
    scan(): void {
        throw new Error("Scan is not supported.");
    }
    fax(): void {
        throw new Error("Fax is not supported.");
    }
}

export function usePrinter(printer: MultiFunctionPrinter) {
    printer.print();
    printer.scan();
    printer.fax();
}

const allInOne = new AllInOnePrinter();
const simplePrinter = new SimplePrinter();

usePrinter(allInOne);
//usePrinter(simplePrinter); //Throws error