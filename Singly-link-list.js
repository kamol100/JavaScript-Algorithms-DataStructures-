class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

  

    getNodefromTail(position){
        if(position > this.length) return null;
        let current = this.head;
        let i = 0;
        let stack = [];
        while(current){
            stack.push(current.data);
            current = current.next;
            i++;
        }
        let newPosition = i-position-1;
        return stack[newPosition];
    }
}

let list = new SinglyLinkList();
list.push(1);
list.push(3);
list.push(7);
list.push(8);
list.push(9);
//console.log(list);
let list2 = new SinglyLinkList();
list2.push(1);
list2.push(2);
function mergeTwoSortedLinkList(list, list2){
    let newList = new SinglyLinkList();
    if(!list.head && !list2.head){
        return null;
    }
    let current1 = list.head;
    let current2 = list2.head;
    while(current1 && current2){
        if(current1.data <= current2.data){
            newList.push(current1.data);
            current1 = current1.next;
        }else{
            newList.push(current2.data);
            current2 = current2.next;
        }
    }
    while(current1){
        newList.push(current1.data);
        current1 = current1.next;
    }
    while(current2){
        newList.push(current2.data);
        current2 = current2.next;
    }
    return newList;
}
let list3 = mergeTwoSortedLinkList(list, list2);
console.log(list3);