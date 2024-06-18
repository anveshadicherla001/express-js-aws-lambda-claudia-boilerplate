# backend-boilerplate-expressjs-lambda

# Running Locally

To run the project locally, follow these steps:

1. Install [NodeJs](https://www.nodejs.org/) on your machine.
2. Clone the project repository.
3. Navigate to the project directory.
4. Create `.env.development` file in the root folder and copy paste the content of `.env.sample`, and add necessary credentials.
5. Create `.env.production` file in the root folder and copy paste the content of `.env.sample`, and add necessary credentials.
6. Install the packages:

```bash
npm install
```
7. Run the project:

```bash
npm run devStart
```


# Deployment

## Step:1 | Environment Configuration

1. Create `.env.development` file in the root folder and copy paste the content of `.env.sample`, and add necessary credentials.

2. Create `.env.production` file in the root folder and copy paste the content of `.env.sample`, and add necessary credentials.

3. Generation of environment config as json files for each environment

    DEV:

            npm run env-setup-dev
            
    PRODUCTION:

            npm run env-setup-production

## Step:2 | Modify the package.json as needs

`create-dev` creation of development lambda function

```
"claudia create --config claudia.dev.json --name=__DEV_PROJECT_NAME__ --region __REGION__ --handler lambda.handler --profile=__PROFILE_NAME__ --deploy-proxy-api --role=__ROLE_NAME__ --set-env-from-json app.config.dev.json --version dev",
```

`create-production` creation of production lambda function

```
"claudia create --config claudia.prod.json --name=__PROD_PROJECT_NAME__ --region __REGION__ --handler lambda.handler --profile=__PROFILE_NAME__ --deploy-proxy-api --role=__ROLE_NAME__ --set-env-from-json app.config.dev.json --version prod",
```

`update-dev` updating development lambda function

```
"claudia update --config claudia.dev.json --name=__DEV_PROJECT_NAME__ --profile=__PROFILE_NAME__ --handler lambda.handler --role=__ROLE_NAME__ --set-env-from-json app.config.dev.json --version dev",
```

`update-production` updating production lambda function

```
"claudia update --config claudia.prod.json --name=__PROD_PROJECT_NAME__ --profile=__PROFILE_NAME__ --handler lambda.handler --role=__ROLE_NAME__ --set-env-from-json app.config.prod.json --version prod",
```



## Step:3 | Generate-serverless-express-proxy


#### Create a lambda proxy API wrapper for an express app using aws-serverless-express

## Usage
```
npm run generate-proxy
```

Output Would be something like this
```
> claudia generate-serverless-express-proxy --express-module app

npm install aws-serverless-express -S
+ aws-serverless-express@3.4.0
updated 1 package and audited 325 packages in 5.92s

48 packages are looking for funding
  run `npm fund` for details

found 7 vulnerabilities (1 moderate, 5 high, 1 critical)
  run `npm audit fix` to fix them, or `npm audit` for details
{
  "lambda-handler": "lambda.handler"
}
```

# LAMBDA Fn CREATION FOR DEV/PROD ENVIRONMENTS

## Step:4 | Creation of lambda function for development environment

### Usage
```
npm run create-dev
```

## Step:4(a) | Triggering development lambda function endPoint

### Check the `claudia.dev.json` file

```
{
  "lambda": {
    "role": "<YOUR_ROLE_NAME>",
    "name": "<YOUR_FN_NAME>",
    "region": "<YOUR_REGION>",
    "sharedRole": true
  },
  "api": {
    "id": "<YOUR_API_GATEWAY_ID>"
  }
}
```

```
https://{YOUR_API_GATEWAY_ID}.execute-api.{YOUR_REGION}.amazonaws.com/dev
```

## Step:5 | Creation of lambda function for production environment

### Usage
```
npm run create-production
```

## Step:5(a) | Triggering production lambda function endPoint

### Check the `claudia.dev.json` file

```
{
  "lambda": {
    "role": "<YOUR_ROLE_NAME>",
    "name": "<YOUR_FN_NAME>",
    "region": "<YOUR_REGION>",
    "sharedRole": true
  },
  "api": {
    "id": "<YOUR_API_GATEWAY_ID>"
  }
}
```

```
https://{YOUR_API_GATEWAY_ID}.execute-api.{YOUR_REGION}.amazonaws.com/prod
```

# LAMBDA Fn UPDATE FOR DEV/PROD ENVIRONMENTS

## Step:6 | Updating lambda function for development environment

### Usage
```
npm run env-setup-dev
npm run update-dev
```

## Step:7 | Updating lambda function for production environment

### Usage
```
npm run env-setup-production
npm run update-production
```
