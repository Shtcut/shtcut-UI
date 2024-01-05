import * as React from 'react';
import { CheckCircleIcon, ExclamationIcon, Icon, InfoIcon, XCircleIcon } from '../src';

export default {
  title: 'Icon',
  component: Icon,
  parameters: {
    control: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="flex space-x-6">
    <Icon as={InfoIcon} label="Info" className="w-6 h-6 text-blue-500" />
    <Icon as={XCircleIcon} label="x-circle" className="w-6 h-6 text-green-500" />
    <Icon as={CheckCircleIcon} label="check-circle" className="w-6 h-6 text-red-500" />
    <Icon as={ExclamationIcon} label="exclamation" className="w-6 h-6 text-red-500" />
  </div>
);
