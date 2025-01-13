export interface Printer {
    print(): void;
}

export interface Scanner {
    scan(): void;
}

export interface Fax {
    fax(): void;
}

export class AllInOnePrinter implements Printer, Scanner, Fax {
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

export class SimplePrinter implements Printer {
    print(): void {
        console.log("Printing...");
    }
}

export function usePrinter(printer: Printer) {
    printer.print();
}

export function useScanner(scanner: Scanner) {
    scanner.scan();
}

export function useFax(fax: Fax) {
    fax.fax();
}

const allInOne = new AllInOnePrinter();
const simplePrinter = new SimplePrinter();

usePrinter(allInOne);
useScanner(allInOne);
useFax(allInOne);

usePrinter(simplePrinter);
//useScanner(simplePrinter); //This will not compile, which is the desired outcome