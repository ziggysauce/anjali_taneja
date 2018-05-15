# Contributing to Anjali Taneja's webpage

Thank you for your interest and contributions!
For any specific questions or suggestions, feel free to send us an email at dtn3423@gmail.com or mbdesai@umich.edu.

## Getting Started with Contributing
1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository and [clone your fork](https://help.github.com/articles/cloning-a-repository/) onto your machine.
2. Make sure you have the latests versions of [Node.js and npm](https://nodejs.org/en/) installed.
3. In the command line terminal, navigate to the root directory of your local clone.
4. Install gulp-cli globally if you don't already have it. `npm install gulp-cli -g`
5. Run `npm install` This will install all the development dependencies of this project.
6. Run `gulp` to begin developing! For more info on a gulp-based workflow, [click here](https://gulpjs.com/).
7. NOTE: all Sass and CSS is written in the src/scss folder. If you work on files in src/css, you risk having your work overwritten when gulp compiles the Sass to CSS.

## Making a Pull Request
1. When you've finished making your changes, [watch this video](https://www.youtube.com/watch?v=mENDYhfxH-o) to make sure your local clone is up-to-date, and then properly make a pull request.


## Changes to 'UPCOMING EVENTS' section
* Changes are to be made to the `index.html` file
* The code for a general event will look like this:
```
<div class="event_list">
  <p>February 10</p>
  <p>Gypsy Sally's (Washington, D.C.)</p>
  <p>9:00 pm</p>
</div>
```
* The `<div>` element acts as a container for each event
* Each `<p>` element acts as a text section for each event
  * The first `<p>` is for the DATE
  * The second `<p>` is for the venue/location
  * The third `<p>` is for the time
* To update the content, simple edit the text inside each corresponding `<p>` element


## Changes to 'GALLERY' section
* Changes are to be made to the `index.html` file
* The code for each gallery image will look like this:
```
<a href="https://www.instagram.com/p/BR9cHwLARW2/?taken-by=anjalixmusic" target="_blank">
  <img class="insta-img" src="https://image.ibb.co/mithp7/gallery3.jpg" alt="taneja gallery image">
</a>
```
* The `<a>` element is an anchor tag that links to another website
  * In this case, each anchor tag will link to the specific intagram image upload
  * The `href` attribute is where the link for the instagram image goes
* The `<img>` element is for the actual image
  * The `src` attribute is where you would include the source of the image
* Up update the content:
  1. Edit the `href` with the instagram image link
  2. Edit the `src` with the actual image source file (usually ends with a .jpg or .png file extension)