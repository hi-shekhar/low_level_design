import { expect } from "chai";
import {
  generateTicket,
  getTicket,
  Iticket,
  tickets,
} from "./../../../src/null_object/ticket/main";

describe("Test the Null Object : Ticket Discount ", () => {
  before(() => {});

  it("generate ticket", () => {
    generateTicket("user1", "student");
    generateTicket("user2", "doctor");
    generateTicket("user3", "defence");
    expect(tickets.length).to.be.equal(3);
  });

  it("user 1 will have discount", () => {
    let ticket = getTicket('user1');
    expect(ticket.haveDiscount()).to.be.true;
  })

  it("user 2 will not have discount", () => {
    let ticket = getTicket('user2');
    expect(ticket.haveDiscount()).to.be.false;
  })

  it("unkown user will be guest and have no discount", () => {
    let ticket = getTicket('user4');
    expect(ticket.name).equal('Guest');
    expect(ticket.haveDiscount()).to.be.false;
  })
});
