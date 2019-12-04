# lambda-on-the-edge
What is Lambda@Edge and what can I do with it.

# Why?
I wrote some Lambda@Edge code which got thrown away and now I can tell you this story.

# Write up about AWS Lambda@Edge

# What
- run code close to the viewer at cloudfront edge locations

# It's not AWS Lamda

# Supported environments
- nodejs8.10, nodejs10.x
- python3.7

# Lambda@Edge events
- Viewer request
- Origin request
- Origin response
- Viewer response

# Use cases
- A/B testing

# Requirements and restrictions
[Requirements & Restrictions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-requirements-limits.html#lambda-blacklisted-headers)

##
- You can't configure your Lambda function to access resources inside your VPC
- environment variables aren't supported



# Set up private amazon account

# Deploy lamdas

# Typescript typings

# Test typescript typings

# Examples



# Things to remember
- origin responses can only mutate headers, not the url or the body of the request
- just because your test works, don't assume lamba@edge runs the way your test does