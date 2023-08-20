# Welcome to TuiFly_App

This is a basic react app for fetch flights and make reservations.

## Step for building and run app

with docker cli run commands

### `build docker image`

```
docker build -t tuifly_app .
```

### `run app`

```
docker run -d -p 5088:3000 --name tuifly_app tuifly_app
```

## Launch and test app in browser

Open [http://localhost:5088](http://localhost:5088) to view it in your browser.
