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
      reverse(){
       if(!this.head || !this.head.next) return this.head;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = null;
        let prev = null;
        while(node){
            next = node.next;
            node.next = prev;
            if(node === this.head){
                node.prev = null;
            }else{

            node.prev = node;
            }
            prev = node;
            node = next;
        }
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
console.log('dlist', dlist);

