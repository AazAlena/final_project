

<script>

import axios from 'axios';
import dayjs from 'dayjs';

export default {
    data(){
        return {
            performances:[],
            dataFind: '',
            titleFind: '',
            fromFind: '',
            toFind: ''
        }
    },
    methods: {
        async loadPerf() {
            let response = await axios.get('/performances/all');
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
            
        },

        async search_data(){
            console.log(this.dataFind)
            if (this.dataFind!=""){
                let response = await axios.post('/performances/find/data', 
                {
                    dataFind: this.dataFind
                });
                this.performances = response.data;
            } else {
                this.loadPerf()
            }

        },
        async search_title(){
            console.log(this.titleFind)
            if (this.titleFind!=""){
                let response = await axios.post('/performances/find/title', 
                {
                    titleFind: this.titleFind
                });
                // this.titleFind = '';
                this.performances = response.data;
            } else {
                this.loadPerf()
            }
        },
        async search_price(){
            console.log(this.fromFind, this.toFind)
            if (this.toFind!="" || this.fromFind!=""){
                let response = await axios.post('/performances/find/price', 
                {
                    fromFind:this.fromFind,
                    toFind:this.toFind
                });
                // this.titleFind = '';
                this.performances = response.data;
                console.log(this.performances)
            } else {
                this.loadPerf()
            }
        }
    
    }, 
    mounted(){
        this.loadPerf();
    }
}
</script>


<template>
    <div class="container" style="justify-content: center;">
        <div class="row r" 
        style="margin-bottom: 20px; justify-content: center; background-color: rgb(32, 37, 41); padding: 20px 10px; border-radius: 7px width: 100%;">
            <div class="col col-lg-auto mb-3 mb-md-0 me-lg-3" >
                <div class="col" ><p style="color: rgb(105,117,125)">Настройка по дате:</p></div>
                <!-- <span class="input-group-text">Время</span> -->
                <input v-model="dataFind" @input="search_data"
                style="background-color: rgb(32, 37, 41); color: rgb(105,117,125) ; width: 400px;" 
                type="date" 
                class="form-control">
            </div>
            <div class="col">
                <div class="col" ><p style="color: rgb(105,117,125)">Поиск по названию:</p></div>
                <form class="col-lg-auto mb-3 mb-lg-0 me-lg-3">
                    <input v-model="titleFind" @input="search_title" 
                    style="background-color: rgb(32, 37, 41); color: rgb(105,117,125)" 
                    type="search" 
                    class="form-control form-control-dark" 
                    placeholder="Search..." aria-label="Search">
                </form>
            </div>
            <div class="col">
                <div class="row">
                    <div class="col" ><p style="color: rgb(105,117,125)">Настройка цены:</p></div>
                    <div class="col" >
                        <div class="row">
                            <form class="col-lg-auto mb-3 mb-lg-0 me-lg-3"  >
                                
                                <input v-model="fromFind" @input="search_price" 
                                style="background-color: rgb(32, 37, 41); color: rgb(105,117,125); margin-bottom: 5px;" 
                                type="search" 
                                class="form-control form-control-dark" 
                                placeholder="От..." aria-label="Search">
                            
                                <input v-model="toFind" @input="search_price" 
                                style="background-color: rgb(32, 37, 41); color: rgb(105,117,125)" 
                                type="search" 
                                class="form-control form-control-dark" 
                                placeholder="До..." aria-label="Search">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-cols-2 e" style="justify-content: center; gap:3%;">
            <div v-for="(item, index) in performances " class="card mb-3 r" style="max-width: 540px; padding: 0;">
                <div class="row row-cols-1 row-cols-md-2 g-0">
                    <div class="col-md-4" style="">
                        <img :src="'/src/assets/'+item.image+'.jpg'" class="img-fluid rounded-start" alt="Картинка к представлению" style="border-radius: 5px; display: flex;">
                    </div>
                    <div class="col-md-8" >
                        <div class="card-body">
                            <h5 class="card-title">{{item.title}}</h5>
                            <p class="card-text">Где проходит постановка. Адрес.</p>
                            <p class="card-text" style="color:darkslategrey;">{{item.type}}</p>
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

@media (max-width: 992px) { 
    
    .r{
        width: 100%;
    }
}


</style>