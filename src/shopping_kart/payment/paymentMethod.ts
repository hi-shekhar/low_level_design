export default interface PaymentMethod {
  collectPaymentDetails(): void;
  pay(): Promise<boolean>;
}
