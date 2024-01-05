import * as React from 'react';
import { IconProps } from './icon';

export const QuestionCircleIon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...rest }, ref) => {
    return (
      <svg ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={color} {...rest}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );
  },
);

export const InfoIcon = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...rest }, ref) => {
  return (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={color} {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
});

export const CheckCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...rest }, ref) => {
    return (
      <svg ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={color} {...rest}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );
  },
);

export const XCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...rest }, ref) => {
  return (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={color} {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
});
export const XIcon = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...rest }, ref) => {
  return (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={color} {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
});

export const ExclamationIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...rest }, ref) => {
    return (
      <svg ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={color} {...rest}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    );
  },
);

export const SelectorIcon = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...rest }, ref) => {
  return (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={color} {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
    </svg>
  );
});

export const ChevronUpIcon = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...rest }, ref) => {
  return (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={color} {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
  );
});

export const ArrowRightIcon = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...rest }, ref) => {
  return (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={color} {...rest}>
      <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
});

export const ChevronRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...rest }, ref) => {
    return (
      <svg ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={color} {...rest}>
        <path d="M9 5l7 7-7 7" />
      </svg>
    );
  },
);

export const ClipboardCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...rest }, ref) => {
    return (
      <svg ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={color} {...rest}>
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    );
  },
);

export const CloseIcon = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...rest }, ref) => {
  return (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={color} {...rest}>
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
});

export const ComputerIcon = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...rest }, ref) => {
  return (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={color} {...rest}>
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
});

export const ConfigIcon = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...rest }, ref) => {
  return (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={color} {...rest}>
      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
});

export const DotIcon = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...rest }, ref) => {
  return (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={color} {...rest}>
      <path fill="currentColor" d="M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z" />
    </svg>
  );
});

export const EditIcon = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...rest }, ref) => {
  return (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={color} {...rest}>
      <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  );
});
