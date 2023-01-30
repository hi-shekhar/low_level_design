export interface Database {
  getValue<Type>(param: Type): Type;
}

export class SlowDatabase implements Database {
  constructor() {}

  getValue<Type>(x: Type): Type {
    return x;
  }
}

export class ProxyDB implements Database {
  slowDB: SlowDatabase;
  private static dbCache = new Map();

  constructor(slowDB: SlowDatabase) {
    this.slowDB = slowDB;
  }

  getValue<Type>(param: Type): Type {
    if (ProxyDB.dbCache.has(param)) {
      return ProxyDB.dbCache.get(param);
    } else {
      let result = this.slowDB.getValue(param);
      ProxyDB.dbCache.set(param, result);
      return result;
    }
  }

  getCachedValue(): Map<any, any> {
    return ProxyDB.dbCache;
  }
}
