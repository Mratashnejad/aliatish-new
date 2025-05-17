/**
 * Creates a seeded random number generator for consistent random values between server and client
 * This helps prevent hydration mismatches with random values
 * 
 * @param seed Initial seed value (default: 1)
 * @returns A function that returns a random number between 0 and 1
 */
export function createSeededRandom(seed = 1) {
  return function() {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
}

/**
 * Utility to safely use random values in Next.js
 * Uses a consistent seed to ensure server and client generate the same values
 * 
 * @param initialValue Initial value to use during server rendering
 * @param randomGenerator Function that generates random values on the client
 * @param seed Seed for the random generator
 * @returns A function that safely generates random values
 */
export function createHydrationSafeRandom<T>(
  initialValue: T,
  randomGenerator: (getRandom: () => number) => T,
  seed = 42
): () => T {
  return () => {
    // This will only be used on the client after hydration
    if (typeof window !== 'undefined') {
      return randomGenerator(createSeededRandom(seed));
    }
    // During SSR, return the initial value
    return initialValue;
  };
} 