class BNode{
    data:any;
    left:any;
    right:any;

    constructor(data:any){
       this.data = data;
       this.left = null;
       this.right = null;

    }
}

class BinaryTree{
    root:any;
    constructor(){
        this.root = null;
    }

    insert(data:any){
      let newNode = new BNode(data);
      if(!this.root){
          this.root = newNode;
          return this;
      }else{
          let current  = this.root;
          while(data !== current.data){
              if(data < current.data){
                  if(!current.left){
                      current.left = newNode;
                      return this;
                  }
                  current = current.left;
              }else if(data > current.data){
                  if(!current.right){
                      current.right = newNode;
                      return this;
                  }
                  current = current.right;
              }
          }

      }
    }

    DFSPreOrder(){
       let current = this.root;
       let data:Array<any>  = [];
       function traverse(current:BNode){
           data.push(current.data);
           if(current.left)traverse(current.left);
           if(current.right)traverse(current.right);
       } 
       traverse(current);
       return data;
    }
}

let bst  = new BinaryTree();
bst.insert(1);
bst.insert(2);
bst.insert(5);
bst.insert(3);
bst.insert(4);
bst.insert(6);
console.log(bst);
