# RocketSeat_project

```bash
Projeto GoStack Bootcamp 11
```

### Tecnologias:

![NodeJS](https://img.shields.io/badge/-NodeJS-555555?style=flat&logo=node.js)
![TypeScript](https://img.shields.io/badge/-TypeScript-555555?style=flat&logo=typescript)
![Express](https://img.shields.io/badge/-Express-555555?style=flat&logo=express)

![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-555555?style=flat&logo=postgresql)
![TypeORM](https://img.shields.io/badge/-TypeORM-555555?style=flat&logo=typeorm)

### Para Executar
```bash
Clone o repositório em:
$git clone https://github.com/BoanergesJunior/RocketSeat_project.git

$cd RocketSeat_project

$yarn i ||

$yarn dev:server
```


### Arvore de derivação de arquivos
```
.
├── ormconfig.json
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── config
│   │   ├── auth.ts
│   │   └── upload.ts
│   ├── database
│   │   ├── index.ts
│   │   └── migrations
│   │       ├── 1617832285736-CreateAppoitments.ts
│   │       ├── 1618239315276-CreateUsers.ts
│   │       ├── 1618244352159-AlterProviderFildToProviderId.ts
│   │       └── 1618941820636-AddAvatarFieldToUsers.ts
│   ├── errors
│   │   └── AppError.ts
│   ├── middlewares
│   │   └── ensureAuthenticated.ts
│   ├── models
│   │   ├── Appontments.ts
│   │   └── User.ts
│   ├── repositories
│   │   └── AppointmentsRepository.ts
│   ├── routes
│   │   ├── appointments.routes.ts
│   │   ├── index.ts
│   │   ├── sessions.routes.ts
│   │   └── users.routes.ts
│   ├── server.ts
│   ├── services
│   │   ├── AuthenticadeUserService.ts
│   │   ├── CreateAppointmentService.ts
│   │   ├── CreateUserService.ts
│   │   └── UpdateUserAvatarService.ts
│   └── @types
│       └── express.d.ts
├── tmp
│   └── 7fe650e09249142534bc-moon.jpg
├── tsconfig.json
└── yarn.lock

```
