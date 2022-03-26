/* 
    문제 풀이 보면서 푼 풀이 (LinkedList)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue();
  for (const [idx, val] of priorities.entries()) {
    queue.enqueue([val, idx]);
  }

  priorities.sort((a, b) => b - a);

  let count = 0;
  while (true) {
    const curVal = queue.peek();

    if (curVal[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const val = queue.dequeue();
      count++;

      if (val[1] === location) {
        return count;
      }
    }
  }

  return count;
}

/*
    문제 풀이 본 후 Array로 풀어본 나의 풀이
*/

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    return (this.queue[this.rear++] = value);
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(priorities, location) {
  const queue = new Queue();
  for (const [idx, val] of priorities.entries()) {
    queue.enqueue([val, idx]);
  }

  priorities.sort((a, b) => b - a);

  let count = 0;

  while (true) {
    const curVal = queue.dequeue();

    if (curVal[0] < priorities[count]) {
      queue.enqueue(curVal);
    } else {
      count++;

      if (curVal[1] === location) {
        return count;
      }
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));

/* 
    나의 풀이
*/

// class Queue {
//   constructor(arr) {
//     this.queue = arr;
//     this.front = 0;
//     this.rear = arr.length;
//   }

//   enqueue(value) {
//     return (this.queue[this.rear++] = value);
//   }

//   dequeue() {
//     const value = this.queue[this.front];
//     delete this.queue[this.front];
//     this.front++;
//     return value;
//   }

//   peek() {
//     return this.queue[this.front];
//   }

//   size() {
//     return this.rear - this.front;
//   }
// }

// function solution(priorities, location) {
//   const queue = new Queue(priorities);
//   let count = 0;

//   while (queue.size() > 0) {
//     const target = queue.dequeue();
//     location--;

//     const curSize = queue.size();

//     if (curSize > 0) {
//       for (let i = queue.front; i < queue.rear; i++) {
//         if (target < queue.queue[i]) {
//           queue.enqueue(target);

//           if (location < 0) {
//             location = queue.rear;
//           }
//           break;
//         }
//       }

//       if (curSize === queue.size()) {
//         count++;
//       }
//     }

//     if (location < 0) {
//       return count;
//     }
//   }

//   return count;
// }

// console.log(solution([2, 1, 3, 2], 2));
// console.log(solution([1, 1, 9, 1, 1, 1], 0));
