export class LocalStorageService {
    getData(key: string): string | null {
        return localStorage.getItem(key);
    }
}

export class DataService {
    private localStorageService: LocalStorageService;

    constructor() {
        this.localStorageService = new LocalStorageService();
    }

    getItem(key: string): string | null {
        return this.localStorageService.getData(key);
    }
}

const dataService = new DataService();
const item = dataService.getItem("myKey");
console.log(item);