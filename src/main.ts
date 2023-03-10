import { NestFactory } from '@nestjs/core';
//import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    credentials: true,
  });

  // const config = new DocumentBuilder()
  //   .setTitle('Short Link Api')
  //   .setDescription('API description')
  //   .setVersion('1.0')
  //   .build();

  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);
  const port = process.env.PORT || 3000;
  await app.listen(port).then(() => {
    console.log(`Short Link Api Runing Port ${port}`);
  });
}
bootstrap();
