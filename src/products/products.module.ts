import { Module } from '@nestjs/common';
import { ProductsController } from './controller/products.controller';
import { ProductService } from './service/product.service';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductService],
  exports: [],
})
export class ProductsModule {}
