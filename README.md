
# Serverless-Pizza-ExampleAPI

Api sencilla realizada con uso de Serverless para entender como funciona este servicio.




## Crear directorio (linux)
Este comando se utiliza para generar una carpeta en el directorio

```bash
 mkdir perdirPizzas
```

## Crear template
Este comando se utiliza para generar un template en Node.js

```bash
 sls create --template aws-nodejs --name pedirPizzas
```
o
```bash
 serverless create --template aws-nodejs --name pedirPizzas
```

## Global Config Serverless
Este comando se utiliza para configurar en nuestra pc los datos de acceso a
AWS sin necesidad de escribirlos al momento de hacer deploy

```bash
serverless config credentials --provider aws --key 1234 --secret 5678
```

## Deploy
Este comando se utiliza para subir los cambios a AWS

```bash
sls deploy --aws-profile [username]
```

