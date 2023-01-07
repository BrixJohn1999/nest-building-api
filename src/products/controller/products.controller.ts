import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ProductService } from '../service/product.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductService) {}

  @HttpCode(200)
  @Post()
  public async addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): Promise<any> {
    const generateId = this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generateId };
  }

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }
}
