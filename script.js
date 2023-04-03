    const Node = (value = null, nextNode = null) => {
        return {value, nextNode};
    };
    
    const LinkedList = () => {
        return {
            head:null,

            // adds a new node to the end of the list
            append(value) {
                let newNode = Node(value);
                
                if(this.head === null){
                    this.head = newNode;

                }else{
                    let head = this.head;

                    while (head.nextNode !== null) {

                        head = head.nextNode;
                    }
                    head.nextNode = newNode;
                }    
            },


            // adds a new node to the start of the list
            prepend(value) {
                let newNode = Node(value);

                    if(this.head === null) {
                        this.head = newNode;
                    } else {
                        newNode.nextNode = this.head;
                        this.head = newNode;
                    }   
            },


            //  returns the total number of nodes in the list
            size() {
                let num = 0;
                let head = this.head;
                
                    while (head !== null) {

                        head = head.nextNode;
                        num += 1;
                    }

                    return num;
            },


            // returns the last node in the list
            headNode() {
                
                    return this.head.value;
            },

            // returns the node at the given index
            at(index) {
                let indexCount = 0;
                let head = this.head;

                    while (head !== null) {

                        if(index === indexCount) {
                            return head.value;
                        }

                        head = head.nextNode;
                        indexCount++;
                        continue;
                    }
                    return null;
            },


            // removes the last element from the list
            pop() {
                let head = this.head;

                    if(this.head === null) return;
                    if(this.head.nextNode === null) return this.head = null;

                    while (head !== null) {
                        if(head.nextNode.nextNode === null) {
                            head.nextNode = null;

                        }
                        head = head.nextNode;
                    }
            },


            // returns true if the passed in value is in the list and otherwise returns false.
            contains(value) {
                let head = this.head;

                    while (head !== null) {

                        if(head.value === value){
                            return true;
                        }
                        head = head.nextNode;
                    } 

                    return false;
            },


            // returns the index of the node containing value, or null if not found
            find(value) {
                let head = this.head;
                let index = 0;

                    while (head !== null) {

                        if(head.value === value){
                            return index;
                        }

                        head = head.nextNode;
                        index++;
                    }

                    return null;
            },



            // prints LinkedList in following format: ( value ) -> ( value ) -> ( value ) -> null
            toString() {
                let string = '';
                let head = this.head;

                        while (head !== null) {

                            string += `( ${head.value} ) ->  `;
                            
                            head = head.nextNode;
                        }

                    return string += 'null';
            },



            // inserts a new node with the provided value at the given index
            insertAt(value, index) {
                let head = this.head;
                let newNode = Node(value);
                let prevNode;
                let indexCount = 0;

                while (head !== null) {
                    
                    if(index === indexCount) {
                        newNode.nextNode = head;
                        prevNode.nextNode = newNode;
                        return;
                    }

                    prevNode = head;
                    head = head.nextNode;
                    indexCount++;
                }

                return null;
            },


            // removes the node at the given index
            removeAt(index) {
                let head = this.head;
                let prevNode;
                let indexCount = 0;

                while (head !== null) {
                    
                    if(index === indexCount) {
                        return prevNode.nextNode = head.nextNode;
                    }

                    prevNode = head;
                    head = head.nextNode;
                    indexCount++;
                }

                return null;
            }
        };
    };

    const list = LinkedList();

    // list.function()