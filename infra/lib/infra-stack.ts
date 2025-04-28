import * as cdk from "aws-cdk-lib";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class LucasSiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3 Bucket
    const bucket = new s3.Bucket(this, "LucasSiteBucket", {
      bucketName: "lucas-slowik-website",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    const origin = origins.S3BucketOrigin.withOriginAccessControl(bucket, {
      originAccessControl: new cloudfront.S3OriginAccessControl(
        this,
        "LucasSiteS3OAC"
      ),
      originAccessLevels: [cloudfront.AccessLevel.READ],
      originPath: "/",
      connectionTimeout: cdk.Duration.seconds(10),
      connectionAttempts: 2,
    });

    // Cloudfront distribution
    new cloudfront.Distribution(this, "LucasSiteDistribution", {
      defaultBehavior: {
        origin: origin,
      },
    });
  }
}
