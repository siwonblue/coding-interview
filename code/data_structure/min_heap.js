class MinHeap {
  constructor() {
    this.heap = [];
  }
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  poll() {
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }
  bubbleUp() {
    let curIdx = this.heap.length - 1;
    let parrentIdx = Math.floor(curIdx / 2);
    while (this.heap[parrentIdx] && this.heap[parrentIdx] > this.heap[curIdx]) {
      this.swap(parrentIdx, curIdx);
      curIdx = parrentIdx;
      parrentIdx = Math.floor(curIdx / 2);
    }
  }
  bubbleDown() {
    let curIdx = 0;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[rightIdx]) {
      if (this.heap[curIdx] > this.heap[leftIdx]) this.swap(curIdx, leftIdx);
      return;
    }

    while (
      this.heap[curIdx] > this.heap[leftIdx] ||
      this.heap[curIdx] > this.heap[rightIdx]
    ) {
      if (this.heap[leftIdx] >= this.heap[rightIdx]) {
        this.swap(curIdx, rightIdx);
        curIdx = rightIdx;
        leftIdx = curIdx * 2;
        rightIdx = curIdx * 2 + 1;
      } else {
        this.swap(curIdx, leftIdx);
        curIdx = leftIdx;
        leftIdx = curIdx * 2;
        rightIdx = curIdx * 2 + 1;
      }
    }
  }
}
