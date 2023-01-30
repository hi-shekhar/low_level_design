import { ProxyDB, SlowDatabase } from "./../../../src/proxy/caching/main";
import { expect } from "chai";
import * as sinon from "sinon";

describe("Test the Proxy: cache", () => {
  let slowDB: SlowDatabase;
  let cache: ProxyDB;

  before(() => {
    slowDB = new SlowDatabase();
    cache = new ProxyDB(slowDB);
  });

  it("Cache empty before 1st call to db", () => {
    expect(cache.getCachedValue().size).to.be.equal(0);
  });

  it("Cache Miss on 1st call of x=2", () => {
    let getDBValue = sinon.spy(slowDB, 'getValue');
    cache.getValue(2);
    expect(getDBValue.calledOnce).to.be.true;
    getDBValue.restore();
  });

  it("Next call of x=2, will be from cache", () => {
    let getDBValue = sinon.spy(slowDB, 'getValue');
    cache.getValue(2);
    expect(getDBValue.calledOnce).to.be.false;
  });
});
