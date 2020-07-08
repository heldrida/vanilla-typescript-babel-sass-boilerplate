
  # Vanilla Typescript+Babel+Sass Boilerplate
  
  A Boilerplate for vanilla Typescript projects, transpiled by Babel and styled with Sass.

  ## Get started

  Assuming that you have Nodejs and NPM/Yarn installed on your system (for the CLI, Bash scripts, this was developed in MacOS, so if running under windows make sure you use WSL - but it was not tested); Bellow, we use Yarn as an example but feel free to stick with NPM; You should proceed by running the commands listed bellow.

  Before proceeding, you should instal the dependencies for the project:

  ```bash
  yarn install
  ```

  For development:

  ```bash
  yarn start:dev
  ```

  Build the distribution version for production by running:

  ```bash
  yarn build
  ```

  This will output to the `dist` directory:

  ```txt
  /dist
    /project-name
      /versionX
          /css/main.min.css
          /js/main.min.js 
  ```

  ## License

  Licensed under [WTFPL](http://www.wtfpl.net/)