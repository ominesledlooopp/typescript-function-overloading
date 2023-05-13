firstRun=false;
message='Initial commit';
GPGSign=false;
reset=false

usage(){
  echo ""
  echo "one argument is required: [-p] || [-f] || [-R]"
  echo "optional args:\n       '[-m]' is set to 'Initial commit' '[-S]' is set to 'false'."
  echo "       if the flag -m is set it must have a value."
  echo ""
  echo "Usage: $0 -p -m 'message' -S\n       this will GPGSign the commit and publish the package with new version"
  echo ""
  echo "available flags:\n"
  echo "\t[-f] run this flag once just after cloned the repository."
  echo "\t[-p] publish and commit changes. most of the time you'll use this one."
  echo "\t[-m {string}] commit message."
  echo "\t[-S] sign the commit with GPG."
  echo "\t[-R] reset the repository, delete builds, node_modules and remove installed global packages."
  echo "\t[-h] show this help."
  echo ""
  exit 1
}

while getopts fSRhpm: flag
  do
    case "${flag}" in
      f) firstRun=true;;
      m) message=${OPTARG};;
      S) GPGSign=true;;
      R) reset=true;;
      h) usage ;;
      p) p=true
    esac
  done

if (( $OPTIND == 1 )); then
   usage
   exit 1
fi

if $GPGSign = true; then
  S='-S'
else
  S=''
fi

if $firstRun = true; then
  rm -rf .git
  sleep 1
  git init
  git add .
  git commit -m "$message" $S
  if pm2 -v &> /dev/null
  then
    pm2 kill
  fi
  sh shell_script/reset.sh
  sleep 3
  npm remove -g pm2 verdaccio
  npm install -g pm2 verdaccio --registry https://registry.npmjs.org
  pm2 start verdaccio -- --config ./verd/config.yaml
  npm install
  npm run build
  sh shell_script/npm_adduser.sh
  npm publish
elif [ $reset = true ]; then
  rm -rf .git
  sleep 1
  if pm2 -v &> /dev/null
  then
    pm2 kill
  fi
  sh shell_script/reset.sh
  sleep 3
  npm remove -g pm2 verdaccio
elif [$p = true]
  git add .
  git commit -m "$message" $S
  npm version patch -m "version patched"
  git add .
  new_version=`node -p "require('./package.json').version"`
  git commit -m $'tag added\n\nv'$new_version $S
else
  usage
  exit 1
fi