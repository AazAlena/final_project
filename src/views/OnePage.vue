<script>
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

import axios from 'axios';
import dayjs from 'dayjs';

export default {
    data(){
        return {
            qwe: faker.lorem.paragraph(10),
            performance:''
        }
    },
    methods: {
        async loadAll() {
            let response;
            response = await axios.post('/onepage', {
                params:{
                    performance_id: this.$route.params.perform_id
                }
            });
            this.performance = response.data;
            console.log(this.performance);
        },
        day(date){
            return dayjs(date)
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
        <h2>Название</h2>
        <div class="row">

            <div class="col" style="width: 40%">
                <div> <img style="width: 90%; margin: 10px" src="src/assets/EE.jpg" alt=""> </div>
                <div class="col" style="width: 90%; margin: 10px">
                    <div class="row" style="justify-content: space-around;">
                        <div class="col" style="text-align: center;">
                            <img src="src/assets/EE.jpg" class="portret" alt="">
                            <p class="name col">Имя фамилия</p>
                        </div>
                        <div class="col"  style="text-align: center;">
                            <img src="src/assets/EE.jpg" class="portret" alt="">
                            <p class="name col">Имя фамилия</p>
                        </div>
                        <div class="col"  style="text-align: center;">
                            <img src="src/assets/EE.jpg" class="portret" alt="">
                            <p class="name col">Имя фамилия</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col" style="width: 45%">
                <h5 style="margin: 10px">Дата: 2023 05/04 в 16:00</h5>
                <hr style="margin: 10px" >
                <div style="margin: 10px; font-size: 19px;">
                    <h6>Описание</h6>
                   {{this.qwe}} 
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