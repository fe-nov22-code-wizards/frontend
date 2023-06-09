export interface Phone {
  id: number;
  category: string;
  phoneId: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: number;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}

export interface PhoneWithQuantity extends Phone {
  quantity: number;
}
