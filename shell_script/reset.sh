# reset builds, node_modules & verdaccio
rm -rf ./lib || true
rm -rf ./index.js || true
rm -rf ./tests || true
rm -rf ./types || true
rm -rf ./coverage || true
rm -rf ./node_modules || true
rm -rf ./package-lock.json || true
rm -rf ./verd/storage || true
rm -rf ./verd/plugin || true
rm -rf ./verd/htpasswd || true