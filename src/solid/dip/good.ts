export interface DataStorage {
    getData(key: string): string | null;
}

export class LocalStorageService implements DataStorage {
    getData(key: string): string | null {
        return localStorage.getItem(key);
    }
}

export class SessionStorageService implements DataStorage {
    getData(key: string): string | null {
        return sessionStorage.getItem(key);
    }
}

export class MockStorageService implements DataStorage {
    private data: { [key: string]: string } = {};

    getData(key: string): string | null {
        return this.data[key] || null;
    }

    setData(key: string, value: string) {
        this.data[key] = value;
    }
}

export class DataService {
    private dataStorage: DataStorage;

    constructor(dataStorage: DataStorage) { // Inject the dependency
        this.dataStorage = dataStorage;
    }

    getItem(key: string): string | null {
        return this.dataStorage.getData(key);
    }
}

// Usage with Local Storage
const localStorageService = new LocalStorageService();
const dataServiceWithLocalStorage = new DataService(localStorageService);
const item1 = dataServiceWithLocalStorage.getItem("myKey");
console.log("Local Storage: " + item1);

// Usage with Session Storage
const sessionStorageService = new SessionStorageService();
const dataServiceWithSessionStorage = new DataService(sessionStorageService);
const item2 = dataServiceWithSessionStorage.getItem("myKey");
console.log("Session Storage: " + item2);

//Usage with mock storage
const mockStorage = new MockStorageService();
mockStorage.setData("testKey", "testValue");
const dataServiceWithMock = new DataService(mockStorage);
const item3 = dataServiceWithMock.getItem("testKey");
console.log("Mock Storage: " + item3);