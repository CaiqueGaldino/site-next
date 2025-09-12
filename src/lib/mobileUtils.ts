"use client";

// Mobile-specific utilities and interactions

// Haptic feedback simulation
export const hapticFeedback = (type: 'light' | 'medium' | 'heavy' = 'light') => {
  if (typeof window === 'undefined') return;
  
  const patterns = {
    light: 50,
    medium: 100,
    heavy: 200
  };
  
  if ('vibrate' in navigator) {
    navigator.vibrate(patterns[type]);
  }
};

// Touch gesture detection
export const useSwipeGesture = (
  onSwipeLeft?: () => void,
  onSwipeRight?: () => void,
  threshold: number = 50
) => {
  let touchStart: number | null = null;
  let touchEnd: number | null = null;

  const handleTouchStart = (e: TouchEvent) => {
    touchEnd = null;
    touchStart = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEnd = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > threshold;
    const isRightSwipe = distance < -threshold;

    if (isLeftSwipe && onSwipeLeft) {
      hapticFeedback('light');
      onSwipeLeft();
    }
    if (isRightSwipe && onSwipeRight) {
      hapticFeedback('light');
      onSwipeRight();
    }
  };

  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
  };
};

// Device detection
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const isIOSDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

export const isTouchDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Network status detection for performance optimization
export const useNetworkStatus = () => {
  if (typeof window === 'undefined') return { isOnline: true, isSlowConnection: false };
  
  const connection = (navigator as any).connection || 
                    (navigator as any).mozConnection || 
                    (navigator as any).webkitConnection;
  
  const isSlowConnection = connection && 
    (connection.effectiveType === 'slow-2g' || 
     connection.effectiveType === '2g' || 
     connection.downlink < 1.5);

  return {
    isOnline: navigator.onLine,
    isSlowConnection: Boolean(isSlowConnection),
    effectiveType: connection?.effectiveType || 'unknown',
    downlink: connection?.downlink || 0
  };
};

// Performance monitoring for mobile
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  
  // Log only if performance is concerning (>100ms for interactions)
  if (end - start > 100) {
    console.warn(`Performance warning: ${name} took ${end - start}ms`);
  }
};

// Optimized scroll behavior for mobile
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  // Use native smooth scroll if supported, fallback to polyfill
  if ('scrollBehavior' in document.documentElement.style) {
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start',
      inline: 'nearest'
    });
  } else {
    // Fallback for older browsers
    const targetPosition = element.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  }
  
  hapticFeedback('light');
};

// Mobile-optimized image loading
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Battery status for performance optimization
export const useBatteryOptimization = () => {
  if (typeof window === 'undefined') return { shouldOptimize: false };
  
  const battery = (navigator as any).battery || (navigator as any).getBattery?.();
  const isLowBattery = battery && battery.level < 0.2;
  const isCharging = battery && battery.charging;
  
  return {
    shouldOptimize: isLowBattery && !isCharging,
    batteryLevel: battery?.level || 1,
    isCharging: Boolean(isCharging)
  };
};

// Touch-friendly button enhancement
export const enhanceButtonForMobile = (element: HTMLElement) => {
  if (!isTouchDevice()) return;
  
  element.style.minHeight = '44px'; // Apple's recommended minimum touch target
  element.style.minWidth = '44px';
  element.style.touchAction = 'manipulation'; // Prevents double-tap zoom
  
  // Add visual feedback for touch
  element.addEventListener('touchstart', () => {
    element.style.transform = 'scale(0.98)';
    hapticFeedback('light');
  });
  
  element.addEventListener('touchend', () => {
    element.style.transform = 'scale(1)';
  });
};

// Intersection Observer for mobile performance
export const createMobileObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '50px', // Larger margin for mobile to preload earlier
    ...options
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};

// Mobile-specific error handling
export const handleMobileError = (error: Error, context: string) => {
  console.error(`Mobile Error in ${context}:`, error);
  
  // Show user-friendly error for mobile users
  if (isMobileDevice()) {
    // You could integrate with a toast library here
    console.log('User-friendly mobile error message would appear here');
  }
};

export default {
  hapticFeedback,
  useSwipeGesture,
  isMobileDevice,
  isIOSDevice,
  isTouchDevice,
  useNetworkStatus,
  measurePerformance,
  smoothScrollTo,
  preloadImage,
  useBatteryOptimization,
  enhanceButtonForMobile,
  createMobileObserver,
  handleMobileError
};