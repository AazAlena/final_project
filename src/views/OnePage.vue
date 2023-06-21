<script>
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

import axios from 'axios';
import dayjs from 'dayjs';

export default {
    data(){
        return {
            qwe: faker.lorem.paragraph(10),
            performance: '',
            description: ''
        }
    },
    methods: {
        async loadAll() {
            let response;
            response = await axios('/onepage', {
                params:{
                    perform_id: this.$route.params.perform_id
                }
            });
            this.performance = response.data;
            this.description = this.performance.description;
            console.log('2', this.performance);
        },
        day(date){
            return dayjs(date).format('MM/DD/YYYY в HH:mm')
        },
        async buy(){
            
        }
        
    }, 
    mounted(){
        this.loadAll();
    }
}
</script>

<template >
<div style="justify-content: center; display: flex">
    <div class="container owen">
        <h2>{{this.performance.title}}</h2>
        <div class="row">

            <div class="col" style="width: 40%">
                <div> <img style="width: 90%; margin: 10px" :src="'/src/assets/'+this.performance.image+'.jpg'" alt=""> </div>
                <div class="col" style="width: 90%; margin: 10px">
                    <div class="row" style="justify-content: space-around;">
                        <div class="col" v-for="(item, index) in this.performance.actors" style="text-align: center;">
                            <img :src="'src/assets/'+item.image+'.jpg'" class="portret" alt="">
                            <p class="name col">{{item.name}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col" style="width: 45%">
                <h5 style="margin: 10px">Ввемя: {{day(this.performance.date)}}</h5>
                <hr style="margin: 10px" >
                <div style="margin: 10px; font-size: 19px;">
                    <h6>Описание</h6>
                   <!-- {{this.description}}  -->
                </div>
                <div style="display: flex; justify-content: end;">
                    <button class="btn btn-outline-secondary" style="width: 40%; border-color: brown; color:brown">Купить билет</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<style>
    .owen{
        margin: 40px;
        box-shadow: 0 5px 30px 0 rgba(0,0,0,0.4);;
        border-radius: 7px;
        max-width: 70%;
        padding:10px
    }

    .portret{
        border-radius: 50%;
        width: 50%;
        height: auto;
        
    }

    .name{
        color:grey;
    }

    
</style>