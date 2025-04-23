#!/bin/bash

set -e

echo "Iniciando servidor com hot reload..."

while true; do
  go run main.go &
  pid=$!

  # Observa alterações em arquivos .go
  inotifywait -e modify -r ./**/*.go

  echo "Alterações detectadas, reiniciando servidor..."
  kill $pid
  wait $pid 2>/dev/null
done
