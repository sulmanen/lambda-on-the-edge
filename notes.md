# Plan
General info
- describe the problem
- what is lambda at the edge
- how does it solve the above problem
- pricing
- alternatives
- how


# lambda-on-the-edge
What is Lambda@Edge and what can I do with it. [Best Practices](https://aws.amazon.com/blogs/networking-and-content-delivery/lambdaedge-design-best-practices/)

# Why?
I wrote some Lambda@Edge code which got thrown away and now I can tell you this story.

# Write up about AWS Lambda@Edge

## Alternatives
- Azure no
- GCP no
- [Cloudflare Workers](https://www.cloudflare.com/products/cloudflare-workers/) used by NPM

# Presentations

# Walk through this with someone else

# What
- run code close to the viewer at cloudfront edge locations

# It's not AWS Lamda

# Price
## $0.60 per 1M requests
## $0.00005001 per GBs
## Granularity of 50ms

# Supported environments
- nodejs8.10, nodejs10.x
- python3.7

# Lambda@Edge events
## Viewer triggers
### Restrictions
- 128 MB memory

- Viewer request
- Viewer response

## Origin triggers
### Restrictions
- 3008MB memory

- Origin request
- Origin response


# Use cases
- A/B testing

# Requirements and restrictions
[Requirements & Restrictions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-requirements-limits.html#lambda-blacklisted-headers)

## Restrictions
- You can't configure your Lambda function to access resources inside your VPC
- environment variables aren't supported



# Set up private amazon account

# Deploy lamdas

# Typescript typings

# Test typescript typings

# Examples
- viewer-response
- viewer-request
- origin-request
- origin-response


# Things to remember
- 100 % code coverage will save you time, as cloudfront deploy makes iteration slow
- origin responses can only mutate headers, not the url or the body of the request
- just because your test works, don't assume lamba@edge runs the way your test does

# Excercises
Implement a simple trigger each.

## Prerequisites
AWS Account
codesandbox.io access

## viewer-response
- modify response and don't cache

## viewer-request
- Normalize cache key

## origin-request
- remap urls

## origin-response
- modify server response before it's cached


## aws-lambda-power-tuning
(power tuning)[https://github.com/alexcasalboni/aws-lambda-power-tuning]

## aws lambda at edge server render
https://aws.amazon.com/blogs/compute/building-server-side-rendering-for-react-in-aws-lambda/
