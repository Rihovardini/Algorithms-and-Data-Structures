// That's basic implementation of LinkedList 

class Node {
    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addLast(data) {
        let currentNode = this.head;
        
        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = new Node(data);
        this.size++;
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    removeLast() {
        if (this.head===null) {
            console.warn('The LinkedList is empty!');
            return null;
        }

        let currentNode = this.head;

        while (currentNode.next.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = null;
        this.size--;
    }

    pop() {
        if (this.head===null) {
            console.warn('The LinkedList is empty!');
            return null;
        }

        this.head = this.head.next;
        this.size--;
    }

    print() {
        let currentNode = this.head;

        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

    appendTo(value, index = 0) {

        if (this.indexValidation(index)) {
            return null;
        }

        if (this.head === null) {
            this.push(value);
            return value;
        }

        let count = 0;
        let currentNode = this.head;
        let nextNode = this.head.next;

        while (count!==index) {
            currentNode = currentNode.next;
            nextNode = currentNode.next;
            count++;
        }

        const newNode = new Node(value);
        currentNode.next = newNode;
        newNode.next = nextNode;

        this.size++;
    }

    removeNode(index = 0) {

        if (this.indexValidation(index)) {
            return null;
        }

        if (this.head === null) {
            console.warn('The LinkedList is empty!');
            return null;
        } 

        if (index === 0) {
            this.pop();
            return null;
        }

        let count = 1;
        let currentNode = this.head.next;
        let prevNode = this.head;

        while (count!== index) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            count++;
        }

        prevNode.next = currentNode.next;
        this.size--;
    }

    indexValidation(index) {
        if(index < 0 || index >= this.size) {
            console.warn('Index is not valid');
            return true;
        }

        return false;
    }

    convertToArray() {
        const arrayList = [];
        let currentNode = this.head;

        while (currentNode) {
            arrayList.push(currentNode.data);
            currentNode = currentNode.next;
        }

        return arrayList;
    }

    reverse() {
        let prevNode = null;
        let currentNode = this.head;
        let nextNode = null;

        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }

        this.head = prevNode;
    }
}