import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const configService = app.get(ConfigService);

  const PORT = configService.get<number>('PORT', 5000);

  await app.listen(PORT, '0.0.0.0');

  // eslint-disable-next-line
  console.log(`server listening on port ${PORT}`);
}

bootstrap();
