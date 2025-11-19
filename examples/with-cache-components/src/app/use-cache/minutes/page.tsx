'use cache'

import { cacheLife } from "next/cache";


export default async function Page() {
    cacheLife('minutes')
  return (
    <div>
      <span>{new Date().toISOString()}</span>
    </div>
  );
}

