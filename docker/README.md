# CursoFullCycle
anotações do curso full cycle

## Aula de docker

[Colinha de docker ](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes)

### Comandos Docker

- inicia o container adicionando volume com -v
`docker run --rm --name engineques -d -p 8080:80 -v /home/vitor/CursoFullCycle/docker/html/:/usr/share/nginx/html/ nginx`

- inicia o container adicionando bind com --bind
`docker run --rm --name engineques -d -p 8080:80 --mount type=bind,source="$(pwd)",target=/usr/share/nginx/html/ nginx`


o que vier depois do nome da imagem é um comando a ser executado, mas substitui o CMD do dockerfile


- Criação e inspeção de volumes
`docker volume create meuvolume`
`docker volume inspect meuvolume`

- teste dois container nginx compartilhando mesmo volume:
`docker run --rm --name enguinks1 -d -p 8080:80 --mount type=volume,source=meuvolume,target=/usr/share/nginx/html/ nginx`
`docker run --rm --name enguinks2 -d -p 8081:80 --mount type=volume,source=meuvolume,target=/usr/share/nginx/html/ nginx`

- teste colocando um terceiro com -v
`docker run --rm --name enguinks3 -d -p 8082:80 -v meuvolume:/usr/share/nginx/html/ nginx`


- lista todos os processos mesmo que não estão rodando
`docker ps -a`

- lista só os ids de todos os processos
`docker ps -a -q`

- parar tudo
`docker stop $(docker ps -a -q)`

- remover tudo
`docker rm $(docker ps -a -q)`

- deletar todas as imagens
`docker image prune`

- deletar os volumes
`docker volume prune`

- fazer a limpa em tudo
`docker system prune`
`docker system prune -a`

- listar todas as redes
`docker network ls`

- apagar todas as redes
`docker network prune`

- inspecionar rede
`docker network inspect bridge`

- entrar em um console que está rodando em modo -dit
`docker attach ubuntu1`

- criando uma rede do tipop bridge
`docker network create --driver bridge minharede`

- rodando um container especificando a rede
`docker run -dit --name [nome]] --network [nome da rede] [imagem]`

- conectar uma imagem em uma rede
`docker network connect minharede ubuntu3`

`docker run --rm -d --name nginx --network host nginx`


- setar variaveis de ambiente
`docker run -e VARIAVEL=valor --name [nome] [imagem]`

### Comandos Docker Compose

- levanta todos os containers em modo detached e rebuidando as imagens:
`docker-compose up -d --build`

- lista todos os containers do compose
`docker-compose ps`