//4


/*
Try to develop a program which calculate measure of central tendency of a
sample(mean, median, mode) and measure of variability(range, variance, standard
deviation). In addition to those measures find the min, max, count, percentile,
and frequency distribution of the sample. You can create an object called
statistics and create all the functions which do statistical calculations as
method for the statistics object. 
*/

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

const statistics = {
  ages,

  count() {
    return this.ages.length;
  },

  sum() {
    return this.ages.reduce((a, b) => a + b, 0);
  },

  min() {
    return Math.min(...this.ages);
  },

  max() {
    return Math.max(...this.ages);
  },

  range() {
    return this.max() - this.min();
  },

  mean() {
    return this.sum() / this.count();
  },

  median() {
    const sorted = [...this.ages].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    }
    return sorted[middle];
  },

  mode() {
    const frequency = {};
    this.ages.forEach(age => {
      frequency[age] = (frequency[age] || 0) + 1;
    });

    let maxCount = 0;
    let mode = null;

    for (const key in frequency) {
      if (frequency[key] > maxCount) {
        maxCount = frequency[key];
        mode = key;
      }
    }

    return { mode: Number(mode), count: maxCount };
  },

  var() {
    const mean = this.mean();
    const squaredDiffs = this.ages.map(age => Math.pow(age - mean, 2));
    return squaredDiffs.reduce((a, b) => a + b, 0) / this.count();
  },

  std() {
    return Math.sqrt(this.var());
  },

  freqDist() {
    const frequency = {};
    this.ages.forEach(age => {
      frequency[age] = (frequency[age] || 0) + 1;
    });

    const total = this.count();
    const freqDist = Object.entries(frequency).map(([value, count]) => {
      return [(count / total) * 100, Number(value)];
    });

    return freqDist.sort((a, b) => b[0] - a[0]);
  },

  percentile(p) {
    if (p < 0 || p > 100) return null;
    const sorted = [...this.ages].sort((a, b) => a - b);
    const index = Math.ceil((p / 100) * sorted.length) - 1;
    return sorted[index];
  },

  describe() {
    return `
      Count: ${this.count()}
      Sum: ${this.sum()}
      Min: ${this.min()}
      Max: ${this.max()}
      Range: ${this.range()}
      Mean: ${this.mean()}
      Median: ${this.median()}
      Mode: ${JSON.stringify(this.mode())}
      Variance: ${this.var()}
      Standard Deviation: ${this.std()}
      Frequency Distribution: ${JSON.stringify(this.freqDist())}
    `;
  }
};

console.log('Count:', statistics.count()); 
console.log('Sum: ', statistics.sum()); 
console.log('Min: ', statistics.min()); 
console.log('Max: ', statistics.max()); 
console.log('Range: ', statistics.range()); 
console.log('Mean: ', statistics.mean()); 
console.log('Median: ', statistics.median()); 
console.log('Mode: ', statistics.mode()); 
console.log('Variance: ', statistics.var()); 
console.log('Standard Deviation: ', statistics.std()); 
console.log('Frequency Distribution: ', statistics.freqDist()); 
console.log('Percentile (50th): ', statistics.percentile(50)); 
console.log(statistics.describe());
