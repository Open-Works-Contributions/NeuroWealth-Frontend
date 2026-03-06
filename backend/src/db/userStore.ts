/**
 * User store - Backward compatibility wrapper
 * 
 * Re-exports userRepository functions to maintain existing imports.
 */

// Re-export types and functions from userRepository
export type { OnboardingStep, Strategy, User } from './userRepository';
export {
  findUserByPhone,
  createUser,
  setUserStrategy,
  setUserWallet,
  setUserDeposit,
  setUserStep,
} from './userRepository';

// Test helpers for backward compatibility
export const _test = {
  clear: () => {
    // No-op for PostgreSQL implementation
    console.warn('_test.clear() is not supported with PostgreSQL');
  },
  all: () => {
    // No-op for PostgreSQL implementation
    console.warn('_test.all() is not supported with PostgreSQL');
    return [];
  },
  seed: () => {
    // No-op for PostgreSQL implementation
    console.warn('_test.seed() is not supported with PostgreSQL');
  },
};
