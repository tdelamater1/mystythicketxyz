docker buildx use mybuilder
docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t tdelamater/mistythicketxyz:latest --push .

