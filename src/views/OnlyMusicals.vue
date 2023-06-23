
<script>

import axios from 'axios';
import dayjs from 'dayjs';

export default {
    data(){
        return {
            performances:[]
        }
    },
    methods: {
        async loadPerf() {
            let response = await axios.get('/musicals/all');
            this.performances = response.data;

            console.log(this.performances)
        },
        day(date){
            return dayjs(date).format('DD/MM/YYYY в HH:mm')
        },
        goOnePage(perform){
            // console.log(perform.title)
            this.$router.push({
                name:'onepage',
                params:{
                    perform_id: perform._id
                }
            })
            
        }
        
    }, 
    mounted(){
        this.loadPerf();
    }
}
</script>


<template>
    <div class=" row row-cols-1 row-cols-md-2 g-4" style="justify-content: space-around;">

        <!-- <div v-for="(item, index) in performances " class="card mb-3" style="width: 40%;">
            <div class="row g-0">
                <div class="col-md-5">
                    <img :src="'/src/assets/'+item.image+'.jpg'" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-7">
                <div class="card-body">
                    <h5 class="card-title">{{item.title}}</h5>
                    <p class="card-text">Где проходит постановка. Адрес.</p>
                    <p class="card-text">{{item.type}}</p>
                    <div class="row">
                        <p class="card-text"><small class="text-muted">{{day(item.date)}}</small></p>
                        <button @click="buy" class="btn btn-outline-secondary">Купить билет</button>
                    </div>
                </div>
                
                </div>
            </div>
        </div> -->
        
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
                                <div class="col text-muted">От {{item.from}} до {{ item.to }} </div>
                            </div>
                        </div>
                    </div>
                    
                
                </div>
            </div>
        </div>

    </div>
</template>


<style>
.btn-outline-secondary{
    color: grey
}
</style>