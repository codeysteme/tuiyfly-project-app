# Welcome to TuiFly.FlySearchApi

This is a basic asp.net core project for fetching flights and airports.

## Step for building and run app

with docker cli run commands

### `build docker image`

```
docker build -t tuifly_booking_api .
```

### `run app`

```
docker run -d -p 7025:80 tuifly_booking_api
```

## Launch and test app in browser

`open the swagger of application TuiFly.FlySearchApi`

Open [http://localhost:7025/swagger/index.html](http://localhost:7022/swagger/index.html) to view it in your browser.
