export interface CustomerProductModel {
  ProductId: number;
  name: string;
  sellingPrice: number;
  weight: string;
  imageUrl: string; // URL to the product image
}
export interface CustomerProductResponseModel {
  customerProductList: CustomerProductModel[];
  totalRecords: number; 
  Succeeded: boolean; 
}
