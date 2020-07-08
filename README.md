
  # iProov Web SDK: Align user face
  
  The goal for this project is to guide the user to correctly align their face to the webcam.

  ## The requirements are:

  - A CTA to request access to the user webcam through the getUserMedia, supporting modern Chrome and Firefox;
  - Display a mirrored view of the webcam video to the user
  - Draw a rectangle around any detected face's bounding box (for this particular solution, I'll compute a single user only)
  - Use an external library to compute the face detection inside a webworker (tensorflow for senior devs)
  - Provide instructions to the endu ser based on the following detected states:
   > Align face, if no face is found
   > Move left or right, accordingly, when the face is aligned 20% in the opposite direction
   > Come close, when the face is less than 40% of the video view
   > Ready, if none of the above
  - Nice to have's (not mandatory)
   > The webcam should open in fullscreen and centered
   > Smooth detection inaccuracies that cause instruction jitter at the edge of face states
   > Overlay the instructions on the video with an oval shape indicating the correct face position
   > Gracefully handle webcam errors, such as "no camera detected" and "permission denied"
   > Apply a filter or shader to the video feed's display


  ## To get started

  Assuming that you have Nodejs and NPM/Yarn installed on your system (for the CLI, Bash scripts, this was developed in MacOS, so if running under windows make sure you use WSL - but it was not tested); Bellow, we use Yarn as an example but feel free to stick with NPM; You should proceed by running the commands listed bellow.

  Before proceeding, you should instal the dependencies for the project:

  ```bash
  yarn install
  ```

  For development there are two main options, one for the main source-code and the second stylesheets, as follows:

  ```bash
  yarn start:webpack-dev-server
  ```

  ```bash
  yarn watch:stylus
  ```

  Build the distribution version for production by running:

  ```bash
  yarn build
  ```

  This will output to the `dist` directory:

  ```txt
  /dist
    /iproov-web-sdk
      /versionX
          /css/main.min.css
          /js/main.min.js 
  ```

  ## Release notes

  - Since we're looking into an SDK, we'll not use any third-party libraries such as React/VUE/Angular. That would help speed up development, as I wouldn't have to worko in the boilerplate code. So, I took the time to create a minimal boilerplate for Typescript and a CSS pre-processor;
  - The boilerplate will have a development mode, that should have a live reload feature, the project package name and version;
  - I've decided to use the `stylus` as a css pre-processor, but any would do. Opted for this one for its simplicity and no semicolons, etc;
