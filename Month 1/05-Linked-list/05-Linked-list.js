// linked list

// implementing linked list

// creating a node

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// creating a linked list

class LinkedList{
    constructor(){
        this.head = null;
    }

    insert(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let currentNode = this.head;
        while(currentNode.next!==null){
            currentNode = currentNode.next
        }
        currentNode.next = newNode;
    }

    printList(){
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }        
    }

    // this handles 3 cases

    delete(position){
        let current = this.head;
        let prev = null;
        if(this.head === null){
            console.log("Linked list is empty");
            return;
        }
        if(position === 1){
            this.head = this.head.next;
            return this.head;
        }
        for(let i=1; current !== null && i<position; i++){
            prev = current;
            current = current.next; 
        }

        if(current === null){
            console.log('Position out of bounds');
        }
        prev.next = current.next;
    }

    // if the no. of elements are even, there must be two middle , so return second middle
    // if the no. of elements are odd, return middle

    middleElm(){
        if(this.head === null){
            console.log("Linked list is empty");
            return;
        }
        if(this.head.next === null){
            console.log("Only one elements in the linked list so return it");
            return this.head.value
        }
        let slow_ptr = this.head;
        let fast_ptr = this.head
        while(fast_ptr!==null && fast_ptr.next!==null){
            fast_ptr = fast_ptr.next.next;
            slow_ptr = slow_ptr.next;
        }
        return slow_ptr.value;
    }
}

const LL = new LinkedList()
LL.insert(1);
LL.insert(2);
LL.insert(3);
LL.insert(4);
LL.insert(5);
LL.insert(6);
LL.insert(7);
LL.insert(8);

// LL.printList();
// console.log("After deletion");

// LL.delete(2);
// LL.printList();

console.log(LL.middleElm());








