export interface ProductModel {
  productId: number;
  name: string; 
  brand: string;
  description: string;
  isDiscounted: boolean; 
  sellingPrice: number;
  quantity: number;
  categoryName: string;
  imageUrl: string; // URL to the product image 
  createdBy: string; 
  createdDate: Date;
}
