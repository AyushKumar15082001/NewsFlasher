# News App with Next.js

Simple News App built with Next.js that uses server-side rendering to display top headlines fetched from the API provided by https://newsapi.org/.

## Deployment
The App is currently deployed at [my-news-app-pqzh.vercel.app](https://my-news-app-pqzh.vercel.app)

## Screenshot

![App Screenshot](https://user-images.githubusercontent.com/118304566/227334086-3e2d94e0-35dd-4182-971c-bbeef30113bb.png)

## Features
- We can search the article by Keywords through typing in the search bar.
- Users can get typeahead results as they keep typing the keywords in the search bar.
- Search bar uses the Debouncing technique that limits the number of searches to find the typeahead results by waiting till a user stops typing in the search box.
- Users can filter the categories by clicking the category in the categories tab.
- User will get client side pagination,  making navigation through pages seamless.

## Getting Started

To get started, first clone the repository:

```
git clone https://github.com/AyushKumar15082001/My-News-App.git
cd My-News-App
```

Next, install the dependencies:

```
npm install
```

You will also need to create an account at [NewsAPI.org](https://newsapi.org/) and obtain an API key. Once you have your API key, create a file named `.env` in the root directory of your project and add the following line:
```
NEWS_API_KEY = YOUR_API_KEY
```

Replace `YOUR_API_KEY` with your actual API key.

## Running the App

To run the app in development mode, run:

```bash
npm run dev
# or
yarn dev
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

To build the app for production, run:

```bash
npm run build
# or
yarn run build
```

This will create a production-ready version of the app in the `out` directory.

To run the production version of the app, run:

```
npm run start
```


This will start the production server at [http://localhost:3000](http://localhost:3000).

## Deploying the App

To deploy the app, you can use a service like [Vercel](https://vercel.com/), which provides an easy way to deploy Next.js apps.

Simply sign up for a free account, connect your GitHub repository, and Vercel will automatically build and deploy your app for you. While creating your project, put your API key in the Environment Variable section.

## Credits

This app was built using Next.js and [NewsAPI.org](https://newsapi.org/).
