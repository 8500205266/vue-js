export const mixin={
    data() {
        return {
          fruits: [ 
               'banana',  
                  'orange',  
                'apple' 
               ] ,
               filterText:''
        }},
        computed:
        {
          filterdfruits()
          {
            return this.fruits.filter((element)=>{
            return element.match(this.filterText);
          });
        }}
}