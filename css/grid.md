Grid: Two dimensional layout system  with rows and columns, making it easier to design web pages without having to use floats and positioning.


display: grid; 
grid-template-columns: 200px 100px ; 2fr 1fr ;  // Two column of 200 & 100 
grid-template-columns: repeat(noOf times, size) ; 
grid-template-rows: 200px 150px ; // 
grid-auto-rows: size ; // Decide of each row whenever we add another element

grid-auto-rows: minmax(min, auto) ; auto : take the size which ever is required to put all the content

grid-gap: size ; // Gap of size will be there for row & columns both 
grid-row-gap: size ; 
grid-column-gap: size ; 


grid-template-areas: "header header" "sidebar content" 

.grid-items-1{
    grid-area: header ; 
}


grid-auto-rows: 150px ;
grid-template-rows: 200px ; // First row will be size of 150px & other will be 200px 


