'use cache'

import { cacheLife } from "next/cache";

/**
 * https://nextjs.org/docs/app/api-reference/functions/cacheLife#preset-cache-profiles
 */

const CACHE_LIFE = {
    expire: 3600,
    revalidate: 3600,
    stale: 3600,
}

export default async function Page() {
    cacheLife({
        expire: 3600,
        revalidate: 3600,
        stale: 3600,
    })
  return (
    <div>
        <p>Custom cache life</p>
        <p>Expire: <code>{CACHE_LIFE.expire}</code></p>
        <p>Revalidate: <code>{CACHE_LIFE.revalidate}</code></p>
        <p>Stale: <code>{CACHE_LIFE.stale}</code></p>
      <span>{new Date().toISOString()}</span>
    </div>
  );
}

