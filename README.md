# Bus App Frontend

## About this project

This project aims to create an interface that consumes the data provided by [this project](https://github.com/Facusan2016/BusAPIBackend) displaying a list of all the availables bus lines and showing their corresponding routes on a map.

![busExample](/public/example.png)


## Installation and Execution
To run this project, Docker must be installed on your local machine. Once installed, execute the following command in the root folder:

```sh
docker compose up --build
```

This command will create one Docker container with the application, which can be accessed at http://localhost:8080.

but before executing this command, you need to create a .env file in the root folder that contains two variables:

```.env
VITE_GOOGLE_API_KEY
VITE_BACKEND_URL
```

`VITE_GOOGLE_API_KEY` is the API key required to use the Google Maps services. You can obtain your own key by following the steps outlined in this [link](https://developers.google.com/maps/documentation/javascript/cloud-setup?hl=es-419)
and you need to enable the following [Maps JavaScript API](https://console.cloud.google.com/apis/library/maps-backend.googleapis.com?utm_source=Docs_EnableSpecificAPI&hl=es-419&_gl=1*1mz100p*_ga*NDk0MDI2MzE1LjE3MTI3NzI5OTc.*_ga_NRWSTWS78N*MTcxNDA2MzczOC43LjEuMTcxNDA2Mzc3Mi4wLjAuMA..&project=reactmapsproject-411715).

Once your project is created and you've obtained the API KEY credential, you can paste it as `VITE_GOOGLE_API_KEY={YOUR_API_KEY}`.

`VITE_BACKEND_URL` is the environment variable used to make requests to the backend. In this case, you'll have to set this value to `http://localhost:3000/` since that's where our backend will be running.





