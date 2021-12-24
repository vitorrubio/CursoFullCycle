# Curso Full Cycle

## Exemplos das aulas de docker

### notas

- iniciar o container de node
`docker run -it --rm --name node -v $(pwd):/usr/src/app -p 3000:3000 node:15 bash`