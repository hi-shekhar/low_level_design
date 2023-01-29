export interface IndianSocket {
  threePinPlug(): void;
}

export interface EuropeSocket {
  twoPinPlug(): void;
}

export class IndianApliance implements IndianSocket {
  constructor() {}

  threePinPlug(): void {
    console.log("India uses three pin plug");
  }
}

export class EuropeApliance implements EuropeSocket {
  constructor() {}

  twoPinPlug(): void {
    console.log("Europe uses two pin plug");
  }
}

export class IndiaToEuroAdapter implements EuropeSocket {
  indianApliance: IndianApliance;
  constructor(Apliance: IndianApliance) {
    this.indianApliance = Apliance;
  }

  twoPinPlug(): void {
    console.log("Converting India Plug to Europe standard ...");
  }
}
