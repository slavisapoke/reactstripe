export class CreatePaymentIntentRequest {
  constructor(paymentType, currency) {
    this.paymentMethodType = paymentType;
    this.currency = currency;
  }
}
