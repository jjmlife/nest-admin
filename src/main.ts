import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LogInterceptor } from './log/log.interceptor';
import { TransformInterceptor } from './transform/transform.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './error/http-exception.filter';
import { AllExceptionFilter } from './error/all-exception.filter';
import { ReportLogger } from './log/ReportLogger';

const setupSwagger = (app) => {
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Api')
    .setDescription('API 文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const reportLogger = new ReportLogger();

  app.setGlobalPrefix('api');
  app.useGlobalFilters(new HttpExceptionFilter(), new AllExceptionFilter());
  /// 全局验证
  app.useGlobalPipes(
    new ValidationPipe({
      // fix parameter escape
      whitelist: true,
    }),
  );

  app.useGlobalInterceptors(
    new LogInterceptor(reportLogger),
    new TransformInterceptor(),
  );

  setupSwagger(app);

  await app.listen(5000);
}
bootstrap();
