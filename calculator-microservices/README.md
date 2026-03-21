# Calculator Microservices Demo with NGINX Ingress Controller

This project contains:
- add-service
- sub-service
- mul-service
- div-service
- Dockerfiles for all services
- Helm chart for Kubernetes deployment
- NGINX Ingress routing
- GitHub Actions workflows for PR validation and post-merge deployment

## Access paths through ingress
- /add?a=10&b=5
- /sub?a=10&b=5
- /mul?a=10&b=5
- /div?a=10&b=5

## Deploy with Helm
helm upgrade --install calculator-app ./helm/calculator-app \
  --namespace calculator --create-namespace \
  --set image.repository=<dockerhub-username> \
  --set image.tag=<tag>

## Notes
You need an NGINX Ingress Controller installed in the cluster.
