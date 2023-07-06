# 终止容器并删除镜像 然后重新构建
docker stop web-service
docker rm web-service
docker rmi node_web
docker-compose up -d