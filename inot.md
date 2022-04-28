# docker msyql 链接

```
登录docker msyql 授权
grant all privileges on _._ to 'root'@'%';
flush privileges;
```

# packages

1. typeorm

```
typeorm
@nestjs/typeorm：提供装饰器
```

2. passport

- auth/jwt

```
passport
passport-jwt
passport-local
@nestjs/passport
@nestjs/jwt
crypto-js
```

3. swagger

- 文档

```
swagger-ui-express
@nestjs/swagger
```

4. config

- 配置化

```
@nestjs/config
```

5. schedule

- 定时任务

```
@nestjs/schedule
```

6. class-validator

- 表单验证

```
class-validator
```

7. transform

-

```
class-transformer
```

# typeorm

- https://zhuanlan.zhihu.com/p/448326823
- forRoot: 创建链接
- forFeature：创建实体
