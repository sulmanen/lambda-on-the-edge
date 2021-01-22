import { LambdaContext, MemoryLimitInMB } from '../src/lambda@Edge';

export const lambdaContextFake = (
    functionName = 'test',
    memoryLimitInMB: MemoryLimitInMB,
    callbackWaitsForEmptyEventLoop: boolean
): LambdaContext => ({
    getRemainingTimeInMillis: () => Date.now(),
    functionName,
    functionVersion: '1.0',
    invokedFunctionArn: Math.random().toString(36).substring(2, 15),
    memoryLimitInMB,
    awsRequestId: Math.random().toString(36).substring(2, 15),
    logGroupName: 'log-group',
    logStreamName: 'log-stream-name',
    callbackWaitsForEmptyEventLoop
});