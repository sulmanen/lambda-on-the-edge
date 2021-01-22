# Typescript@Edge
Run transpiled typescript on AWS Lambda@Edge. Go through setting up:
- viewer request
- origin request
- origin response
- viewer response

triggers with typescript and terraform with a codesandbox.io origin.

# Prerequisites
- AWS account
- `brew install terraform` Terraform v0.14.4
- `.aws/credentials` contains aws accesskeys
- `cd infra && terraform plan` OK
- `nvm use && npm install && npm run tsc` OK
- [Fork codesandbox.io sandbox](https://codesandbox.io/s/hidden-surf-n0y6g)
- codesandbox.io sign in (you can do so with a github account)
