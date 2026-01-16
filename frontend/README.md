# Frontend Technical Specification

- Create a static website that serves an html resume.

## Resume Considerations

For now, I want to use my [existing resume](../.old/docs/myresume.jpg) as the base for this website. Format tweaks and adjustments will likely occur, but for now I just want to get a first draft set up.

### Existing Resume Format Generation

To avoid spending excesive time on hand coding the HTML from scratch, I am going to leverage AI to assist in converting my resume into HTML and CSS. I'll adjust any elements as needed to conform to my desired format.

Prompt used in ChatGPT 5.2:

```text
Convert this resume into HTML. Maintain style, format, and text.
```

Below image was provided along with prompt:

![](../.old/docs/myresume.jpg) 

This is the [generated output](../.old/docs/resume_aigen_12-27-25.html). And below is what it looks like visually before any alterations:

![](../.old/docs/Screenshot%202025-12-27%20at%2012.48.04 PM.png)

I'd say it did a pretty good job as a first draft, but I do see issues with some words being bolded that shouldn't be, and it's definetely a bit cramped. I'll be rafactoring the code to improve readability and formatting at a later point, but for now this is good enough for an MVP.

I went ahead and instructed Chat GPT to split the original output into separate .html and .css files, which are now located [here](../.old/public/)

## Serve Static Website Locally

So I changed my mind - I am going to adjust the resume's HTML and CSS now rather than later. 

To do that, I am going to serve the static website locally so I can view any html or style changes I make and perform adjustments on the fly.


### Install HTTP Server

I will enter the below command to install http-server into our current cloud environment (assuming we have node installed. If not, install first)

```sh
npm i http-server -g
```

https://www.npmjs.com/package/http-server

### Serve Website

http-server will serve the public folder by default where the command is run. So I will move into the "frontend" directory.

```sh
cd frontend
```
Then I will enter the following command:

```sh
http-server
```
As you can see, the http server is now serving ./public

![](../.old/docs/http-server%20serving%20public.png)

And here's what the site looks on the locally hosted http server

![](../.old/docs/resume%20website%20local%20server.png)

## HTML/CSS Adjustments

Did some restructuring of the HTML code to better separate out the elements for editing. Added a navigation bar, since this site will consist of a few pages, and did some adjustments to the line spacing, font sizing, and bolding of the text. Here is the current result:

![](../.old/docs/resume_after_edits_12-31.png)

## Frontend Configuration

Will be using React to build the frontend (as it's one of the more popular frameworks) along with vite.js as the build tool.

Is this necessary? No. I could very well just serve static pages, but I think the value I'll gain from learning these tools is worth it.

### Vite.js Installation

To install Vite.js, I visited vite.dev and grapped the npm installation command from their guide and ran it in my Cloud Development Environment (CDE) terminal:

```sh
npm create vite@latest
```

Since I want the target directory for Vite to be the [`frontend`](../frontend/) folder, I will need to rename the current folder, since Vite will load files into the directory and I don't want to mess with anything I currently have in there. I will rename it `frontend-dev` (later renamed [`.old`](../.old)), create a new `frontend` folder, and install Vite there.

Moving forward with the installation, I will select React for the framework JavaScript for the Variant, and will be using Rolldown-Vite

![](../documentation/media/vite%20installation.png)

Installation is now complete.

### Starting the Vite Local Development Server

I will now be starting the local dev server so I can see changes I make to React components in near-real time.

To start it, I will run:

```sh
cd frontend
npm run dev
```

This command runs the dev script defined in the `package.json` file. It starts a local dev server, with a default url of http://localhost:5173.


### Porting index.html Into React Components

React apps work by composing different components together and rendering them dynamically in the browser using JavaScript. I will need to refactor our existing index.html file into separate React components (files), written in JSX.

I will start by creating a component called [`Header.jsx`](./src/components/Header.jsx), which will contain the markup for our navigation bar.

A separate component will also be created called [`ResumePage.jsx`](./src/components/ResumePage.jsx), which will consist of the resume itself

The parent component which will hold both `Header.jsx` and `ResumePage.jsx` will be called [`ResumeTab.jsx`](./src/pages/ResumeTab.jsx).


### React Router

Now we need to get React Router set up with our web app. React Router will allow us to map URLs to different components, enabling our app to control which components render based on the URL, without requiring a full page reload. 

For example, we can map the `ResumeTab.jsx` component to `/resume`, and do the same for any other pages added in the future.

To install:

```sh
npm i react-router --save
```

`--save` will add the dependency to `"dependencies"` in `package.json`. Dependencies listed there are installed for production deployments, so libraries our app needs to run (like React Router) should be listed under "dependencies" rather than "devDependencies".

We'll be using Declarative mode. Full instructions for installation and routing can be found here: https://reactrouter.com/start/declarative/installation






So far I've created two React components that render the header+navigation bar and resume page. Currently using the "main" element from the source HTML as the base layout.

