import { Alert, AlertDescription, AlertIcon, AlertTitle } from '../src';

export default {
  title: 'Alert',
  comport: Alert,
  parameters: {
    controls: { hideNoControlWarning: true },
  },
};

export const variant = () => (
  <div className="flex flex-col space-y-4">
    <Alert variants="solid">Flash message goes here.</Alert>
    <Alert variants="subtle">Flash message goes here.</Alert>
    <Alert variants="left-accent">Flash message goes here.</Alert>
    <Alert variants="light">Flash message goes here.</Alert>
    <Alert variants="outline">Flash message goes here.</Alert>
  </div>
);

export const withCustomDescription = () => (
  <div className="flex flex-col space-y-4">
    <Alert variants="solid">
      <AlertDescription>Flash message goes here.</AlertDescription>
    </Alert>
    <Alert variants="subtle">
      <AlertDescription>Flash message goes here.</AlertDescription>
    </Alert>
    <Alert variants="left-accent">
      <AlertDescription>Flash message goes here.</AlertDescription>
    </Alert>
    <Alert variants="light">
      <AlertDescription>Flash message goes here.</AlertDescription>
    </Alert>
    <Alert variants="outline">
      <AlertDescription>Flash message goes here.</AlertDescription>
    </Alert>
  </div>
);
export const withAlertIcon = () => (
  <div className="flex flex-col space-y-4">
    <Alert variants="solid">
      <AlertIcon />
      <AlertDescription>Flash message goes here.</AlertDescription>
    </Alert>
    <Alert variants="subtle">
      <AlertIcon />
      <AlertDescription>Flash message goes here.</AlertDescription>
    </Alert>
    <Alert variants="left-accent">
      <AlertIcon />
      <AlertDescription>Flash message goes here.</AlertDescription>
    </Alert>
    <Alert variants="light">
      <AlertIcon />
      <AlertDescription>Flash message goes here.</AlertDescription>
    </Alert>
    <Alert variants="outline">
      <AlertIcon />
      <AlertDescription>Flash message goes here.</AlertDescription>
    </Alert>
  </div>
);

export const withAlertTitleAndDescription = () => (
  <div className="flex flex-col space-y-4">
    <Alert variants="solid">
      <AlertIcon />
      <AlertTitle>Alert title here</AlertTitle>
      <AlertDescription>Flash description goes here.</AlertDescription>
    </Alert>
    <Alert variants="subtle">
      <AlertIcon />
      <AlertTitle>Alert title here</AlertTitle>
      <AlertDescription>Flash description goes here.</AlertDescription>
    </Alert>
    <Alert variants="left-accent">
      <AlertIcon />
      <AlertTitle>Alert title here</AlertTitle>
      <AlertDescription>Flash description goes here.</AlertDescription>
    </Alert>
    <Alert variants="light">
      <AlertIcon />
      <AlertTitle>Alert title here</AlertTitle>
      <AlertDescription>Flash description goes here.</AlertDescription>
    </Alert>
    <Alert variants="outline">
      <AlertIcon />
      <AlertTitle>Alert title here</AlertTitle>
      <AlertDescription>Flash description goes here.</AlertDescription>
    </Alert>
  </div>
);

export const colored = () => {
  <div className="flex flex-col space-y-4">
    <Alert color="orange" variants="solid">
      Flash message goes here.
    </Alert>
    <Alert color="blue" variants="subtle">
      Flash message goes here.
    </Alert>
    <Alert color="red" variants="left-accent">
      Flash message goes here.
    </Alert>
    <Alert color="green" variants="light">
      Flash message goes here.
    </Alert>
    <Alert color="yellow" variants="outline">
      Flash message goes here.
    </Alert>
  </div>;
};
export const closeable = () => {
  <div className="flex flex-col space-y-4">
    <Alert color="orange" variants="solid">
      Flash message goes here.
      {/* <Alert.CloseButton className='alert-close-button-yellow'> */}
    </Alert>
    <Alert color="blue" variants="subtle">
      Flash message goes here.
    </Alert>
    <Alert color="red" variants="left-accent">
      Flash message goes here.
    </Alert>
    <Alert color="green" variants="light">
      Flash message goes here.
    </Alert>
    <Alert color="yellow" variants="outline">
      Flash message goes here.
    </Alert>
  </div>;
};
