// (Removed global Paddle declaration to resolve type conflicts)

declare global {
  interface Window {
    Paddle?: {
      Setup: (options: { vendor: string | number }) => void;
      Checkout?: {
        open: (options: {
          product?: string | number;
          items?: Array<{ priceId: string; quantity: number }>;
          passthrough?: string;
          successCallback?: () => void;
          closeCallback?: () => void;
        }) => void;
      };
    };
  }
}

export {}; 