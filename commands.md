docker run -it -d -p 4200:4200 -v ${PWD}:/app node:14.16.0
npm install -g @angular/cli
ng new mean-course
ng serve --host 0.0.0.0
(try "npm install" then "ng update" if it's not working)

### 2-20
`ng add @angular/material`