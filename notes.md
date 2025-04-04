html5 - https://html5up.net/
unsplash - https://unsplash.com/

[![An image of @elidakirigo's Holopin badges, which is a link to view their full Holopin profile](https://holopin.me/elidakirigo)](https://holopin.io/@elidakirigo)

npx create-nx-workspace@latest --packageManager=yarn

# adding nx plugins 
npx i @nx/react @nx/express @nx/node

## init plugins 
npx nx g @nx/express:init 
npx nx g @nx/react:init 

npm nx list

# generating express app 
npx nx g @nx/express:app --help 

npx nx g @nx/express:app public-backend --dryRun 
npx nx g @nx/express:app public-backend

# generate frontend app 
npx nx g @nx/react:app --help 

npx nx g @nx/react:app public-frontend \ --bunder=webpack --style=css --routing=false --pascalCaseFiles --dryRun 
npx nx g @nx/react:app public-frontend \ --bunder=webpack --style=css --routing=false --pascalCaseFiles  

# serve 
npx nx serve backend
npm nx serve @public/public-frontend

# move backend to nx 🔙 - packages

https://jqlang.org/

- jq -r '.dependecies | [keys[] as $k | "\($k)@\(.[$k])"] | join(" ")' ./public-backend/package.json

- npm install apollo-server-core@3.12.0 apollo-server-express@3.12.0 argon2@0.30.3 body-parser@1.20.2 cors@2.8.5 dotenv-flow@3.2.0 express@4.18.2 graphql@^15.8.0 jsonwebtoken@9.0.0 mariadb@2.5.6