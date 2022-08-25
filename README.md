# Domain Name Generator

![domainNameGenerator](https://user-images.githubusercontent.com/88908436/186728553-6348bc84-8784-44be-8a5a-ca41ff88ba8f.png)

If you are interested in accessing the boilerplate with which this app got started, click on the button below.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/vanillajs-hello.git)

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.
Start coding your Vanilla.js application, update the `src/index.html`, `src/index.css` or `src/app.js` depending on your needs.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## FAQ

#### 1) How do I run my code?
Type on the command line `$ npm run start` and type localhost on the browser.

#### 2) Where do I write my code?
It depends on the language, but you have `./src/js/app.js`, `./src/style/index.css` and `./isrc/index.html` respectively, you can add new `.html` as you please, just make sure to include import it on the index.js.

__Note:__ remember that the JS workflow starts inside `window.onload`.

#### 3) I don't see my changes.

Everytime you change any file inside the `./src` folder the website public URL will automatically refresh the changes (it's a process called hot deploy)
Remember also to refresh cleaning the cache (command+shift+r on mac, control+shift+r on pc & linux)

#### 4) How do I include more images on my project?
Add them inside the `./src/assets/img` folder and import them from any of your JS files. E.g: `import "../assets/img/rigo-baby.jpg";`

#### 5) How do I include more JS files?
Just add the files into the JS folder and import the file/variables into your index.js. E.g: `import myVar from "./file2.js"`

#### 6) How do I publish the website?
This boilerplate is 100% compatible with the free github pages hosting. Publish your website by running:
```sh
$ npm run deploy
```

Very easy and in just one step!  Push to your __master__ branch and use the free hosting that comes with [GitHub pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages), the project is ready to be published. Remember to choose to run the Github Page from your master branch.

