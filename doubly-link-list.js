class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkList{
      constructor(){
          this.head = null;
          this.tail = null;
          this.length = 0
      }

      push(data){
          let newNode = new Node(data);
          if(!this.head){
              this.head = newNode;
              this.tail = newNode
          }else{
              this.tail.next = newNode;
              newNode.prev = this.tail;
              this.tail = newNode;
          }
          this.length++;
          return this;
      }
      insertAtSortedPosition(data){
          let current = this.head;
          let node = new Node(data);
          if(data < current.data && !current.prev){//begining of node
              this.head = node;
              this.head.next = current;
              current.prev = node;
              
              return this;
          }
          let insert = false;
          let before = null;
          while(current && !insert){
              if(data < current.data){
                 before = current.prev;
                let after = current.prev.next;
                before.next = node;
                node.prev = before;
                node.next = after;
                after.prev = node;  
                
                insert = true;
              }else{
                  before = current;
              }
              current = current.next;
          }
          if(!insert){
            before.next = node;
            node.prev = before;
            this.tail = node;
          }
          this.length++;
          return this;
      }
}

let dlist = new DoublyLinkList();
dlist.push(1);
dlist.push(2);
dlist.push(3)
dlist.push(4);
dlist.push(10);
console.log('dlist', dlist);

