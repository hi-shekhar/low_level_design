import NewsUsers from "../../../src/observer/news_paper/newsUsers";
import NewsPaper from "../../../src/observer/news_paper/newsPaper";
import { expect } from "chai";
import * as sinon from "sinon";

describe("Test the News Publication", () => {
  describe("Add users", () => {
    let news_paper: NewsPaper;
    let user_1: NewsUsers;
    let user_2: NewsUsers;
    let user_3: NewsUsers;

    before(() => {
      news_paper = new NewsPaper();
      user_1 = new NewsUsers(news_paper);
      user_2 = new NewsUsers(news_paper);
      user_3 = new NewsUsers(news_paper);
    });

    it("Add 2 subscribers to NewsPaper", () => {
      news_paper.addClient(user_1);
      news_paper.addClient(user_2);
      expect(news_paper.subscribers.length).to.be.equal(2);
    });

    it("User 2 is the subscriber", () => {
      let output = news_paper.subscribers.filter(
        (subscriber) => subscriber.id === user_2.id
      );
      expect(output[0].id).equal(user_2.id);
    });

    it("User 3 is not the subscriber", () => {
      let output = news_paper.subscribers.filter(
        (subscriber) => subscriber.id === user_3.id
      );
      expect(output.length).equal(0);
    });

    it("User 1 can be notified", () => {
      let update = sinon.spy(user_1, "update");
      news_paper.notifyClient();
      expect(update.calledOnce).to.be.true;
      update.restore();
    });

    it("User 3 can't be notified", () => {
      let update = sinon.spy(user_3, "update");
      news_paper.notifyClient();
      expect(update.calledOnce).to.be.false;
    });

    it("remove the User 1 from the subscription", () => {
      news_paper.removeClient(user_1);
      let output = news_paper.subscribers.filter(
        (subscriber) => subscriber.id === user_1.id
      );
      expect(output.length).equal(0);
    });

    it("User 1 can't be notified", () => {
      let update = sinon.spy(user_1, "update");
      news_paper.notifyClient();
      expect(update.calledOnce).to.be.false;
    });
  });
});
