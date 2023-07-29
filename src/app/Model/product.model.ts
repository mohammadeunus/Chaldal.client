import { StockModel } from "./stock.model";

export interface ProductModel {
  productId: number;
  name: string; 
  brand: string;
  description: string;
  isDiscounted: boolean;
  category: any;
  stocks: StockModel;
  imageUrl: string; // URL to the product image 
  createdBy: string; 
  createdDate: Date;
}
