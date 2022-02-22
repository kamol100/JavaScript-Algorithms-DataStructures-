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

    deleteDuplicateItem(){
        if(!this.head) return this.head;
        let prev = this.head;
        let current = prev.next;
        while(current){
            if(prev.data === current.data){
                current = current.next;
                prev.next = current;
                this.length--;
            }else{
            prev = current;    
            current = current.next;
            }
        }

        return this;
    }

    deleteAt(position){
        let current = this.head;
        let i = 0;
        let prev = null;
        let after = null;
        if(i === 0){
            this.head = current.next;
            this.length--;
            return current;
        }

        while(i <= position){
           prev = current;
           after = prev.next.next;
           if(i === position){
               prev.next = after;
               return prev.data;
           }
           current = current.next;
            i++;
        }
        this.length--;
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
list.push(2);
list.push(3);
list.push(3);
list.push(3);
list.push(3);
list.push(4);
list.push(5);
list.push(5);
list.push(5);
//console.log(list);
let list2 = new SinglyLinkList();
list2.push(1);
list2.push(2);
list2.push(3);
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
function uniqueList(list){
   let newList = new SinglyLinkList();
   let current = list.head;
   let after = current.next;
   while(current && after){
       if(current.data !== after.data){
           newList.push(current.data);
       }
       if(!after.next){
          newList.push(after.data);
       }
       current = current.next;
       after = after.next;
   }
return newList;
}
let unique = uniqueList(list);
console.log(unique);