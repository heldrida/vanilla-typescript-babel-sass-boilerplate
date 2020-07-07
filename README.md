
  # iProov Web SDK: Align user face
  
  The goal for this project is to guide the user to correctly align their face to the webcam.

  ### The requirements are:

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


  ### To get started

  Assuming that you have Nodejs and NPM/Yarn installed on your system, we use Yarn as an example but feel free to stick with NPM; 
  You should proceed by running the commands listed bellow.

  Before proceeding, you should instal the dependencies for the project:

  ```bash
  yarn install
  ```

  Start the development environment:

  ```bash
  yarn start
  ```

  Build the distribution version for production by:

  ```bash
  yarn build
  ```

  The project is version controlled using a feature branch strategy. Feel free to look into the project history using the git log and checking out
  to the commit history.

  ### Release notes

  - Since we're looking into an SDK, we'll not use any third-party libraries such as React/VUE/Angular. For a test I believe this should be alright
  and would speed up development, as I'd avoid having to workout the boilerplate code. But, I'll take the time to create a minimal boilerplate for
  Typescript and a CSS pre-processor;
  - The boilerplate will have a development mode, that should have a live reload feature. Noticed that for the past 5 years there aren't any new libraries that solves this problem, so I went back and use a library that I was familiar with called browser-sync which hasn't been updated for some time now, but
  does the trick;
  - I've decided to use the `stylus` as a css pre-processor, but any would do. Opted for this one for its simplicity and no semicolons, etc;
  