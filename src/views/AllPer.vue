

<script>

import axios from 'axios';
import dayjs from 'dayjs';

export default {
    data(){
        return {
            performances:[],
            dataFind: '',
            titleFind: ''
        }
    },
    methods: {
        async loadPerf() {
            let response = await axios.get('/performances/all');
            this.performances = response.data;

            console.log(this.performances)
        },
        day(date){
            return dayjs(date).format('MM/DD/YYYY в HH:mm')
        },
        goOnePage(perform){
            // console.log(perform.title)
            this.$router.push({
                name:'onepage',
                params:{
                    perform_id: perform._id
                }
            })
            
        },

        async search_data(){
            console.log(this.dataFind)
            let response = await axios.post('/performances/find/data', 
            {
                dataFind: this.dataFind
            });
            this.dataFind = '';
            this.performances = response.data;

        },
        async search_title(){
            console.log(this.titleFind)
            let response = await axios.post('/performances/find/title', 
            {
                titleFind: this.titleFind
            });
            // this.titleFind = '';
            this.performances = response.data;
        }
    
    }, 
    mounted(){
        this.loadPerf();
    }
}
</script>


<template>
    <div class="container" style="justify-content: center;">
        <div class="row" 
        style="margin: 20px 20px 20px 40px; justify-content: center; background-color: rgb(32, 37, 41); padding: 20px 10px; border-radius: 7px">
            <div class="col col-lg-auto mb-3 mb-lg-0 me-lg-3" >
                <!-- <span class="input-group-text">Время</span> -->
                <input v-model="dataFind" @input="search_data"
                style="background-color: rgb(32, 37, 41); color: rgb(105,117,125) ; width: 400px;" 
                type="datetime-local" 
                class="form-control">
            </div>
            <div class="col">
                <form class="col-lg-auto mb-3 mb-lg-0 me-lg-3">
                    <input v-model="titleFind" @keydown="search_title" 
                    style="background-color: rgb(32, 37, 41); color: rgb(105,117,125)" 
                    type="search" 
                    class="form-control form-control-dark" 
                    placeholder="Search..." aria-label="Search">
                </form>
            </div>
        </div>
        <div class=" row row-cols-1 row-cols-md-2 g-4" style="justify-content: space-around;">
            <div v-for="(item, index) in performances " class="card mb-3" style="width: 40%; padding: 0;">
                <div class="row g-0">
                    <div class="col-md-5" style="justify-content: center;">
                        <img :src="'/src/assets/'+item.image+'.jpg'" class="img-fluid rounded-start" alt="..." style="border-radius: 5px; display: flex;">
                    </div>
                    <div class="col-md-7">
                    <div class="card-body">
                        <h5 class="card-title">{{item.title}}</h5>
                        <p class="card-text">Где проходит постановка. Адрес.</p>
                        <p class="card-text">{{item.type}}</p>
                        <div class="col">
                            <p class="card-text"><small class="text-muted">{{day(item.date)}}</small></p>
                            <div class="row" style="align-items: end;">
                                <div class="col"><button @click="goOnePage(item)" class="btn all2 ">Купить билет</button></div>
                                <div class="col text-muted">От 1000 до 5000 </div>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.all2{
    color: black;
    border: 1px solid black;
}

.all2:hover{
    color: white;
    border: 1px solid rgb(105,117,125);
    background-color: rgb(105,117,125);
}



</style>