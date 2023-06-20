

<script>

export default {
    data(){
        return {
            performances:[]
        }
    },
    methods: {
        async loadNotes() {
            this.isReady = false;
            let response = await axios.get('/notes/all');
            this.notes = response.data;
            
            // console.log(this.categories)
            this.isReady = true;
        },
        day(date){
            return dayjs(date)
        }
        
    }, 
    mounted(){
        this.loadNotes();
    }
}
</script>


<template>
    
</template>


<style>

</style>