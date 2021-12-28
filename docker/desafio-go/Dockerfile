FROM golang:latest as builder

WORKDIR /go/src

COPY . . 

RUN go build


FROM scratch

WORKDIR /go/src

COPY --from=builder /go/src .

CMD ["./full-cycle-rocks"]