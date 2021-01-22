provider "aws" {
  profile = "sulmanen"
  region = "us-east-1"
}

locals {
  viewer_request_origin_id = "viewer-request-test"
}

resource "aws_iam_role" "iam_for_lambda" {
  name = "iam_for_lambda"

  assume_role_policy = <<EOF
 {
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": ["lambda.amazonaws.com", "edgelambda.amazonaws.com"]
      },
      "Effect": "Allow"
    }
  ]
}
EOF
}

resource "aws_lambda_function" "viewer_request_lambda" {
  filename      = "../lambda_payload.zip"
  function_name = "viewer-request"
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "viewerRequest.handler"

  # The filebase64sha256() function is available in Terraform 0.11.12 and later
  # For Terraform 0.11.11 and earlier, use the base64sha256() function and the file() function:
  # source_code_hash = "${base64sha256(file("lambda_function_payload.zip"))}"
  source_code_hash = filebase64sha256("../lambda_payload.zip")
  publish = true
  runtime = "nodejs12.x"
}

resource "aws_lambda_function" "origin_request_lambda" {
  filename      = "../lambda_payload.zip"
  function_name = "origin-request"
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "originRequest.handler"

  # The filebase64sha256() function is available in Terraform 0.11.12 and later
  # For Terraform 0.11.11 and earlier, use the base64sha256() function and the file() function:
  # source_code_hash = "${base64sha256(file("lambda_function_payload.zip"))}"
  source_code_hash = filebase64sha256("../lambda_payload.zip")
  publish = true
  runtime = "nodejs12.x"
}

resource "aws_lambda_function" "origin_response_lambda" {
  filename      = "../lambda_payload.zip"
  function_name = "origin-response"
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "originResponse.handler"

  # The filebase64sha256() function is available in Terraform 0.11.12 and later
  # For Terraform 0.11.11 and earlier, use the base64sha256() function and the file() function:
  # source_code_hash = "${base64sha256(file("lambda_function_payload.zip"))}"
  source_code_hash = filebase64sha256("../lambda_payload.zip")
  publish = true
  runtime = "nodejs12.x"
}

resource "aws_lambda_function" "viewer_response_lambda" {
  filename      = "../lambda_payload.zip"
  function_name = "viewer-response"
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "viewerResponse.handler"

  # The filebase64sha256() function is available in Terraform 0.11.12 and later
  # For Terraform 0.11.11 and earlier, use the base64sha256() function and the file() function:
  # source_code_hash = "${base64sha256(file("lambda_function_payload.zip"))}"
  source_code_hash = filebase64sha256("../lambda_payload.zip")
  publish = true
  runtime = "nodejs12.x"
}

resource "aws_cloudfront_distribution" "viewer-request" {
  origin {
    domain_name = "n0y6g.sse.codesandbox.io"
    origin_id = local.viewer_request_origin_id
    custom_origin_config {
      http_port              = "80"
      https_port             = "443"
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  enabled = true
  is_ipv6_enabled = true
  comment = "trying this out"

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["FI"]
    }
  }

  default_cache_behavior {
    allowed_methods = ["GET", "HEAD"]
    cached_methods = ["GET", "HEAD"]
    target_origin_id = local.viewer_request_origin_id

    forwarded_values {
      query_string = false
      headers      = ["X-AB"]
      cookies {
        forward = "whitelist"
         whitelisted_names = [
          "userId"
        ]
      }
    }

    lambda_function_association {
      event_type = "viewer-request"
      lambda_arn = aws_lambda_function.viewer_request_lambda.qualified_arn
    }

    lambda_function_association {
      event_type = "origin-request"
      lambda_arn = aws_lambda_function.origin_request_lambda.qualified_arn
    }

    lambda_function_association {
      event_type = "origin-response"
      lambda_arn = aws_lambda_function.origin_response_lambda.qualified_arn
    }

    lambda_function_association {
      event_type = "viewer-response"
      lambda_arn = aws_lambda_function.origin_response_lambda.qualified_arn
    }

    viewer_protocol_policy = "allow-all"
    min_ttl = 0
    default_ttl = 60
    max_ttl = 86400
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}
