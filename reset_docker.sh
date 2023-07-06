# 终止容器并删除镜像 然后重新构建
docker-compose down
docker rmi node_web
docker-compose up -d