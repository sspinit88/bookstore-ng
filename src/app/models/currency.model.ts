export class CurrencyModel {
  constructor(
      public name: string,
      public isActive: boolean,
      public coefficient: number
  ) {
  }
}