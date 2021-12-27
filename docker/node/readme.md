# Curso Full Cycle

## Exemplos das aulas de docker

### notas

- iniciar o container de node
`docker run -it --rm --name node -v $(pwd):/usr/src/app -p 3000:3000 node:15 bash`


### problema do kill -9 do node

O nodejs não pode ser iniciado com PID 1, porque ele não atende ao sinal SIGKILL. (kill -9 não funciona). 

Para isso ele deve ser iniciado por outro processo que o monitore. Existe a opção --init no docker ou a opção init:true no docker-compose. 

Referências:
- [Avoid running nodejs as PID 1 under the docker image](https://developpaper.com/avoid-running-nodejs-as-pid-1-under-the-docker-image/)
- [docker stop doesn't work for node process](https://stackoverflow.com/questions/27970060/docker-stop-doesnt-work-for-node-process)
- [baseimage-docker](https://github.com/phusion/baseimage-docker)
- [What's the docker-compose equivalent of docker run --init](https://stackoverflow.com/questions/50356032/whats-the-docker-compose-equivalent-of-docker-run-init)
- [How to kill a node process](https://dev.to/dvddpl/how-to-kill-a-node-process-5d13)

Comandos para listar os processos:
- `ps aux` ou `ps -ef`

Comando para matar um processo:
- `kill -9 <PID>`


Se der o erro (usando wsl2)

```
sudo: /etc/sudoers is owned by uid 1000, should be 0
sudo: no valid sudoers sources found, quitting
sudo: unable to initialize policy plugin
```
acesse o root pelo windows
`wsl -u root`

troca o dono pra root
`chown -R root:root /etc/sudoers`

[Corrigindo ownership sudoers(https://askubuntu.com/questions/1236340/cant-change-the-owner-back-to-the-root-cant-use-sudo-command-in-wsl-ubuntu)


### Depends e Dockerize
Está flagado que o app depende do db usando a flag depends_on:db, no entanto pode ser necessário usar o dockerize:
[dockerize](https://github.com/jwilder/dockerize)