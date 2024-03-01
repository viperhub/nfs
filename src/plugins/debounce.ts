/**
 * Debounce function that will delay the processing of the func function until after waitFor milliseconds have elapsed since the last time this function was invoked.
 * @param func - Function to debounce.
 * @param waitFor - Amount of time to wait before calling func (in milliseconds).
 */
export function debounce<F extends (...args: any[]) => any>(func: F, waitFor: number) {
  // Variable to hold the timeout
  let timeout: ReturnType<typeof setTimeout> | null = null

  // The debounced function
  const debounced = (...args: Parameters<F>) => {
    // If there's a timeout, clear it
    if (timeout !== null) {
      clearTimeout(timeout)
      timeout = null
    }

    // Set a new timeout
    timeout = setTimeout(() => func(...args), waitFor)
  }

  // Return the debounced function
  return debounced as (...args: Parameters<F>) => ReturnType<F>
}
