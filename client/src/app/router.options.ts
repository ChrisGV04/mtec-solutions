import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  scrollBehavior(to, from, savedPos) {
    if (savedPos) return savedPos;
    if (to.fullPath === from.fullPath) return { top: 0, behavior: 'smooth' };
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 120 };
    return { top: 0 };
  },
};
