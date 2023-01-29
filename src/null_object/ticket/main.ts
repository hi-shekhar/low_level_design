export interface Iticket {
  name: string;
  profession: string;
  haveDiscount(): boolean;
}

export class TicketCounter implements Iticket {
  name: string;
  profession: string;
  discountedProfessions = ["student", "defence"];
  constructor(name, profession) {
    this.name = name;
    this.profession = profession;
  }

  haveDiscount() {
    if (this.discountedProfessions.includes(this.profession)) {
      return true;
    }
    return false;
  }
}

export class NullObject implements Iticket {
  name: string;
  profession: string;

  constructor() {
    this.name = "Guest";
    this.profession = undefined;
  }

  haveDiscount() {
    return false;
  }
}

export let tickets: Iticket[] = [];

export function getTicket(name: string): Iticket {
  let ticket = tickets.find(
    (user) => user.name.toLowerCase() === name.toLowerCase()
  );
  if (ticket) {
    return ticket;
  }

  return new NullObject();
}

export function generateTicket(name: string, profession: string): void {
  tickets.push(new TicketCounter(name, profession));
}
