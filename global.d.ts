// global.d.ts
interface Google {
    accounts: {
      id: {
        initialize: (options: {
          client_id: string;
          callback: (response: { credential: string }) => void;
          cancel_on_tap_outside?: boolean;
        }) => void;
        prompt: () => void;
      };
    };
  }
  
  interface Window {
    google: Google;
  }
  