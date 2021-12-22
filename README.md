# CursoFullCycle
anotações do curso full cycle

## Aula de docker

[Colinha de docker ](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes)

### Comandos

- inicia o container adicionando volume com -v
`docker run --rm --name engineques -d -p 8080:80 -v /home/vitor/CursoFullCycle/docker/html/:/usr/share/nginx/html/ nginx`

- inicia o container adicionando bind com --bind
`docker run --rm --name engineques -d -p 8080:80 --mount type=bind,source="$(pwd)",target=/usr/share/nginx/html/ nginx`

