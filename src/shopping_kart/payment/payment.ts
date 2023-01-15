export interface Payment {
  collectPaymentDetails(): void;
  pay(): Promise<boolean>;
}
