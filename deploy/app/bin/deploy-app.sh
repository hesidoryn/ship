#!/bin/sh

# deploy api
cd ../../api && npm i --production && up deploy production & 

# deploy landing
cd ../../landing && npm i --production && up deploy production &

# deploy web
cd ../../web && npm i && up deploy production