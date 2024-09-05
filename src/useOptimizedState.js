import { useState, useCallback } from 'react';
import { isEqual } from 'lodash';

// Custom hook for optimized state
export const useOptimizedState = (initialState) => {
  const [state, setState] = useState(initialState);

  // Optimized setState using shallow comparison
  const optimizedSetState = useCallback((newState) => {
    if (!isEqual(state, newState)) {
      setState(newState);
    }
  }, [state]);

  return [state, optimizedSetState];
};
