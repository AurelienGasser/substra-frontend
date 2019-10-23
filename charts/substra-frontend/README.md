# Main deployment package of Substra

## Requirements

Having a Kubernetes cluster working with Helm initialized. You can do thant locally by installing Minikube and grabbing Helm binary from github.
Then simply launch your cluster using `minikube start` and configure helm with `helm init`.

You will also need the Hyperledger Fabric network setup on the cluster.
Look at the corresponding chart for that (chart-hlf-k8s)

You will also need a postgresql instance on the cluster, it should already be the case if you install the network first.

## Install the package
```
helm install --name hlf-k8s substra/hlf-k8s
helm install --name substra substra/substrafront
```

### Cleanup
```
helm delete --purge hlf-k8s substrafront
```
