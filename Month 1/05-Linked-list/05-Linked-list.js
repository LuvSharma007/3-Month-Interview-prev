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
}

const LL = new LinkedList()
LL.insert(5);
LL.insert(6);
LL.insert(7);

LL.printList()



