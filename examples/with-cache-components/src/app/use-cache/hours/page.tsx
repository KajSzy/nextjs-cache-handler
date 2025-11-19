'use cache'

import { cacheLife } from "next/cache";


export default async function Page() {
    cacheLife('hours')
  return (
    <div>
      <span>{new Date().toISOString()}</span>
    </div>
  );
}

