export function subjectiveRange(buckets) {
  return function (value) {
    const firstBucket = buckets[0];
    const lastBucket = buckets[buckets.length - 1];

    if (value < firstBucket.boundary) {
      const min = firstBucket.boundary;
      throw new Error(`${value} is less than minimum ${min}`);
    }

    if (value >= lastBucket.boundary && lastBucket.max) {
      throw new Error(
        `${value} is greater than maximum ${lastBucket.boundary}`
      );
    }

    for (let i = buckets.length - 1; i >= 0; i--) {
      const bucket = buckets[i];
      if (value >= bucket.boundary) {
        return bucket.label;
      }
    }
  };
}
