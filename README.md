# Instrucciones para Desplegar la Aplicación con Docker Swarm

Sigue estos pasos para construir y desplegar tu aplicación usando Docker Swarm.

## Paso 1: Construir la Imagen Docker
Ejecuta el siguiente comando para construir tu imagen Docker. Asegúrate de estar en el directorio que contiene tu archivo Dockerfile.

```shell
docker build -t my-mailer-app .

```

## Paso 2: Inicializar Docker Swarm
Inicializa Docker Swarm ejecutando el comando siguiente. Esto te permite administrar un clúster de contenedores Docker.

```shell
docker swarm init

```

## Paso 3: Desplegar la Stack
Ahora puedes desplegar tu stack utilizando el archivo docker-compose.yml.

``` shell
docker stack deploy -c docker-compose.yml my-mailer-stack
```

Esto desplegará la stack llamada my-mailer-stack basada en la configuración contenida en tu archivo docker-compose.yml.

## Paso 4: Verificar los Servicios
Para verificar el estado de tus servicios, utiliza el siguiente comando.

```shell
docker service ls
```

Esto te proporcionará una lista de todos los servicios que se están ejecutando.

## Paso 5: Ver los Logs de la Aplicación
Finalmente, para asegurarte de que todo funcione correctamente, verifica los logs de tu aplicación con el siguiente comando.

```shell
docker service logs my-mailer-stack_app

```
Con esto, podrás ver los logs del servicio app en tu stack my-mailer-stack.