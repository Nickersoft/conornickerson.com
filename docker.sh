#!/bin/bash

NAME=conor
PORT=8888

function build {
    docker build -t ${NAME} .
}

function clean {
    docker rmi -f ${NAME}
    docker rm -f ${NAME}
}

function run {
    docker run  -d --name ${NAME} -p ${PORT}:${PORT} ${NAME}
}

 if [ "$#" -eq  "0" ]
    then
        clean
        build
        run
    else
        $1
 fi
